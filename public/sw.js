// Lightyear Studios Progressive Web App Service Worker (Offline Page SEO & Fast Shell)
const CACHE_NAME = 'lightyear-studios-cache-v1.2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/logo.svg',
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/llms-full.txt'
];

// Install Event: Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching non-fatal asset issue:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Clearing old cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate with Offline Fallback
self.addEventListener('fetch', (event) => {
  // Ignore non-GET requests or external API mutations
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Exclude internal API endpoints or chrome-extensions
  if (url.pathname.startsWith('/api/') || url.protocol.startsWith('chrome-extension')) {
    return;
  }

  // Handle HTML navigation requests (Offline page support)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Cache fresh copy of navigational route
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Attempt to match cached route or fallback to cached /index.html
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse;

          const cachedHome = await caches.match('/index.html');
          if (cachedHome) return cachedHome;

          // Offline fallback response
          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Lightyear Studios | Offline Mode</title>
              <style>
                body { margin: 0; background: #020408; color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 24px; box-sizing: border-box; }
                .box { max-width: 540px; background: rgba(8, 14, 26, 0.9); border: 1px solid rgba(0, 240, 255, 0.2); padding: 40px; border-radius: 20px; box-shadow: 0 0 40px rgba(0, 240, 255, 0.08); }
                h1 { color: #00f0ff; font-size: 26px; margin-bottom: 12px; font-weight: 700; letter-spacing: -0.02em; }
                p { color: #94a3b8; font-size: 15px; line-height: 1.6; margin-bottom: 24px; }
                .btn { display: inline-block; background: #00f0ff; color: #020408; font-weight: 700; padding: 12px 28px; border-radius: 9999px; text-decoration: none; transition: transform 0.2s; cursor: pointer; border: none; font-size: 14px; }
                .btn:hover { transform: scale(1.04); }
                .contact { margin-top: 24px; font-size: 13px; color: #64748b; }
                .contact a { color: #00f0ff; text-decoration: none; }
              </style>
            </head>
            <body>
              <div class="box">
                <h1>Lightyear Studios &mdash; Offline</h1>
                <p>You appear to be offline or experiencing connectivity interruptions. The cached shell will refresh automatically once your connection restores.</p>
                <button class="btn" onclick="window.location.reload()">Retry Connection</button>
                <div class="contact">
                  Direct WhatsApp: <a href="https://wa.me/923160442304">+92 316 044 2304</a><br/>
                  Email: hamzamalik789890@gmail.com
                </div>
              </div>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // Handle static assets & media: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
