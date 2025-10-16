// The client-side code for this is: `src/assets/js/reload.js`, and it's
// only ever called in `src/assets/js/fetcher.js`. 
const reload = new URL(
  new URLSearchParams(window.location.search).get('reload') || '/',
  // If no origin is specified, then use ours.
  // e.g. "/foobar.html" ->"https://${document.location.origin}/foobar.html"
  // Our client code always specifies an origin, so the extra validation
  // below is for non-dino-park users of this file.
  window.location.origin
);
// Only redirect internally. External redirects are handled by the
// backend. `reload` uses the current origin when constructing its
// redirect URL, and so we redo that here to hedge against untrustworthy
// input.
const reloadUrl = new URL(reload.pathname, window.location.origin);
// Preserve the rest of the URL.
reloadUrl.search = reload.search;
reloadUrl.hash = reload.hash;
// Punt to the backend, it'll deal with the 404, etc, etc.
window.location.href = reloadUrl.toString();
