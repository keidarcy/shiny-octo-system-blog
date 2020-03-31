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
    "revision": "45fe452d850037099746e2d655d656aa"
  },
  {
    "url": "2019/11/21/_0007-useful-laravel-tips/index.html",
    "revision": "6494b288b1768730ad7e78c78754ec4a"
  },
  {
    "url": "2019/12/15/_0009-css-preprocessor-comperation/index.html",
    "revision": "eac13eda701c65554eacb135297492b7"
  },
  {
    "url": "2019/12/25/_0000-how-laravel-facade-work/index.html",
    "revision": "1f07c82c7ae1bdd32573229a7715fcc4"
  },
  {
    "url": "2019/12/27/_0001-how-to-create-laravel-facade/index.html",
    "revision": "0b8ceb5b3ca2306e7407518d4d330b16"
  },
  {
    "url": "2019/12/31/_0002-how-collection-help-us/index.html",
    "revision": "817f2aec0fd40a4f9313233b4e36bdf8"
  },
  {
    "url": "2020/01/01/_0003-how-to-macroable-everything/index.html",
    "revision": "0f80c3401c9bd4c690ed126743009d72"
  },
  {
    "url": "2020/01/12/_0010-import-vue-from-vue/index.html",
    "revision": "09cb4ff1843d13caf0f02d37a3fa7c3b"
  },
  {
    "url": "2020/02/17/_0005-laravel7-upgrade-guide/index.html",
    "revision": "51a7ff42567d91df05197fdfc8f8780c"
  },
  {
    "url": "2020/02/20/_0004-japanese-random-word-generater/index.html",
    "revision": "6f234ea5879f6e4ca330ddeb43e10b47"
  },
  {
    "url": "2020/02/22/_0006-laravel7-release/index.html",
    "revision": "1e2d0b602b27a55b2d35fde613c30817"
  },
  {
    "url": "2020/03/22/_0011-storing-using-secrets-github-action/index.html",
    "revision": "2946037f451e3d5865d230831f8fc968"
  },
  {
    "url": "2020/03/23/_0012-how-to-build-this-blog/index.html",
    "revision": "da21a7ee6a820c3d680ce34308ef9fe0"
  },
  {
    "url": "assets/css/0.styles.872a4d9c.css",
    "revision": "c3adcc05e46c862c312d48181aaaa335"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.46957f9a.js",
    "revision": "148eff7802c4622ec9da65ca06c1bb67"
  },
  {
    "url": "assets/js/10.53a0330b.js",
    "revision": "a2090102f1e464e28b75ecff88790d9f"
  },
  {
    "url": "assets/js/11.02764511.js",
    "revision": "321158ca48c9fdd7e40cf7b708bddcfd"
  },
  {
    "url": "assets/js/12.c5e365a5.js",
    "revision": "5cf0ec000302ef396583b360e2073d14"
  },
  {
    "url": "assets/js/13.a27aa780.js",
    "revision": "8f35b10287af295b2ceb169fd23f82e0"
  },
  {
    "url": "assets/js/14.51d83405.js",
    "revision": "ee80f2e4d49f1880b5a18a119f8ce5e1"
  },
  {
    "url": "assets/js/15.d997473d.js",
    "revision": "a4adc9e0f091c9bc7d8c8ccc645a348d"
  },
  {
    "url": "assets/js/16.d322a4a7.js",
    "revision": "8d1a6bb7fcbf6bf57e6e4860779c6a0f"
  },
  {
    "url": "assets/js/17.790929c5.js",
    "revision": "42937d8c84cddf25acb48e5b6a2e2ca9"
  },
  {
    "url": "assets/js/18.a4200ae0.js",
    "revision": "4ad54d70b82292a6303788458f5ab73d"
  },
  {
    "url": "assets/js/19.6765e3d7.js",
    "revision": "0aa04f7a147ffcca232926f165b7f7eb"
  },
  {
    "url": "assets/js/20.6c3dde4f.js",
    "revision": "69a3a50d5a1155285937b7888a56be37"
  },
  {
    "url": "assets/js/21.12595fc6.js",
    "revision": "9c5eaa73e517cd99b971b77a2d5aebfb"
  },
  {
    "url": "assets/js/22.63ceca87.js",
    "revision": "1de3731ce8bd8177b6a62478deb34cfa"
  },
  {
    "url": "assets/js/23.d257c058.js",
    "revision": "f4b6f129c1b0fd70a0e7df974d624a1f"
  },
  {
    "url": "assets/js/24.6232587a.js",
    "revision": "7826ec0043e74285e9928b2903a1491a"
  },
  {
    "url": "assets/js/25.feb6a8f3.js",
    "revision": "1aebf88642d62e89b3584d72d53c1256"
  },
  {
    "url": "assets/js/26.0d811660.js",
    "revision": "55085aa86ff6a57b40162c6eec2d4236"
  },
  {
    "url": "assets/js/27.a60fc451.js",
    "revision": "14204ac4f113bb306c029eb31e408908"
  },
  {
    "url": "assets/js/28.25fa58f0.js",
    "revision": "46733be9b2fff660952d936c16c2fe60"
  },
  {
    "url": "assets/js/29.2cb08683.js",
    "revision": "a0ed7a3c91d22f18684dadab4bc97a56"
  },
  {
    "url": "assets/js/30.57b0e438.js",
    "revision": "f55bb4d304327e662b6f4d49ab724c02"
  },
  {
    "url": "assets/js/31.b89b5a8c.js",
    "revision": "a31f6b6f821743a021655b97cfe3ae92"
  },
  {
    "url": "assets/js/32.994144f4.js",
    "revision": "b2b893a86d93f3f0c84c50f8b7b47296"
  },
  {
    "url": "assets/js/33.dd5ef4a7.js",
    "revision": "202d92452c9a1d04b8251608bc6a1567"
  },
  {
    "url": "assets/js/34.699189c4.js",
    "revision": "2a24bebc3abe804a2c833a317def9926"
  },
  {
    "url": "assets/js/4.01c76b93.js",
    "revision": "5089a5c353980d4cc6765b87f500d8aa"
  },
  {
    "url": "assets/js/5.e045fdce.js",
    "revision": "ab00e9f5a4da1ad5052d56b24896c506"
  },
  {
    "url": "assets/js/6.eb522aef.js",
    "revision": "8966dc176c882fe6ecf1122e84044bb7"
  },
  {
    "url": "assets/js/7.7289ad89.js",
    "revision": "5b04b0d2eaef38072e71eafd601db258"
  },
  {
    "url": "assets/js/8.09d3a8de.js",
    "revision": "56e210406222c258d4891d9f6c429c6d"
  },
  {
    "url": "assets/js/9.16378ea5.js",
    "revision": "76dc6074059a9f4d09b4547f414969ce"
  },
  {
    "url": "assets/js/app.32660479.js",
    "revision": "5491060a0cccd852fc7c294ab36cf5f0"
  },
  {
    "url": "assets/js/vendors~flowchart.57f62f21.js",
    "revision": "ea0b1744ce9d5bfcf2a3192366c8dda5"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "09c594bdec3fae44a844572d66fa4056"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "d442b4c44c9a1e66e52c6843c658b4b0"
  },
  {
    "url": "categories/geek/index.html",
    "revision": "f34d4d94150c06b4f038268ffe009457"
  },
  {
    "url": "categories/geek/page/2/index.html",
    "revision": "7c5df1b1ab334831720e7965f68ca0cb"
  },
  {
    "url": "categories/index.html",
    "revision": "3c3e9ed6c352697d698c8142beea2eb2"
  },
  {
    "url": "categories/infra/index.html",
    "revision": "aefb9fbb924f442e374fb33f2a90f1c5"
  },
  {
    "url": "categories/life/index.html",
    "revision": "0efa23291c912c5e6ef627f2727eb9f7"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5ea26b8c7c91feed2f4be6d8f01b2aee"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f014a018be721b2d571a257be233865a"
  },
  {
    "url": "closer/index.html",
    "revision": "7ae2a84067d7724157b9ca932dc44b03"
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
    "revision": "19a2425df76ea00a81331835b8b0148d"
  },
  {
    "url": "jp/index.html",
    "revision": "e80652d9364a048ea59675e5881b91a5"
  },
  {
    "url": "mac/index.html",
    "revision": "e9104090698129cdeb17ba79cf9f8346"
  },
  {
    "url": "me/index.html",
    "revision": "1e135f1bb4508c0524a8b541c0d3eed1"
  },
  {
    "url": "pronunciation/index.html",
    "revision": "2b4047e3b0d150101172fc3bbd53c11d"
  },
  {
    "url": "tag/index.html",
    "revision": "a7d498312bff17b9e28ee7479cc6828b"
  },
  {
    "url": "tags/Chinese/index.html",
    "revision": "8914746899310ab621c4c7c0f62c6dae"
  },
  {
    "url": "tags/css/index.html",
    "revision": "b7b754b516b4aa99ec221868db7680aa"
  },
  {
    "url": "tags/English/index.html",
    "revision": "49dfa2139fed0f4cd1ac750f5ab185a9"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "38de94f1859d29e608511d21b97d1029"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "4b0f6055db38ee71893752ad4304d7e1"
  },
  {
    "url": "tags/Japanese/index.html",
    "revision": "5735d0ffc4a325136b9a6645f0e2affb"
  },
  {
    "url": "tags/Laravel/index.html",
    "revision": "171f4010f5eb099a21aed11d4f827431"
  },
  {
    "url": "tags/MacOs/index.html",
    "revision": "a95f726c81e8e9e4cb7da46821aeb98a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "7df6a130b109051ff645a90d0e8b220c"
  },
  {
    "url": "tags/PHP/index.html",
    "revision": "0553f3edcff74afd7dd2b461c8c73876"
  },
  {
    "url": "tags/Vue.jsg/index.html",
    "revision": "10dd0bda5b7a377ab9915e3dbc163bdc"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "a36e88ce4a2fbcd74d2303b1a3532187"
  },
  {
    "url": "tags/whoami/index.html",
    "revision": "f173b02679c8ebfc4b6d537484ec5303"
  },
  {
    "url": "timeline/index.html",
    "revision": "a241a8ef65c93a139ffe40798554427a"
  },
  {
    "url": "zh/index.html",
    "revision": "a4f7b9ef1a04ebb5a0c636b32540161a"
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
