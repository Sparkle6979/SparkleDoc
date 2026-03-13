'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "42bd7861ddb8cbaff409a32b4364ef8b",
"version.json": "bcc708ae1230d3dab6f523197e57ab28",
"index.html": "353797be5715aaa64ccb9da56c727f5d",
"/": "353797be5715aaa64ccb9da56c727f5d",
"main.dart.js": "aff1a4210aa3c32fa0bf09181ad5769b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "ddd0687c3cb8966bdd047e937fd65a70",
"icons/Icon-192.png": "e1b6198fa5282cd9d176818a9fc6951f",
"icons/Icon-maskable-192.png": "e1b6198fa5282cd9d176818a9fc6951f",
"icons/Icon-maskable-512.png": "aaedf6ec2b2465475a96b35f7dc2b028",
"icons/Icon-512.png": "aaedf6ec2b2465475a96b35f7dc2b028",
"manifest.json": "d3d71f5f015d41430f75e2c189810f7f",
"assets/NOTICES": "f9099f16e6ecfcdf1cb855707043ba7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8f2765ffef1c6cb378d0a49535ab2e83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "bceaba4f4911cba23eb39e7af39e89b4",
"assets/fonts/MaterialIcons-Regular.otf": "db21ababfec971bcfbf29ba16188aa0e",
"assets/assets/images/sartre_2.png": "c6a28b18f51af3ccf2dad500b8c61a05",
"assets/assets/images/heidegger_2.png": "2c2f3deb0eb9b4bf634712e4293350f0",
"assets/assets/images/heidegger_0.png": "f464337b3caa309c3d3c40d8db202d86",
"assets/assets/images/sartre_0.png": "c6a28b18f51af3ccf2dad500b8c61a05",
"assets/assets/images/luxun_0.png": "65ec4c3f0d82e3177a2af7c07b38bd78",
"assets/assets/images/sartre_1.png": "a8ca2fedd5f09a3b65d9c5823b13d940",
"assets/assets/images/heidegger_1.png": "bc5cd9d62d9057aa373108cdf4f4371f",
"assets/assets/images/proust_0.png": "faadbfec30fb438286848031e92714e1",
"assets/assets/images/marx_0.png": "d93f61134e25d54afffafdb9e9588ac9",
"assets/assets/images/hume_0.png": "b7cbae400e4245820b9c827f0ada49f1",
"assets/assets/images/rousseau_1.png": "7e87701fc30e9807fa39cb8f576eec98",
"assets/assets/images/rousseau_0.png": "5ee470fd6874e70f5ee93da40c1df285",
"assets/assets/images/bacon_0.png": "11f4eeb0f76f326a5f004cdfb60add31",
"assets/assets/images/hegel_0.png": "68fed81250588dd849f0a3d4fd863de8",
"assets/assets/images/kierkegaard_0.png": "5154dbf3ff28dde1eceb572d2ac9e9cd",
"assets/assets/images/kierkegaard_1.png": "5477f1a7590a38a5c85057a0ec52552a",
"assets/assets/images/hegel_1.png": "b663edb35dc6f40c2c4b6533800f740e",
"assets/assets/images/schopenhauer_0.png": "02f8ffde951b4b86b47d6aed46760708",
"assets/assets/images/camus_0.png": "2c8bc27d6c209bf5d7e485957ced469f",
"assets/assets/images/descartes_0.png": "3f7bd2a1cad07bb931adfcd81bb846f0",
"assets/assets/images/spinoza_0.png": "1dc5d9d2a68f5420b3c2c015c52367f7",
"assets/assets/images/camus_1.png": "f94231e280059ad3dffb109ca03a23f7",
"assets/assets/images/weber_0.png": "33e0b308c137f25b15365b3724c0ca57",
"assets/assets/images/camus_2.png": "94e1fa43e28534f4ea34e153f41601bb",
"assets/assets/images/husserl_0.png": "f9320090ededbf799b9ee78c0254f49b",
"assets/assets/images/nietzsche_2.png": "55ec881ba5c5d11d8bc2abc42a53094f",
"assets/assets/images/philosopher_default.png": "09c689e337cd4cda47a5d736582e2194",
"assets/assets/images/nietzsche_0.png": "85b61eabf62886eca229eb48aefb6a32",
"assets/assets/images/socrates_0.png": "06be3c60b3bd738b080e573573a69cc8",
"assets/assets/images/heraclitus_0.png": "0a6ba95dc51ec86f6c8575b17ca31f7f",
"assets/assets/images/heraclitus_1.png": "1de583f383e2d3870ecbf9472e069312",
"assets/assets/images/socrates_1.png": "bc376610bc18d64ffc5d93798fec668a",
"assets/assets/images/nietzsche_1.png": "2da6bf3ac8c39a81e0b4eaafe250ef43",
"assets/assets/images/pascal_0.png": "aaffdcd50ea530af33877dc09336230f",
"assets/assets/images/confucius_0.png": "548f7284b40466c0ef6dc4a6d757a85a",
"assets/assets/images/wittgenstein_0.png": "5e0b384c170855980fc0d14c9a8deeac",
"assets/assets/images/wittgenstein_1.png": "b63dabef2bf6dd71728df11086f76966",
"assets/assets/images/einstein_0.png": "57c7a84ea318aa4f9aa07a2a586f190b",
"assets/assets/images/confucius_1.png": "418cd122ea8725078ff4f1f48a73bdfa",
"assets/assets/images/russell_0.png": "183a0deb68dc90e366f8e008cb53fa91",
"assets/assets/images/plato_0.png": "023cb5f2ad67bab7d1b52f170682cfe1",
"assets/assets/images/kant_1.png": "0eecbc66fd3c4de353b8f3c2bc47e205",
"assets/assets/images/kant_0.png": "acd3051c3ce8fb601a9a3b0fb871b524",
"assets/assets/images/confucius_2.png": "b68ac31fd0365b2132a259d2f1a13877",
"assets/assets/images/plato_1.png": "66c4f52fffed75aad9e87d79dd339212",
"assets/assets/images/foucault_0.png": "b9e1fb2e35fc01b438a562dc5be4153e",
"assets/assets/images/dostoevsky_1.png": "e9d8b0b3ae502ecb61d5ec437b452f49",
"assets/assets/images/protagoras_0.png": "e7d96009881fd02ccb01ecfdcde4c880",
"assets/assets/images/aristotle_0.png": "53674fd529fd6d755716a3cfad7b1d08",
"assets/assets/images/dostoevsky_0.png": "13c264affb618ad7f935d839a9eb2038",
"assets/assets/images/thrasymachus_0.png": "20de29dc882d806abe98279a5148543c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
