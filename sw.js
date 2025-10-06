self.addEventListener('install', event => {
  console.log('Snake game installed');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
