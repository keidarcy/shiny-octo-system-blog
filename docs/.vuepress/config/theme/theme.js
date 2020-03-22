module.exports = {
  type: 'blog',
  author: 'xyh 🐸',
  authorAvatar: '/images/self-round.png',
  // bad compatibility
  // blogConfig: {
  //   category: {
  //     location: 2,
  //     text: 'Category'
  //   },
  //   tag: {
  //     location: 3,
  //     text: 'Tag'
  //   }
  // },
  vssueConfig: {
    platform: 'github',
    owner: 'xyyolab',
    repo: 'blog',
    clientId: process.env.VSSUEID,
    clientSecret: process.env.VSSUESECRET
  },
  logo: '/images/self-round.png',
  noFoundPageByTencent: false,
  sidebar: 'auto',
  sidebarDepth: 2,
  lastUpdated: 'Last Updated',
  startYear: 2019,
  search: true,
  searchMaxSuggestions: 10
};
