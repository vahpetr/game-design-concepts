var CACHE_NAME = "game-design-concepts-pwa-cache-v2";

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
      for (const url of fullUrlsToCache) {
        try {
          await cache.add(url);
          console.log(`Install: Caching success: ${url}`);
        } catch (err) {
          console.warn(`Install: Caching error ${url}: ${err}`);
        }
      }

      // Activates the service worker instantly
      self.skipWaiting();

      // Sending a successful installation message
      await self.clients
        .matchAll({ includeUncontrolled: true })
        .then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: "SW_INSTALLED" });
          });
        });
    })
  );
});

const ignoreCacheUrls = ["https://mc.yandex.ru", "https://mc.yandex.com"];

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (ignoreCacheUrls.some((ignoreUrl) => url.origin === ignoreUrl)) {
    return fetch(event.request);
  }

  console.log("Fetch processing for", event.request.url);
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
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(async () => {
          // Ошибка сети, пытаемся найти ответ в кэше
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === "navigate") {
            return caches.match("./offline.html");
          }
          if (event.request.destination === "image") {
            return caches.match("./fallback.png");
          }
          return new Response("", {
            status: 404,
            statusText: "Resource not available offline",
          });
        })
    );
  } else {
    // Cache First Strategy
    if (!url.protocol.startsWith("http")) {
      console.warn("Resource caching canceled:", event.request.url);
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
        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 404) {
              throw response;
            }
            if (
              !response ||
              response.status !== 200 ||
              response.type !== "basic"
            ) {
              return response;
            }

            var responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
              console.log(
                "Cache First Strategy: Dynamically added to cache:",
                event.request.url
              );
            });

            return response;
          })
          .catch((error) => {
            console.log(
              "Cache First Strategy: Fetching failed, returning offline page instead.",
              error
            );
            if (event.request.mode === "navigate") {
              return caches.match("./offline.html");
            }
            if (event.request.destination === "image") {
              return caches.match("./fallback.png");
            }
            return new Response("", {
              status: 404,
              statusText: "Resource not available offline",
            });
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
        console.warn(
          "Missing files that were added to the cache:",
          missingUrls
        );
        for (const url of missingUrls) {
          try {
            await cache.add(url);
            console.log(`Activate: Caching success: ${url}`);
          } catch (err) {
            console.warn(`Activate: Caching error ${url}: ${err}`);
          }
        }
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
      await self.clients.claim();

      // Send an update message to all clients
      await self.clients
        .matchAll({ includeUncontrolled: true })
        .then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: "UPDATE_AVAILABLE" });
          });
        });
    })
  );
});

self.addEventListener("message", (event) => {
  if (!event.data) return;
  if (event.data.action === "CHECK_UPDATES") {
    self.registration.update();
  }
});
