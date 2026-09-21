'use client';

import { useEffect } from 'react';

const CLEANUP_RELOAD_KEY = 'calaya-service-worker-cleanup';

export default function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const removeLegacyWorker = async () => {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const legacyRegistrations = registrations.filter((registration) => {
        const worker = registration.active || registration.waiting || registration.installing;
        if (!worker) return false;

        const scriptUrl = new URL(worker.scriptURL);
        return scriptUrl.origin === window.location.origin && scriptUrl.pathname === '/sw.js';
      });

      if (legacyRegistrations.length === 0) {
        sessionStorage.removeItem(CLEANUP_RELOAD_KEY);
        return;
      }

      await Promise.all(legacyRegistrations.map((registration) => registration.unregister()));

      if (navigator.serviceWorker.controller && !sessionStorage.getItem(CLEANUP_RELOAD_KEY)) {
        sessionStorage.setItem(CLEANUP_RELOAD_KEY, 'complete');
        window.location.reload();
      }
    };

    removeLegacyWorker().catch((error) => {
      console.warn('Unable to remove the legacy service worker:', error);
    });
  }, []);

  return null;
}
