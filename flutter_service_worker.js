'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ffc2766ec7522bc8257223a879f89ddd",
".git/config": "93084b50c7a4bf84c65da1e9f3f3f05c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "358cf013b79d45691e4830e092e4ea6a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8783b725130982b37b7dc0a91b2d5a37",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e964897f0e713f326647c87c5a9c7886",
".git/logs/refs/heads/main": "0f1d5b6e5fc0517f9192fbd113b6a5bd",
".git/logs/refs/remotes/origin/main": "792922081aefde552ff19b106b5d3588",
".git/objects/02/be9cf8f86f1ea9a257cc5b91a0386d6b3674a6": "4c009cd0706785cb8221bc107ca89292",
".git/objects/02/eee93985c7889acc704621f5c674fa603e03a7": "702c92d51d92fa3f7a7be7b7b50f18da",
".git/objects/02/f3de5dbfc558f8404b8b4ed664472acc993ca3": "7e435aa77e40cddab19ec10fc883246e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/bccff774fa8a6b0bf0593f6fe79479a79cb806": "d6c99ea267da2986aaadbd6aa062562e",
".git/objects/10/b5ca88e58b24069c16cfbdc20ec0f6a05d53aa": "a0d2f6de728b90446f299d9c6795a84a",
".git/objects/12/a9f9d9c1fb7530a72783834c1f42bc796cc828": "2905040dc4281058a58e4c22a9379831",
".git/objects/1a/d5b6692a370499b4163773e7279a3f60532868": "96a9434610a3bb80aafbbbad050a5d20",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/611e7ce675812091edfb7582e71858bae181a5": "4ee2cd377665209fa90a14fefa9df01d",
".git/objects/21/4974a7af0c96e1be0b04e5ca76c5b6908e5e9e": "4b4f1ff4d4139e3c5a2ca8a1827ed58e",
".git/objects/21/eb7721574cf4122f085848304b5e0391aa72d5": "57d0b88039a3e9cd9e880bb13bb51b3a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/afe051a14164c533a2d4246404bb2e321fb38a": "fc4d21f3de0a4ec4c2df4397edc8ca0b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/2537735cf38969d0fe87d4b3df2649d47a1235": "7901f3c3a6706a2834641096c5b98f37",
".git/objects/34/564e669f6cb6ae0190c50e536ecfd0da3c178f": "cf89ec43026e13124a444f90eaec11f4",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/4811bc173de6f74c1daf1a58cc4186d82f726a": "f960029afd78b9c46876448eecfa3686",
".git/objects/3f/8214c932a5f50abb8046aab63921f1de5627f8": "86f6adb1f3413785e89233a79f9484a9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/60fa2fd8a090e5337c7d3221cbc1beecd78166": "de6a978c1d44716408aa32cb10231f7e",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/43/e7d6f2a6d26503f0b923e6f49b5423e70942f5": "1685d9e3ec9fe66122f0e926be499ec8",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4d/4a6bbebfc8aef5f10ede4446b9899c2cc34d01": "4c02d02ad0ec8106f9ced57d79ff8de5",
".git/objects/4f/a0258a5d65fca083be0734ce68e84949c58499": "cf1ca9b191ba2bac1eb476b8caaf01a2",
".git/objects/62/2447f8bcf390c80900d41fcb88a89be6b7e1e3": "3e85f15cede0cbd07a41c133ad10970e",
".git/objects/63/b22d5849e714530c3d41c0af50756940484630": "c749b948b8fd1642f45c484f898d7d65",
".git/objects/69/02ed82b125e74e50000deccc48f7655b8af341": "78118274543b7cce33daf8e5a9e66918",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/01e3e02f7a1e25a338c73f46c1ad79733465f8": "224c7150c4ef33cd4e6631f661fcf800",
".git/objects/77/59d522d0a45a4d710b56a10598785a4325e2dc": "9a49afd297304e4d6c1713a5db1ddd8d",
".git/objects/79/f081c092ed370ad18db37ce0946c988f6d7f54": "ed4913e72bf8115937d452837adcde04",
".git/objects/80/80712ce255f839b5a8c490d2cfc8a57617fb16": "1f472d783918e4f7c95404aea99914d1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/7aa920b68da8a325ef8817f417c737a45d1780": "5626f0786f9e09fe29d0bc4984c2bb05",
".git/objects/84/a9b46237403de60545754b24575b00a891f179": "e18cb33d0e0b198c51447471385c3522",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/d5cd6ef597d750db62b1abbaa5a14ad83531a1": "fc8d11fc2c2918161e7ac99beb7c7f5f",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/89/55ad7c99fc2b9753e39af6dea993d506164c7a": "514026434a4b00619b53b1014539a737",
".git/objects/8c/45bdd294073ee9d1d652ca99da289123964bc3": "0a4296a72cdcbd049b9ff1d0a21d4ff1",
".git/objects/8e/c158c00a0d7506b23c29edf78612bf74167a02": "53b38a3a819d923abf717f928b6c0778",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/b95e34cb6bf812e5f19760579e12fa1c185c9e": "9bd5aff75308f754d029c79ab60361ea",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/53316886556b45cd4885c22349a3c7c6b6ef03": "461e39307696f9ed7d99447b68166b98",
".git/objects/9b/3297a6af9187354d0fd7c42ac001ac70efb779": "e671af66e055f8a1683da4ee35f454b4",
".git/objects/9c/5486c6be39c5e5059684541ba25cd3d5de42c5": "3206d60a40258d911be5f069dd8eaee9",
".git/objects/9f/36d759f8d07fc8f8e422174a36265c03a8ee2d": "67594a4bd6d809967a67d1a3b9a37d55",
".git/objects/9f/7ea4224e7d9649024a1048907b78388b5cbe56": "0ded50fd915814816a138e42748a4cd9",
".git/objects/a1/374ee47f097dff784313433ea9883be62840ff": "3ff1bb99d7b55bb3b4027c986db5c1af",
".git/objects/a1/5f08375a469379fe4923c97d3967b85b90c799": "13d3077a2b1ca39b9e42e47dd6dc1beb",
".git/objects/ab/4b5c8da7d8231309a8333494f30f86ebab22f4": "6ac2f41dc4a2d0d11627ec2181a5aea1",
".git/objects/ae/bd2d94ab880be7ec824c1f47061bf6e57b5f6e": "023efc0fc4ae609631667e744aa85353",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/59994b90ba084612b0bb66e424d98a241bf3a6": "9e21e21079053ebd6093c0f3b50e0d14",
".git/objects/c5/402056f9d0d83c5f17fbacfb73eb10be5afd29": "04100bb30bc8ea65abb065a39e6b6376",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/ce/842ee1d8f7ef0ca8aacdcd70a6d04b13fbcccf": "d396879fc22bcc11a59ea8aa799e7888",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/d7d1f83955b49fa166a0e56ede8dcf5bfa5cb8": "8206c3eccfba2431147a9c553287accd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d9/5d20739047a0f4a2d9744efd33d74e51cf4bc7": "7d61469f154fe8d4608e7e6fccc1e0fb",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/242080fb08aea2fdf03954b0caccfbef1cfe48": "ac758e3c4a6589ce5df851dc1b850235",
".git/objects/db/e14db69002d66081b7f18750f7367a96f4b637": "cb53e2ef5debf56494a8e908454f7ef7",
".git/objects/dc/a80ca40af1811ca7ae9b12d5d8904a1669ac4e": "ff8037b56414e0728a0788726a513561",
".git/objects/dd/17a6231ff450fc59c21b1b496528e413b1b75a": "64dd840d87309b0d291baa3bd2fe4d17",
".git/objects/e0/50fa8a394447757bcc092a9d5fee8cbd952e28": "431d87cbbfe758aebd606940d2a30bb8",
".git/objects/e3/8a08f536c73bdde4b322dc188c9255ce2f5826": "5b15aa5d23ac15d4a50c3429a79816f9",
".git/objects/e3/ebc03aad5aa1a1be9cc70c69482aa0c3746768": "0953f4d9f4207d3db4118069b933d984",
".git/objects/e8/41ae9d8808c4a94d6464887faa538a10d1f370": "e153995aed65d9af1f0533522020ef4b",
".git/objects/e9/2fb17598f35a495e0fe08ea303f231ef9374e5": "1c6a62f0f98fee412af2e0320cc85111",
".git/objects/ed/063a5c5207caa6d427cc20d0878252303bb84e": "c5c604845bdc630af06d3e9268512c9a",
".git/objects/ed/9f399c985d703457e2f3632274e80daa581a3c": "5543022d51836ec86bc04affe1a2c309",
".git/objects/f0/c5e18fb6b30ff01ee173a3f90d5037caed04c6": "bfed64fcf13f11f72a385255a8215b4a",
".git/objects/f2/03ff12cebb4be0d0334d3db57a072a32a06791": "965af2776b482bcc697eb07149ad5fee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/f1949c7920146d042ec80e632737828644015b": "e73c93683fe58ad38cabb256ce8b772c",
".git/objects/pack/pack-a286497478dc289f49edeeb779911bcb31837aac.idx": "5bc650b6413fa765711f01875863cbb9",
".git/objects/pack/pack-a286497478dc289f49edeeb779911bcb31837aac.pack": "4f62a418f1a15cb9e474d1fa918f0e88",
".git/ORIG_HEAD": "e701d9febf5de2e873e3e5e32ad708fa",
".git/refs/heads/main": "692d0f7871deea7d0f18e0f16ef7ad84",
".git/refs/remotes/origin/main": "692d0f7871deea7d0f18e0f16ef7ad84",
"assets/AssetManifest.bin": "9746de577d9ce58999c896c2f89b8261",
"assets/AssetManifest.bin.json": "ec417345f8dd7d7592568a5b8d70df69",
"assets/AssetManifest.json": "7cd986ff06f4613014208010bec9f05e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4728f33e61ae7d16518ec96ce9b92b81",
"assets/images/1home.webp": "c2fe73100d38e38b08f2c876998a1940",
"assets/images/2about.webp": "684416a041ee38856d9f8382fa479ac6",
"assets/images/3showcase.webp": "34c77afb930afadb041a91c77110025b",
"assets/images/4art.webp": "1e76291dc0b34e5c0ed8192c86921434",
"assets/images/5litrature.webp": "777a0cc932f3014f4cc3869c05ccc56d",
"assets/images/6contact.webp": "12de702a40022e430bd4debd50b17b5f",
"assets/images/7misc.webp": "a450ad608a256ede72a667691fd28061",
"assets/images/home-bg.webp": "7ab71afc27a1c7afe990e94edc18246e",
"assets/images/man.png": "777a978fc77f5b57c9d0cbd1c2fc7ad9",
"assets/NOTICES": "c9b0ba717079e3ed15aa5d01dacce913",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "93f0cf11d7f76e4a703108419d444f76",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3e719c81e434ea8d0bb1fd0e97bfe71f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "c7e762dcaaa7e9bd0a5871f748786d88",
"favicon.png": "4e20632f836550987249a73b1b16feb6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e846cde31540f9941e52868b16a38d9d",
"icons/Icon-192.png": "a5384242bd06bc9eee8b1f6b7df19d84",
"icons/Icon-512.png": "6c8b4d75ff312ec751778f8c14092c84",
"icons/Icon-maskable-512.png": "6c8b4d75ff312ec751778f8c14092c84",
"icons/icon_maskable_192.png": "a5384242bd06bc9eee8b1f6b7df19d84",
"index.html": "1c4d7ede9f81966c22b23f9e983338ae",
"/": "1c4d7ede9f81966c22b23f9e983338ae",
"main.dart.js": "9f908912f9550c0c21fac3a761726223",
"manifest.json": "1eb6127d09a680b6332504b9acc63ffb",
"README.md": "664bbc354355240b008a9d395772caca",
"version.json": "fb8d4678888024cd5f83d8522bb3a722",
"web/assets/images/1home.webp": "c2fe73100d38e38b08f2c876998a1940"};
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
