/**
 * analytics.ts — Centralized dataLayer utility
 *
 * All tracking goes through GTM via window.dataLayer.
 * Safe to call even if GTM is blocked by ad-blockers.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function push(event: string, params: Record<string, unknown> = {}): void {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    // Silently fail if dataLayer is unavailable (ad-blocker, SSR, etc.)
  }
}

// ── Consent ──

export function updateConsent(granted: boolean): void {
  try {
    window.dataLayer = window.dataLayer || [];
    const state = granted ? 'granted' : 'denied';
    window.dataLayer.push({
      event: 'consent_update',
      // gtag consent update — GTM reads this via built-in consent trigger
    });
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }
  } catch {
    // Silently fail
  }
}

// ── B2C: Audience / Content events ──

export function trackArticleRead(params: {
  article_id: string;
  category: string;
  author: string;
  publish_date: string;
}): void {
  push('article_read', params);
}

export function trackNewsletterSubscribe(params: {
  lead_source: string;
}): void {
  push('newsletter_subscribe', params);
}

// ── B2B: Product / SaaS events ──

export function trackGenerateLead(params: {
  lead_type: string;
}): void {
  push('generate_lead', params);
}

export function trackSignUp(params: {
  method: string;
}): void {
  push('sign_up', params);
}

export function trackFeatureUsageIntent(params: {
  feature_name: string;
  ui_location: string;
}): void {
  push('feature_usage_intent', params);
}

// ── Page view (virtual, for SPA-like navigation) ──

export function trackPageView(params: {
  page_path: string;
  page_title: string;
}): void {
  push('page_view', params);
}
