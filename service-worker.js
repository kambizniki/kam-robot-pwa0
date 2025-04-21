// service-worker.js

const CACHE_NAME = 'kam-robot-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/styles.css', // اگر استایل‌ها را جداگانه تعریف کردید
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// نصب Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// فعال‌سازی Service Worker و حذف کش‌های قدیمی
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// درخواست‌ها را از کش بخوانید
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // اگر جواب در کش موجود باشد، از آن استفاده کن
      if (cachedResponse) {
        return cachedResponse;
      }

      // در غیر این صورت درخواست را به سرور بفرست
      return fetch(event.request);
    })
  );
});
