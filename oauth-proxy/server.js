const http = require('http');
const https = require('https');
const url = require('url');

const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const PORT = process.env.PORT || 8080;

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

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (parsed.pathname === '/auth') {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user`;
    res.writeHead(302, { Location: authUrl });
    res.end();
    return;
  }

  if (parsed.pathname === '/callback') {
    const code = parsed.query.code;
    if (!code) {
      res.writeHead(400);
      res.end('Missing code parameter');
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

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<!DOCTYPE html><html><body><script>
        (function() {
          function recieveMessage(e) {
            console.log("recieveMessage %o", e);
            window.opener.postMessage(
              '${content}',
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

  if (parsed.pathname === '/success') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body>Authentication successful. You can close this window.</body></html>');
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
