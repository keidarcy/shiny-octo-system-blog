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
    "revision": "f7121a2dbd9581b3b27bd7c43b2e795d"
  },
  {
    "url": "2019/11/21/_0007-useful-laravel-tips/index.html",
    "revision": "254ce902b1c8579f926576c110438a67"
  },
  {
    "url": "2019/12/15/_0009-css-preprocessor-comperation/index.html",
    "revision": "3467590c1502f191f1b09d704a172177"
  },
  {
    "url": "2019/12/25/_0000-how-laravel-facade-work/index.html",
    "revision": "0ec083d5031e175e2ade5f8fe6dda7b3"
  },
  {
    "url": "2019/12/27/_0001-how-to-create-laravel-facade/index.html",
    "revision": "a930e4a2d08cf0323deb73607419bb52"
  },
  {
    "url": "2019/12/31/_0002-how-collection-help-us/index.html",
    "revision": "dcca948c8a3b933d0531d931f0ec9251"
  },
  {
    "url": "2020/01/01/_0003-how-to-macroable-everything/index.html",
    "revision": "4497f8043c3ec0b3f484d30dd0c2a117"
  },
  {
    "url": "2020/01/12/_0010-import-vue-from-vue/index.html",
    "revision": "e5d90d6fdc82ad69911cf90ccc61d300"
  },
  {
    "url": "2020/02/17/_0005-laravel7-upgrade-guide/index.html",
    "revision": "0c109930b759ab0e9b7859f892c2fca1"
  },
  {
    "url": "2020/02/20/_0004-japanese-random-word-generater/index.html",
    "revision": "a0a22ed97171469d404eb1d1b855ed9b"
  },
  {
    "url": "2020/02/22/_0006-laravel7-release/index.html",
    "revision": "3129baff41439c6118f62c3dfec94715"
  },
  {
    "url": "2020/03/22/_0011-storing-using-secrets-github-action/index.html",
    "revision": "30e1efb05e17ada0d2f89b8052a43342"
  },
  {
    "url": "2020/03/23/_0012-how-to-build-this-blog/index.html",
    "revision": "ea8b2ecd8b38d349c818c7b6a48138dd"
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
    "url": "assets/js/12.58137449.js",
    "revision": "1ac5614cf4e4fb742b2c6c5fe216bbd8"
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
    "url": "assets/js/16.44dd0c1d.js",
    "revision": "80895bf80a0fe4ec75a9296ca751ff42"
  },
  {
    "url": "assets/js/17.7a1f07a2.js",
    "revision": "0c56e84bf9627a0492107110c9496b67"
  },
  {
    "url": "assets/js/18.d332cfe1.js",
    "revision": "d7aa112d8858bcd1c87d51eda35e4c48"
  },
  {
    "url": "assets/js/19.6e422092.js",
    "revision": "4daab0bc2759a212f3b993072c274bb5"
  },
  {
    "url": "assets/js/20.df1229ad.js",
    "revision": "3dcb302c883f4bb2197ec90c7f5707eb"
  },
  {
    "url": "assets/js/21.9fae8635.js",
    "revision": "66c444e362f65e7bd6e7510beff69f28"
  },
  {
    "url": "assets/js/22.7da6d038.js",
    "revision": "c19d513f280a56ec78d07a7db7004db9"
  },
  {
    "url": "assets/js/23.9b2ad679.js",
    "revision": "5e4430ec9ef8b868efb6ba09d1af6dcc"
  },
  {
    "url": "assets/js/24.5736ee95.js",
    "revision": "82e44cb42c03f6ad73d11f6dc99b839d"
  },
  {
    "url": "assets/js/25.ea8b7b0e.js",
    "revision": "188f9bb7e45d52203287d9d82035b900"
  },
  {
    "url": "assets/js/26.28eab218.js",
    "revision": "49292e7fb2098c335edd9bebf706a737"
  },
  {
    "url": "assets/js/27.bd63bb9d.js",
    "revision": "59ae20b95f051e76fb8e10f05d9f3e3c"
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
    "url": "assets/js/app.65b9a2dd.js",
    "revision": "08b17996988b7f77a944c496979d8f9a"
  },
  {
    "url": "assets/js/vendors~flowchart.57f62f21.js",
    "revision": "ea0b1744ce9d5bfcf2a3192366c8dda5"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "41b35ac1467250274e672b368546cf1f"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "7aeef486b9ff9e10f7116306380ba810"
  },
  {
    "url": "categories/geek/index.html",
    "revision": "259d8790d882002089e239876b4eabc1"
  },
  {
    "url": "categories/geek/page/2/index.html",
    "revision": "fc2650598959012d1fd6464c0357cb99"
  },
  {
    "url": "categories/index.html",
    "revision": "000590b02dd45263fa2f60ace2222ff3"
  },
  {
    "url": "categories/infra/index.html",
    "revision": "1cfbe51b5a0b73d4ab644a10d8e52634"
  },
  {
    "url": "categories/life/index.html",
    "revision": "4bb55956c4dfa78bff6e326aeb0ff528"
  },
  {
    "url": "categories/other/index.html",
    "revision": "c23e1957bf27d1b8eca441326c729ba0"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "28b9cac1d2dd9b9197345990cafa2b65"
  },
  {
    "url": "closer/index.html",
    "revision": "917ad5cd03a04eaacaf5887dc7ac9198"
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
    "revision": "9b9aba0bbc27a5555f58f21b74ae8cf6"
  },
  {
    "url": "jp/index.html",
    "revision": "4aea48403071c8f002eadf97ed58164e"
  },
  {
    "url": "mac/index.html",
    "revision": "6010835690c9cba48b47f42c67668506"
  },
  {
    "url": "me/index.html",
    "revision": "23c3efa4578844926a0bf8e2cf06e5a7"
  },
  {
    "url": "pronunciation/index.html",
    "revision": "db9e65a63fe3d57538a7b4b202c49845"
  },
  {
    "url": "tag/index.html",
    "revision": "c5df5cfd76f342df4bdeb4ed0db38b3b"
  },
  {
    "url": "tags/Chinese/index.html",
    "revision": "083061075f37682d73f22ca481cdccfd"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9d0be3f57e7c4c8d1fdefa385b9516f6"
  },
  {
    "url": "tags/English/index.html",
    "revision": "5e3f70d7811e8e89caa03f5f9914f22b"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "e2bfc9db2342a3edc8e2278279fc943b"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "5f0e78f683ae9a14e4a04629cf1cf82d"
  },
  {
    "url": "tags/Japanese/index.html",
    "revision": "e51fc3fe0b9fb5500acac7a886deeabb"
  },
  {
    "url": "tags/Laravel/index.html",
    "revision": "d45f9e1018063d13e03fb920cffc9853"
  },
  {
    "url": "tags/MacOs/index.html",
    "revision": "a55b1952ded53defbd7e7e6460fdcf0c"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "ab957471c8993092bc0b361bc3b7220c"
  },
  {
    "url": "tags/PHP/index.html",
    "revision": "6adf48d7578598d652dd8edb54cc7aad"
  },
  {
    "url": "tags/Vue.jsg/index.html",
    "revision": "87f3f82242db5e2e6a125063f66249c1"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "e47287b0cc241ea7e67ad0da3cd20706"
  },
  {
    "url": "tags/whoami/index.html",
    "revision": "b6e7dadbe5da6c29c6017b0e3028c3d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "77ed82c9cff49291507b83647c4e0d37"
  },
  {
    "url": "zh/index.html",
    "revision": "f60d322dcd87286748096a371a279914"
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
