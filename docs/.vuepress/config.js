const themeConfig = require('./config/theme/');
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
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
    ]
  ],
  theme: 'reco',
  plugins: ['flowchart', 'ribbon'],
  markdown: {
    // lineNumbers: true
  },
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
