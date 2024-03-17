var CACHE_NAME = "game-design-concepts-pwa-cache-v1";

async function prepareFullUrlsToCache() {
  var urlsToCache = [
    "./",
    "./?source=pwa",
    "./public/main.css",
    "./public/main.js",
    "./public/docfx.min.css",
    "./public/docfx.min.js",
    "./logo.svg",
  ];
  const response = await fetch("./manifest.json");
  const manifest = await response.json();
  const map = {
    Resource: "resource",
    Conceptual: ".html",
    Toc: ".json",
  };
  const manifestUrls = manifest.files
    .map(function (file) {
      var path = file.output[map[file.type]]?.relative_path;
      return path ? `./${path}` : "";
    })
    .filter((file) => file !== "");
  return urlsToCache.concat(manifestUrls);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    prepareFullUrlsToCache().then(async (fullUrlsToCache) => {
      const cache = await caches.open(CACHE_NAME);
      const cachePromises = fullUrlsToCache.map(async (url) => {
        try {
          return await cache.add(url);
        } catch (err) {
          console.error(`Caching error ${url}: ${err}`);
        }
      });
      await Promise.all(cachePromises);
      self.skipWaiting();
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch processing for", event.request.url);
  const url = new URL(event.request.url);
  const networkFirst = ["/manifest.json", "/main.js"]; // "/api/" for example
  if (networkFirst.some((part) => url.pathname.includes(part))) {
    // Network First Strategy
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          console.log(
            "Network First Strategy: Cache update:",
            event.request.url
          );
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache First Strategy
    if (!url.protocol.startsWith("http")) {
      console.log("Resource caching canceled:", event.request.url);
      return;
    }

    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log(
            "Cache First Strategy: Found in cache:",
            event.request.url
          );
          return response;
        }

        console.log(
          "Cache First Strategy: Not found in cache, downloaded from the network:",
          event.request.url
        );
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          var responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
            console.log(
              "Cache First Strategy: Dynamically added to cache:",
              event.request.url
            );
          });

          return response;
        });
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      const existingUrls = await cache.keys();
      const existingUrlsSet = new Set(
        existingUrls.map((request) => request.url)
      );
      const fullUrlsToCache = await prepareFullUrlsToCache();
      const missingUrls = fullUrlsToCache.filter(
        (url) => !existingUrlsSet.has(new URL(url, location.href).href)
      );

      // Adding missing URLs to the cache
      if (missingUrls.length > 0) {
        console.log("Missing files that were added to the cache:", missingUrls);
        await cache.addAll(missingUrls);
      }

      // Removing old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Removing old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );

      // Checking and installing service worker updates
      await self.registration.update().then(() => {
        console.log(
          "Checking whether updates can be installed upon activation."
        );
      });

      // Asserting control over all clients
      await clients.claim();

      // Send an update message to all clients
      const clientsList = await clients.matchAll({ includeUncontrolled: true });
      clientsList.forEach((client) => {
        client.postMessage({ type: "UPDATE_AVAILABLE" });
      });
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "CHECK_UPDATES") {
    self.registration.update();
  }
});
