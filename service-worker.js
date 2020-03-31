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
    "revision": "23c6d02edefd164d1397622432086482"
  },
  {
    "url": "2019/11/21/_0007-useful-laravel-tips/index.html",
    "revision": "595d61438cbe5f0af77fc147802844b2"
  },
  {
    "url": "2019/12/15/_0009-css-preprocessor-comperation/index.html",
    "revision": "990f04eddbe48224c6e58178ed900677"
  },
  {
    "url": "2019/12/25/_0000-how-laravel-facade-work/index.html",
    "revision": "d9f75d69f9a901bb64584fa77dcdd4c5"
  },
  {
    "url": "2019/12/27/_0001-how-to-create-laravel-facade/index.html",
    "revision": "fd716c1c7ed058719d5d2b4391b4c444"
  },
  {
    "url": "2019/12/31/_0002-how-collection-help-us/index.html",
    "revision": "a614a011c16956ff4985e58d92ab6239"
  },
  {
    "url": "2020/01/01/_0003-how-to-macroable-everything/index.html",
    "revision": "68b5134b5fdcca56182eb3b0c60bfbda"
  },
  {
    "url": "2020/01/12/_0010-import-vue-from-vue/index.html",
    "revision": "20fdc3d901b68034caa4fb8b0621811e"
  },
  {
    "url": "2020/02/17/_0005-laravel7-upgrade-guide/index.html",
    "revision": "d368021a0122e906f4ac626a4e5490b1"
  },
  {
    "url": "2020/02/20/_0004-japanese-random-word-generater/index.html",
    "revision": "d33b03944971ae2ce2a11c278c908326"
  },
  {
    "url": "2020/02/22/_0006-laravel7-release/index.html",
    "revision": "64ff607f81e02a62cae1d1e427efd736"
  },
  {
    "url": "2020/03/22/_0011-storing-using-secrets-github-action/index.html",
    "revision": "1c2d0fdd5b51e3e9bff7f99889baf140"
  },
  {
    "url": "2020/03/23/_0012-how-to-build-this-blog/index.html",
    "revision": "6edf9679e32dc08b15c00e8ffdfbd2fc"
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
    "url": "assets/js/app.34400988.js",
    "revision": "1f63a852ff5261fed49ab29c315a2d85"
  },
  {
    "url": "assets/js/vendors~flowchart.57f62f21.js",
    "revision": "ea0b1744ce9d5bfcf2a3192366c8dda5"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "74f414d1df530f0e738529010b3baa52"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "c1f32ba3b7201b34e369b27638d5c699"
  },
  {
    "url": "categories/geek/index.html",
    "revision": "8f1cdb8307915d835469d325f606028b"
  },
  {
    "url": "categories/geek/page/2/index.html",
    "revision": "d29117ade9dfcf4b9b803e44c851e4fd"
  },
  {
    "url": "categories/index.html",
    "revision": "b9f37ffee2efdfb55a6c783c9407c09c"
  },
  {
    "url": "categories/infra/index.html",
    "revision": "dfd96f2f708437924d99fcd8ee492572"
  },
  {
    "url": "categories/life/index.html",
    "revision": "77ded1a0c668745450c4a00d2f19f44f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "af667da668a73d41b5855d420ff0fa3d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "08ffa19c4e5b4ff246847ecf9ce09ec3"
  },
  {
    "url": "closer/index.html",
    "revision": "fb3c2d2e2c6000f03ab2caaa07acf067"
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
    "revision": "b7cfa8701fa95a4970d77521f3d4a1c0"
  },
  {
    "url": "jp/index.html",
    "revision": "6910e02ef3aebc13dcb4d1dcbb192ed8"
  },
  {
    "url": "mac/index.html",
    "revision": "ba13473e8816698074b1476090071e37"
  },
  {
    "url": "me/index.html",
    "revision": "58194fbf8e0064b869da278faa03a984"
  },
  {
    "url": "pronunciation/index.html",
    "revision": "a3f94e4350dab4506d9dff13bf16925f"
  },
  {
    "url": "tag/index.html",
    "revision": "a6094875fe4bf8a30b65cba4797166a1"
  },
  {
    "url": "tags/Chinese/index.html",
    "revision": "f3e055453952d52ed85156499c156f12"
  },
  {
    "url": "tags/css/index.html",
    "revision": "f477f6066e4d56c2acecafc9b578c8a5"
  },
  {
    "url": "tags/English/index.html",
    "revision": "568a64b7a9f8eedf16f7e322ed1ea78a"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "d3daf07659bac08cf99865be0a707f3d"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "be2f114f1711e3a6c7a3f085103c116e"
  },
  {
    "url": "tags/Japanese/index.html",
    "revision": "5ac98b2a9e9e2761934f8efcff440353"
  },
  {
    "url": "tags/Laravel/index.html",
    "revision": "6215b0e7c90134a32bde86276bbfffb5"
  },
  {
    "url": "tags/MacOs/index.html",
    "revision": "64c5af36c84525d674da2e4deb825f1c"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "7729a2163588c7d3234a85cecc71b288"
  },
  {
    "url": "tags/PHP/index.html",
    "revision": "d6060bb30fa12a9966ce2230b39be550"
  },
  {
    "url": "tags/Vue.jsg/index.html",
    "revision": "9867e177923338bec6ca86ac8fb0bc59"
  },
  {
    "url": "tags/Vuepress/index.html",
    "revision": "f9b98b341f483f6c6a1cac4a22efea94"
  },
  {
    "url": "tags/whoami/index.html",
    "revision": "b72b8fa003f823ae36d5e12850e8c6dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "a03f6856d2896bc3909a471bd26da1ae"
  },
  {
    "url": "zh/index.html",
    "revision": "6ecc4671feaa6957ffed0628690f684d"
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
