/* Çevrimdışı destek. Yeni dosya yayımladığında VERSION değerini artır. */
const VERSION = "tgorm-v3";
const CORE = [
  "./",
  "index.html",
  "artists.js",
  "info_auto.js",
  "info.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Own files and Google Fonts: answer from the cache at once, refresh it in the background.
   Anything else (YouTube, Spotify, Wikipedia links) goes straight to the network. */
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  const mine = url.origin === self.location.origin;
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (e.request.method !== "GET" || (!mine && !fonts)) return;
  e.respondWith(
    caches.open(VERSION).then(cache =>
      cache.match(e.request, {ignoreSearch: mine}).then(hit => {
        const net = fetch(e.request)
          .then(res => { if (res && (res.ok || res.type === "opaque")) cache.put(e.request, res.clone()); return res; })
          .catch(() => hit);
        return hit || net;
      })
    )
  );
});
