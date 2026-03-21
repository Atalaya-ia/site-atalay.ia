const http = require('http');
const https = require('https');
const crypto = require('crypto');
const url = require('url');

const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://atalayia.com.br';
const PORT = process.env.PORT || 8080;

// In-memory stores (fine for single-instance, low-traffic proxy)
const pendingStates = new Map();
const rateLimiter = new Map();
const RATE_LIMIT = 10;
const RATE_WINDOW = 60000;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimiter.get(ip) || { count: 0, resetAt: now + RATE_WINDOW };
  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + RATE_WINDOW;
  }
  record.count++;
  rateLimiter.set(ip, record);
  return record.count > RATE_LIMIT;
}

// Cleanup stale states every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [state, ts] of pendingStates) {
    if (now - ts > 600000) pendingStates.delete(state);
  }
  for (const [ip, record] of rateLimiter) {
    if (now > record.resetAt) rateLimiter.delete(ip);
  }
}, 300000);

function makeRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // CORS — restrict to our domain only
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Rate limiting
  if (isRateLimited(clientIp)) {
    res.writeHead(429);
    res.end('Too many requests');
    return;
  }

  if (parsed.pathname === '/auth') {
    const state = crypto.randomBytes(16).toString('hex');
    pendingStates.set(state, Date.now());
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&state=${state}`;
    res.writeHead(302, { Location: authUrl });
    res.end();
    return;
  }

  if (parsed.pathname === '/callback') {
    const code = parsed.query.code;
    const state = parsed.query.state;

    // Validate state (CSRF protection)
    if (!state || !pendingStates.has(state)) {
      res.writeHead(403);
      res.end('Invalid state parameter');
      return;
    }
    pendingStates.delete(state);

    // Validate code format
    if (!code || typeof code !== 'string' || !/^[a-f0-9]{20}$/.test(code)) {
      res.writeHead(400);
      res.end('Invalid code parameter');
      return;
    }

    try {
      const postData = JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      });

      const response = await makeRequest({
        hostname: 'github.com',
        path: '/login/oauth/access_token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      }, postData);

      const body = JSON.parse(response.data);
      const content = body.access_token
        ? `authorization:github:success:{"token":"${body.access_token}","provider":"github"}`
        : `authorization:github:error:${JSON.stringify(body)}`;

      // Use JSON.stringify to safely escape the content for JS embedding (prevents XSS)
      const safeContent = JSON.stringify(content);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<!DOCTYPE html><html><body><script>
        (function() {
          function recieveMessage(e) {
            window.opener.postMessage(
              ${safeContent},
              e.origin
            );
            window.removeEventListener("message", recieveMessage, false);
          }
          window.addEventListener("message", recieveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script></body></html>`);
    } catch (err) {
      console.error('OAuth error:', err);
      res.writeHead(500);
      res.end('Authentication failed');
    }
    return;
  }

  // Health check
  if (parsed.pathname === '/') {
    res.writeHead(200);
    res.end('OK');
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`OAuth proxy listening on port ${PORT}`);
});
