const SHELL_CACHE = "shellCache-2020-05-24T16:36:20.283Z";
const DATA_CACHE = "dataCache-2020-05-24T16:36:20.283Z";

const FILE_LIST = [
  "/",
  "/index.html",
  "/manifest.json",
  "/css/normalize.min.css",
  "/css/main.css",
  "/js/app.js",
  "/js/localforage.min.js",
  "/favicon.ico",
  "/tile.png",
  "/img/icon.png",
  "/img/icon-192.png",
  "/img/icon-512.png",
  "/img/favicon.ico",
  "/img/logo.png",
  "/img/tile.png",
];

// ran once when the service-worker is installed
self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(SHELL_CACHE).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      // get all the files from your list and cache them
      return cache.addAll(FILE_LIST);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
  e.waitUntil(
    // get the keys (SHELL_CACHE and DATA_CACHE)
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          // on site run, if you've updated your keys (changed SHELL_CACHE and DATA_CACHE)
          // this deletes the old cached items
          if (key !== SHELL_CACHE) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// ran when you're requesting something from outside
self.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    // if you've cached it before, return the cached file else return the response
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
