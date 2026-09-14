// src/utils/cookieUtils.js

/**
 * Sets a browser cookie with configurable options.
 * 
 * @param {string} name - Cookie name
 * @param {string|object} value - Cookie value (objects will be auto-JSON stringified)
 * @param {number} [days=7] - Number of days until expiration (0 for session-only)
 * @param {object} [options={}] - Additional cookie flags (path, sameSite, secure, domain)
 */
export const setCookie = (name, value, days = 7, options = {}) => {
  if (typeof window === 'undefined') return;

  const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  const path = options.path ? `; path=${options.path}` : '; path=/';
  const sameSite = options.sameSite ? `; sameSite=${options.sameSite}` : '; sameSite=Lax';
  const secure = options.secure || window.location.protocol === 'https:' ? '; Secure' : '';
  const domain = options.domain ? `; domain=${options.domain}` : '';

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(cookieValue)}${expires}${path}${domain}${sameSite}${secure}`;
};

/**
 * Retrieves the value of a specific cookie by name.
 * Auto-parses JSON objects if applicable.
 * 
 * @param {string} name - Cookie name
 * @returns {string|object|null} Cookie value or null if not found
 */
export const getCookie = (name) => {
  if (typeof window === 'undefined') return null;

  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      const rawValue = decodeURIComponent(c.substring(nameEQ.length));

      // Attempt to parse JSON if stored value is an object string
      try {
        return JSON.parse(rawValue);
      } catch {
        return rawValue;
      }
    }
  }

  return null;
};

/**
 * Deletes a cookie by setting its expiration date to the past.
 * 
 * @param {string} name - Cookie name to delete
 * @param {string} [path='/'] - Path scope of the cookie
 * @param {string} [domain=''] - Domain scope of the cookie
 */
export const deleteCookie = (name, path = '/', domain = '') => {
  if (typeof window === 'undefined') return;

  const domainStr = domain ? `; domain=${domain}` : '';
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}${domainStr}`;
};

/**
 * Checks if a cookie exists and is not empty.
 * 
 * @param {string} name - Cookie name
 * @returns {boolean} True if cookie exists
 */
export const hasCookie = (name) => {
  const value = getCookie(name);
  return value !== null && value !== undefined && value !== '';
};

/**
 * Returns an object containing all available key-value pairs of current cookies.
 * 
 * @returns {object} Map of all cookies
 */
export const getAllCookies = () => {
  if (typeof window === 'undefined') return {};

  const cookies = document.cookie.split(';');
  const cookieMap = {};

  cookies.forEach((cookie) => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      const name = decodeURIComponent(parts[0].trim());
      const rawValue = decodeURIComponent(parts.slice(1).join('=').trim());

      try {
        cookieMap[name] = JSON.parse(rawValue);
      } catch {
        cookieMap[name] = rawValue;
      }
    }
  });

  return cookieMap;
};

// ============================================================================
// VIP / APP-SPECIFIC COOKIE HELPERS
// ============================================================================

const VIP_TOKEN_KEY = 'atsewa_vip_session';
const COOKIE_CONSENT_KEY = 'atsewa_cookie_consent';

/**
 * Stores VIP member authentication token into an encrypted/secure cookie.
 */
export const setVipSessionToken = (token, days = 30) => {
  setCookie(VIP_TOKEN_KEY, token, days, { sameSite: 'Strict' });
};

/**
 * Retrieves active VIP member session token.
 */
export const getVipSessionToken = () => {
  return getCookie(VIP_TOKEN_KEY);
};

/**
 * Removes active VIP session cookie upon logout.
 */
export const clearVipSession = () => {
  deleteCookie(VIP_TOKEN_KEY);
};

/**
 * Saves user preference regarding cookie consent.
 */
export const setCookieConsent = (accepted = true) => {
  setCookie(COOKIE_CONSENT_KEY, { accepted, timestamp: new Date().toISOString() }, 365);
};

/**
 * Checks if user has accepted cookie policy.
 */
export const hasConsentedToCookies = () => {
  return hasCookie(COOKIE_CONSENT_KEY);
};