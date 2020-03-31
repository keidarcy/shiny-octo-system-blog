const themeConfig = require('./config/theme/');
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'meta',
      { property: 'og:image', content: '/icons/apple-icon-152x152.png' }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  theme: 'reco',
  plugins: [
    'flowchart',
    'ribbon',
    ['disqus', { shortname: 'nice' }],
    ['vuepress-plugin-code-copy', true],
    [
      'livere',
      {
        LIVERE_UID: process.env.LIVERE_UID,
        LIVERE_URL: 'https://blog.xyyolab.com'
      }
    ]
  ],
  serviceWorker: true,
  markdown: {
    // lineNumbers: true
  },
  permalink: '/:year/:month/:day/:slug',
  title: 'xyyolab👨‍🔬🔥',
  locales: {
    '/': {
      lang: 'en-US',
      description:
        'We should consider every day lost on which we have not danced at least once 💃'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '每一个不曾起舞的日子，都是对生命的辜负 💃'
    },
    '/jp/': {
      lang: 'ja-JP',
      description:
        '私たち、一度でも踊っていない日は、彷徨っていると考えるべきだ 💃'
    }
  },
  themeConfig,
  editLinks: true
};
