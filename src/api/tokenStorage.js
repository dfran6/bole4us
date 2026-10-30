// Access token only. The backend never issues a refresh token (login and
// register return only an access_token), so there's nothing else to store.
// If that changes, this is the one place to update.
//
// sessionStorage, not localStorage: localStorage is shared by every tab of
// this origin, so logging into a different account in one tab silently
// swapped the session in every other tab on the next reload. sessionStorage
// is per-tab, so each tab keeps its own signed-in account.
const ACCESS_TOKEN_KEY = 'bole4us_access_token';
const CART_KEY = 'bole4us_cart';

export function getAccessToken() {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearAccessToken() {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  // The cart is cross-account leftover state too -- if it isn't cleared
  // here, the next account signed in on this tab sees the previous
  // account's cart.
  localStorage.removeItem(CART_KEY);
}

export { ACCESS_TOKEN_KEY };
