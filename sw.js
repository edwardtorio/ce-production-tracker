// Minimal service worker — exists mainly so browsers treat this site as an
// installable PWA ("Add to Home Screen"). It doesn't cache anything itself:
// the tracker's data lives in Supabase and always needs a live connection,
// so serving a stale cached copy while offline would be worse than nothing.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // no-op: always go to the network
