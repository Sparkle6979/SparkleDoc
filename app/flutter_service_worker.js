'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9382b550b3b1a6ff578cbe5e9b81d656",
"version.json": "bcc708ae1230d3dab6f523197e57ab28",
"index.html": "150d90fdc2e9437d425f4a1850727bf8",
"/": "150d90fdc2e9437d425f4a1850727bf8",
"main.dart.js": "901f4d27e26582de5f9e317b5e43349b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "ddd0687c3cb8966bdd047e937fd65a70",
"icons/Icon-192.png": "e1b6198fa5282cd9d176818a9fc6951f",
"icons/Icon-maskable-192.png": "e1b6198fa5282cd9d176818a9fc6951f",
"icons/Icon-maskable-512.png": "aaedf6ec2b2465475a96b35f7dc2b028",
"icons/Icon-512.png": "aaedf6ec2b2465475a96b35f7dc2b028",
"manifest.json": "92051ac92e9fdd822cd1afa2b9ea786e",
"assets/NOTICES": "fe3515c2bc279751b79b2d01b8be525e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dde9a7f012eceacd9d54503513ac03f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "34dfb37ae3a40ab5c069fc8efbf887eb",
"assets/fonts/MaterialIcons-Regular.otf": "9b8d69ee772cab0f1f49d584b231c96a",
"assets/assets/images/camus_0.webp": "3f8d8acd7629242a583356b5db54c910",
"assets/assets/images/rousseau_1.webp": "856b6fe2c1659a61ffcaf67a2d4b7b5c",
"assets/assets/images/proust_0.webp": "c9e67297c89f0bb6839353feda547e23",
"assets/assets/images/plato_1.webp": "378ebca276d57eab7940d29a3b1491d9",
"assets/assets/images/freud_0.webp": "fc1e9728489b23a3f114734c804e68bc",
"assets/assets/images/hume_0.webp": "fff97dc8e2e631a8001637657f95816a",
"assets/assets/images/plato_0.webp": "489db6becf1ef39db1106b1a474359d8",
"assets/assets/images/bacon_0.webp": "dcab737112c4063e683917a40d22019f",
"assets/assets/images/rousseau_0.webp": "5f1faba2cb3a89283f95ec474a102dce",
"assets/assets/images/camus_1.webp": "c50a1c89062ab2e41322bb46fb1e8eec",
"assets/assets/images/russell_0.webp": "bc941ece36657bb7ca3a120599e30fcd",
"assets/assets/images/hegel_0.webp": "7154bcf611f667e135d444876907f824",
"assets/assets/images/socrates_1.webp": "7f66724037030ef87371ed0b79e7de35",
"assets/assets/images/sartre_0.webp": "230998c4ae7ed72c157aebc1a855ce1e",
"assets/assets/images/de_beauvoir_0.webp": "076f3c40b10572c1ed0b318899e01b3c",
"assets/assets/images/nietzsche_1.webp": "ce1baf16699ff08b51e1b064492cc049",
"assets/assets/images/kant_1.webp": "3a8f2cfafdf18cf6d067c29afaca9f83",
"assets/assets/images/heraclitus_0.webp": "a1964eaed7df6624079652480e2ac0b6",
"assets/assets/images/marx_0.webp": "56b06f8ece3f298b1c815ff68ed39a73",
"assets/assets/images/confucius_2.webp": "18a07fc1de857342990bcad4d9111da0",
"assets/assets/images/heidegger_2.webp": "354b7e6037bde00df12aa1e9e99fce16",
"assets/assets/images/kant_0.webp": "d7b178eefb6c1a8378866955d8a3fed0",
"assets/assets/images/heraclitus_1.webp": "7ecc7b2c003efb40d4cad9743ed3b081",
"assets/assets/images/nietzsche_0.webp": "6bd88954f9be468ec6b58a1e7f0996e4",
"assets/assets/images/weber_0.webp": "888001d69bc6089354d4d34cf09ad73e",
"assets/assets/images/sartre_1.webp": "ff1aef9e2fe957f5e10285b6513a9440",
"assets/assets/images/socrates_0.webp": "23e10dc83e7a1435526f4bcc3b111ea7",
"assets/assets/images/hegel_1.webp": "4e9185bb771e3c821c3c1ffe31c9c32b",
"assets/assets/images/sartre_2.webp": "230998c4ae7ed72c157aebc1a855ce1e",
"assets/assets/images/dostoevsky_0.webp": "bd7c2861538e277b11b1e1950f243db9",
"assets/assets/images/confucius_1.webp": "741699603b622d1d2d5a71b9a0ad0338",
"assets/assets/images/protagoras_0.webp": "796f88ece118caaf8addfc2320374748",
"assets/assets/images/spinoza_0.webp": "5e8b280bd1a749ccd191bd85a4fdff3c",
"assets/assets/images/schopenhauer_0.webp": "5c7e66400a4fba8d9a20b67983ab69e3",
"assets/assets/images/heidegger_1.webp": "2d9b1ac4572c0316921f36368e4ad60f",
"assets/assets/images/thrasymachus_0.webp": "a60cf116af8c7b9bf6f3602ae8884015",
"assets/assets/images/nietzsche_2.webp": "3c81d1501c3503bcdfffd61e0f9bb1f7",
"assets/assets/images/heidegger_0.webp": "4a47fb0e4994ce1f833eb294a652a83d",
"assets/assets/images/philosopher_default.webp": "5d747ad71b66d0bb3da3c1efc2f65e65",
"assets/assets/images/aristotle_0.webp": "943aa1fea8319fcd68c3ed5b3554c146",
"assets/assets/images/confucius_0.webp": "80b15516d3cdc8daf775bc22bae417d3",
"assets/assets/images/einstein_0.webp": "4401e5d0f23545236d14aa0afab73ba5",
"assets/assets/images/pascal_0.webp": "5686a43fdc6aa27b697a374f6b0e9e96",
"assets/assets/images/tolstoy_0.webp": "fc7ce1986698111c63c9fe66d7a379a3",
"assets/assets/images/dostoevsky_1.webp": "d8c234be3dc25d376bfd4cf93f4bf6ea",
"assets/assets/images/descartes_0.webp": "7e3f6bae903ec0af95f52d8f9fa258c5",
"assets/assets/images/husserl_0.webp": "0b4998e1f74cfe8f087ec832e08edde6",
"assets/assets/images/camus_2.webp": "b79682c5e68352eb498aa97df9aec386",
"assets/assets/images/luxun_0.webp": "5d6d7b29ecf2c1bfb976524a0f1ee1f4",
"assets/assets/images/kierkegaard_0.webp": "c651abee925ddb3e3d70033e322b343a",
"assets/assets/images/wittgenstein_0.webp": "0e81d22d796169e290a41999e090a518",
"assets/assets/images/wittgenstein_1.webp": "d1ca5124233a5a66f2485a10df803464",
"assets/assets/images/kierkegaard_1.webp": "5158acfb1f7f0159cc6d43a5043ba978",
"assets/assets/images/foucault_0.webp": "f18448f71514d684cb6f9397e6f43c02",
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
