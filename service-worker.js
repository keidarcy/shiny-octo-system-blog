/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/10/21/_0008-useful-git-examples/index.html",
    "revision": "233b29f5f6c329f7b2495079e43b2da2"
  },
  {
    "url": "2019/11/21/_0007-useful-laravel-tips/index.html",
    "revision": "4bdcf332c5e0448fbff6094d8c086853"
  },
  {
    "url": "2019/12/15/_0009-css-preprocessor-comperation/index.html",
    "revision": "d0e33640c625c4aef5f5b89306e76404"
  },
  {
    "url": "2019/12/25/_0000-how-laravel-facade-work/index.html",
    "revision": "5015a736eceff6f4a86696ba46dddbdf"
  },
  {
    "url": "2019/12/27/_0001-how-to-create-laravel-facade/index.html",
    "revision": "4bdb94bdf77c6fa7903d72d1ae541cde"
  },
  {
    "url": "2019/12/31/_0002-how-collection-help-us/index.html",
    "revision": "5b47513fbc81ad8429a1a34060a4de51"
  },
  {
    "url": "2020/01/01/_0003-how-to-macroable-everything/index.html",
    "revision": "fcce890235d41690249b63b6417efb1e"
  },
  {
    "url": "2020/01/12/_0010-import-vue-from-vue/index.html",
    "revision": "6dd5c692d9b01e3ec017b515f0321a04"
  },
  {
    "url": "2020/02/17/_0005-laravel7-upgrade-guide/index.html",
    "revision": "71b92a7652c699e840dc111ccf85cb94"
  },
  {
    "url": "2020/02/20/_0004-japanese-random-word-generater/index.html",
    "revision": "d7cf24e839612d01cd0ad8559cc1c32b"
  },
  {
    "url": "2020/02/22/_0006-laravel7-release/index.html",
    "revision": "3082f3b5ee5167f47c7c7a5445c656b4"
  },
  {
    "url": "2020/03/22/_0011-storing-using-secrets-github-action/index.html",
    "revision": "e00bc17a373ab3079225b571e5ae5e29"
  },
  {
    "url": "2020/03/23/_0012-how-to-build-this-blog/index.html",
    "revision": "0d3dc9204c94e84199331a660e411630"
  },
  {
    "url": "assets/css/0.styles.47e0e394.css",
    "revision": "063a840ea084e42bc3d2481ecf2c18a7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.ad4a83da.js",
    "revision": "026f5fcb7620b7c69955cc713ace1db5"
  },
  {
    "url": "assets/js/10.08094fdb.js",
    "revision": "9e177ff7123ffcf0647d2a7dec3860f1"
  },
  {
    "url": "assets/js/11.3d24dc24.js",
    "revision": "32e60a41b0e62aabe572ada0f305a465"
  },
  {
    "url": "assets/js/12.e952df4f.js",
    "revision": "bb48a6af297da9dd3c0505fae60b0232"
  },
  {
    "url": "assets/js/13.fc21c270.js",
    "revision": "fe7ca14b7f4e4dbfdbd1a46fc994dac2"
  },
  {
    "url": "assets/js/14.60c515da.js",
    "revision": "9b395edb2ea4aa742174e6906286f161"
  },
  {
    "url": "assets/js/15.ce8f6f2b.js",
    "revision": "c2c5138bdc720437b00980b7cff307dd"
  },
  {
    "url": "assets/js/16.9326bd4b.js",
    "revision": "af7ab940f6e31bf0a36bf21e4f554806"
  },
  {
    "url": "assets/js/17.4f97d901.js",
    "revision": "78136f3972fb65b684ff6bf0ff54ca60"
  },
  {
    "url": "assets/js/18.40d60d32.js",
    "revision": "12ef2987a2551771aa3c8e8411ea9b2c"
  },
  {
    "url": "assets/js/19.8869c79a.js",
    "revision": "e937acb14df83f4aa5e5f635bc9c73fb"
  },
  {
    "url": "assets/js/20.c7430594.js",
    "revision": "ace68b6a539d39d55a26cda81c9b78dd"
  },
  {
    "url": "assets/js/21.1acb9e18.js",
    "revision": "22e2e43c3487a717e2e5b94288a01d40"
  },
  {
    "url": "assets/js/22.3e5e2c74.js",
    "revision": "7547e594e20ddc39cec87b2361377c80"
  },
  {
    "url": "assets/js/23.38ef6744.js",
    "revision": "6a2b95699253ae4948373ebbb085bc9a"
  },
  {
    "url": "assets/js/24.9605b910.js",
    "revision": "a1ddcc5d9014fee6f7b812155fce1965"
  },
  {
    "url": "assets/js/25.4ad126a0.js",
    "revision": "e3d90abc43c57e1c80ba416ed6ddbd0a"
  },
  {
    "url": "assets/js/26.65c081f1.js",
    "revision": "38bb67e545348ca830e92b7f4b5dd727"
  },
  {
    "url": "assets/js/27.25babff3.js",
    "revision": "4387d6316d1ed447d0f30f67ee1cac58"
  },
  {
    "url": "assets/js/28.b7bc3fab.js",
    "revision": "a004654652018e7d4483ebe9f8aea4a8"
  },
  {
    "url": "assets/js/29.c378b6a0.js",
    "revision": "f7aaaa6543b0e39b8885dd56e73a2d4d"
  },
  {
    "url": "assets/js/30.87160f50.js",
    "revision": "3ccb6fba06a5c89ce02e688ef5984b44"
  },
  {
    "url": "assets/js/31.c5eec646.js",
    "revision": "2bb07e1a2b2695ec9a118a941edc7ad0"
  },
  {
    "url": "assets/js/32.2ac63421.js",
    "revision": "f6cf18226e021e1f10d1d73ab460a5c1"
  },
  {
    "url": "assets/js/33.bedbe80b.js",
    "revision": "27772b3710c53c22bc17b29a97c5482e"
  },
  {
    "url": "assets/js/4.41abaecf.js",
    "revision": "840019c27cfc110e1632888d03121862"
  },
  {
    "url": "assets/js/5.c97b8324.js",
    "revision": "8be5e8abeb4b4254667be6380aa349cb"
  },
  {
    "url": "assets/js/6.39384bef.js",
    "revision": "c8dfa7aec981ebaddec5c1bd5fd8bf9a"
  },
  {
    "url": "assets/js/7.d44c2c70.js",
    "revision": "2d2d5510bda575209653d6f0153b7e12"
  },
  {
    "url": "assets/js/8.6ca75103.js",
    "revision": "a8e35ad7fe6609565a78b965817a4327"
  },
  {
    "url": "assets/js/9.409d8241.js",
    "revision": "afa709956fb858ba4c427fb7a10e135e"
  },
  {
    "url": "assets/js/app.829f2d0d.js",
    "revision": "9dd8b5d3fcaba5e454304101c808bcb7"
  },
  {
    "url": "assets/js/vendors~flowchart.b63f8396.js",
    "revision": "d784417a17aa79e3651805a13edd8ffc"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "36b353e5a8f3091d48e918e097f75231"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "e13daebf9fae3b8294ce399e8a30f3c4"
  },
  {
    "url": "categories/geek/index.html",
    "revision": "460b3d1fa10f658fe6a53b1b2bb00a07"
  },
  {
    "url": "categories/geek/page/2/index.html",
    "revision": "2a7737089217ebc5e8d4999181a0038b"
  },
  {
    "url": "categories/index.html",
    "revision": "efc16ffe64233ecf7119dd838dad29da"
  },
  {
    "url": "categories/infra/index.html",
    "revision": "2417860e98c2b1f90c6a1b1fa3940783"
  },
  {
    "url": "categories/life/index.html",
    "revision": "9b37435ca318fc9fdd28cc31ceda999a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a559ca636c6ef0e3074f1574bb04b28b"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "90214946627422ab87f187fc561b0a9a"
  },
  {
    "url": "closer/index.html",
    "revision": "0870266719e7612d363ff458b8207ca4"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "b4119a3ce36a039e5eebe736a55bb71f"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "ea776c0736f54698012831f677745129"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "f5205d4b55d54660ddbcb401d3f5188d"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "16fb04dca55ffcc7d52978d2c23dffc1"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "cc4a8d69f481f3c02ff83c416e12742a"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "51237703305a789b8ba568b434a2c3b8"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "549b3864fd6a1453672643f25185335b"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "7a85d7e326e1b36e8246b962eeef17a3"
  },
  {
    "url": "images/banner.jpg",
    "revision": "9da742eb057455b80fb3cbb072d9619e"
  },
  {
    "url": "images/line_bg.svg",
    "revision": "f0b22a752621b0c60251000367b29e9b"
  },
  {
    "url": "images/logo-without-background.png",
    "revision": "87ffa0fc5fb4dd065a2ece97e7535d00"
  },
  {
    "url": "images/self-round.png",
    "revision": "ee06fe44958c143f1dd8c5d5574ffdf5"
  },
  {
    "url": "images/self-squar.png",
    "revision": "ac73050af3f8ae63b30c35f3959a1031"
  },
  {
    "url": "images/star-bg.svg",
    "revision": "ba93415481614e5b8f96dfc947f6c1ba"
  },
  {
    "url": "images/wechat.png",
    "revision": "e89459702d8f88013109bb33f1b93de2"
  },
  {
    "url": "index.html",
    "revision": "7f6e48031fe09e6bba0ced8c09972169"
  },
  {
    "url": "jp/index.html",
    "revision": "c9459ea62ec0c40689505d207bfe64d7"
  },
  {
    "url": "mac/index.html",
    "revision": "54b18b8bea43958b625e32ca10946d54"
  },
  {
    "url": "me/index.html",
    "revision": "520d0662b28090b87b1186fc4fcb8cf3"
  },
  {
    "url": "pronunciation/index.html",
    "revision": "a4467514d8a393da318a7ca504f76581"
  },
  {
    "url": "tag/index.html",
    "revision": "ce21e7fa7546e231bc2e8f7ce6630328"
  },
  {
    "url": "tags/Chinese/index.html",
    "revision": "4a2475e27c4d8380540a8baf27151804"
  },
  {
    "url": "tags/css/index.html",
    "revision": "797a25cb5670cce7b9f20a8d0c7a18a8"
  },
  {
    "url": "tags/English/index.html",
    "revision": "fa81354e14b2b70f0acc56bf62de70a6"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "bdda276d365a01ae305317fbd8cbfedc"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "e8ba521471f6c6af8d83fc09344db495"
  },
  {
    "url": "tags/Japanese/index.html",
    "revision": "d9f55b6f5faeb9f1e880663b460e3c6c"
  },
  {
    "url": "tags/Laravel/index.html",
    "revision": "bd2fc291621c7f94fb255a0b5ec5f1da"
  },
  {
    "url": "tags/MacOs/index.html",
    "revision": "f28a7ab8e8e097d9bff0b096505b923a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "674c83f3f876556ad77c610993ec2e83"
  },
  {
    "url": "tags/PHP/index.html",
    "revision": "73a729f13f59b09bdf235dcbb8b59d29"
  },
  {
    "url": "tags/Vue.jsg/index.html",
    "revision": "69a55392cc32b6d5a3d972e383dccc6e"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "4f471b86c66e5b707fc677d0e2571539"
  },
  {
    "url": "tags/whoami/index.html",
    "revision": "41f078a7d882e5e43b8d0c0f1f0e42da"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd0c1f302e8795ca3f6c425cc826020c"
  },
  {
    "url": "zh/index.html",
    "revision": "be3c626a857edc447d10d5762a739ab0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
