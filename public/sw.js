// This application no longer uses a service worker. This file replaces and
// retires older cached workers that may still be registered at /sw.js.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
