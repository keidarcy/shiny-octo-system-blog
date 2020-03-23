const nav = require('../nav/');

module.exports = {
  '/': {
    selectText: 'Languages',
    label: 'English',
    nav: nav.en
  },
  '/zh/': {
    selectText: '选择语言',
    label: '中文',
    nav: nav.zh
  },
  '/jp/': {
    selectText: '言語',
    label: '日本語',
    // editLinkText: 'GitHub で編集',
    nav: nav.jp
  }
};
