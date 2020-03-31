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
    "revision": "d782db410228c41df8c3bf6254183251"
  },
  {
    "url": "2019/11/21/_0007-useful-laravel-tips/index.html",
    "revision": "92de77260853d880bc9eb5e29c44808a"
  },
  {
    "url": "2019/12/15/_0009-css-preprocessor-comperation/index.html",
    "revision": "31689113a31e2789c00a7acc96fbd287"
  },
  {
    "url": "2019/12/25/_0000-how-laravel-facade-work/index.html",
    "revision": "9d00bf0d8d95a402140ab0395143358a"
  },
  {
    "url": "2019/12/27/_0001-how-to-create-laravel-facade/index.html",
    "revision": "7051481041d3f4df6c80a951fcc14e7d"
  },
  {
    "url": "2019/12/31/_0002-how-collection-help-us/index.html",
    "revision": "b6cfcb882000f5ec6e7d25b160534724"
  },
  {
    "url": "2020/01/01/_0003-how-to-macroable-everything/index.html",
    "revision": "1cdd0b1764c09559da566fd8d860fb0f"
  },
  {
    "url": "2020/01/12/_0010-import-vue-from-vue/index.html",
    "revision": "7fd57273e03076619d07fed7246e3d9f"
  },
  {
    "url": "2020/02/17/_0005-laravel7-upgrade-guide/index.html",
    "revision": "0f8910d170d9868bdd005521d652e8e9"
  },
  {
    "url": "2020/02/20/_0004-japanese-random-word-generater/index.html",
    "revision": "ecc5921ada67d59c16ae2c838e7f48e9"
  },
  {
    "url": "2020/02/22/_0006-laravel7-release/index.html",
    "revision": "bce2113e4479fc119b8523b83ff4c6b5"
  },
  {
    "url": "2020/03/22/_0011-storing-using-secrets-github-action/index.html",
    "revision": "0e93963a943c25487b14ece8700ffb08"
  },
  {
    "url": "2020/03/23/_0012-how-to-build-this-blog/index.html",
    "revision": "f3a4f45d1aeec7e5b200db8e97955ac8"
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
    "url": "assets/js/12.b6dcb641.js",
    "revision": "6aef28563323bcc4c0b9b3d781335ae1"
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
    "url": "assets/js/16.f33a9163.js",
    "revision": "0c369193b2fa57b44523f74fd7ae641e"
  },
  {
    "url": "assets/js/17.7a1f07a2.js",
    "revision": "0c56e84bf9627a0492107110c9496b67"
  },
  {
    "url": "assets/js/18.fa4e1cb9.js",
    "revision": "504cb08dd1a0ca5db34e336f8e12c32c"
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
    "url": "assets/js/28.5b47c271.js",
    "revision": "61b741e4f87049a17ddb45e385da417a"
  },
  {
    "url": "assets/js/29.4d63d3bf.js",
    "revision": "9f7085621bd8b0d2fa71d6511e9eea80"
  },
  {
    "url": "assets/js/30.57b0e438.js",
    "revision": "f55bb4d304327e662b6f4d49ab724c02"
  },
  {
    "url": "assets/js/31.2a2c33fd.js",
    "revision": "8e84440bad2b9ddab1b24296f65c481d"
  },
  {
    "url": "assets/js/32.ac895719.js",
    "revision": "4038260d676838b2743598dba2f2ae58"
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
    "url": "assets/js/app.9d8adc44.js",
    "revision": "898089e80f33147445de7f2414977ecd"
  },
  {
    "url": "assets/js/vendors~flowchart.57f62f21.js",
    "revision": "ea0b1744ce9d5bfcf2a3192366c8dda5"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "b64b1eb9403155ff23a3acf928857514"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "cd719e5e8788001cfbdf83d4f3551c15"
  },
  {
    "url": "categories/geek/index.html",
    "revision": "6999cca82e15c2196a5e14928341a5fc"
  },
  {
    "url": "categories/geek/page/2/index.html",
    "revision": "4102ce0006256c63013231d7700066a3"
  },
  {
    "url": "categories/index.html",
    "revision": "a17239593a95d9fa7c548b77bf08f008"
  },
  {
    "url": "categories/infra/index.html",
    "revision": "5d686935023e41f9c176331ad73d8201"
  },
  {
    "url": "categories/life/index.html",
    "revision": "f91b208603491b48fdd5a5f681b592c3"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a8b1a3b0128d2bc35ffb4f658d9a96f7"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ebad67cfabc8226afc79404f57f33329"
  },
  {
    "url": "closer/index.html",
    "revision": "197ee31b695cb12e1e7f58f33f976611"
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
    "revision": "c8802ae08ede5a417773a96b2d4dab26"
  },
  {
    "url": "jp/index.html",
    "revision": "170ecfce68c775dbcafbf6849afeeaf9"
  },
  {
    "url": "mac/index.html",
    "revision": "5b479df84eaf25eb488d3e72ad36d4e5"
  },
  {
    "url": "me/index.html",
    "revision": "52d19b6b8e25a3509fcb5fe1657075ed"
  },
  {
    "url": "pronunciation/index.html",
    "revision": "b098cc59137a9b284cfd53b120778088"
  },
  {
    "url": "tag/index.html",
    "revision": "b927b5b6a54681d17c177c25d410859c"
  },
  {
    "url": "tags/Chinese/index.html",
    "revision": "f41f2d0ca9288e405f7289c9ef1981eb"
  },
  {
    "url": "tags/css/index.html",
    "revision": "5c208f30bc7580b90c056cc0c7853faf"
  },
  {
    "url": "tags/English/index.html",
    "revision": "c95d3086f4e57a1712a08fbda3f4397f"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "6548d708936cc9b436552f8c877be2fb"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "ae02277a56e906764d112e2fb13ab771"
  },
  {
    "url": "tags/Japanese/index.html",
    "revision": "9829993e5e1011e1a4c416489c354c73"
  },
  {
    "url": "tags/Laravel/index.html",
    "revision": "4a06abb989a36f86684668ae842a311b"
  },
  {
    "url": "tags/MacOs/index.html",
    "revision": "85c9ce726526e05455827754fabf44d9"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "68cde2b3c37ced7fc135a2b5c1627712"
  },
  {
    "url": "tags/PHP/index.html",
    "revision": "733bea8b7982237fbcac0dbb1c6dd911"
  },
  {
    "url": "tags/Vue.jsg/index.html",
    "revision": "12fed52e26d753a34ba524abc3b9b52c"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "3bab622d14f9ebb72cd95ad23c7b0b70"
  },
  {
    "url": "tags/whoami/index.html",
    "revision": "e1ef89fdb5122bcbd6cd059b1ce97137"
  },
  {
    "url": "timeline/index.html",
    "revision": "26bcfb441b9b5deedf01067d6edd7527"
  },
  {
    "url": "zh/index.html",
    "revision": "b204033647e469a808589fdef3268ec9"
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
