module.exports = {
  theme: 'reco',
  plugins: ['flowchart', 'ribbon'],
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
  title: 'xyyolab👨‍🔬🔥',
  description: 'You REALLY CAN  do whatever you want',
  themeConfig: {
    type: 'blog',
    authorAvatar: '/images/self-round.png',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'contact',
        ariaLabel: 'contact',
        icon: 'reco-message',
        items: [
          {
            icon: 'reco-github',
            text: 'GitHub',
            link: 'https://github.com/xyyolab'
          },
          {
            icon: 'reco-wechat',
            text: 'wechat',
            link: '/'
          },
          {
            icon: 'reco-facebook',
            text: 'facebook',
            link: 'https://www.facebook.com/people/Xing-Yahao/100010633425743'
          },
          {
            icon: 'reco-mail',
            text: 'Gmail',
            link: 'keidarcy.1015@gmail.com'
          },
          {
            icon: 'reco-other',
            text: 'about me',
            link: '/about/'
          }
        ]
      }
    ],
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
    vssueConfig: {
      platform: 'github',
      owner: 'xyyolab',
      repo: 'blog',
      clientId: process.env.GithubId,
      clientSecret: process.env.GithubSecret
    },
    logo: '/images/self-round.png',
    noFoundPageByTencent: false,
    sidebar: 'auto',
    sidebarDepth: 2
  }
};
