var CACHE_NAME = "game-design-concepts-pwa-cache-v1";
var urlsToCache = [
  "./",
  "./public/main.css",
  "./public/main.js",
  "./public/docfx.min.css",
  "./public/docfx.min.js",
  "./logo.svg",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    fetch("./manifest.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (manifest) {
        var map = {
          Resource: "resource",
          Conceptual: ".html",
          Toc: ".json",
        };
        var manifestUrls = manifest.files
          .map(function (file) {
            var path = file.output[map[file.type]]?.relative_path;
            return path ? `/${path}` : "";
          })
          .filter((p) => p !== "");
        urlsToCache = urlsToCache.concat(manifestUrls);
        return caches.open(CACHE_NAME).then((cache) => {
          const cachePromises = urlsToCache.map((url) => {
            return cache.add(url).catch((err) => {
              console.error(`Caching error ${url}: ${err}`);
            });
          });
          return Promise.all(cachePromises);
        });
      })
      .then(function () {
        self.skipWaiting();
      })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch processing for", event.request.url);

  const url = new URL(event.request.url);
  if (!url.protocol.startsWith("http")) {
    console.log("Resource caching canceled:", event.request.url);
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found in cache:", event.request.url);
        return response;
      }

      console.log(
        "Not found in cache, downloaded from the network:",
        event.request.url
      );
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
          console.log("Dynamically added to cache:", event.request.url);
        });

        return response;
      });
    })
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  event.waitUntil(clients.claim());
});
