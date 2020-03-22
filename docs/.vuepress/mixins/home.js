const observer = require('../helper/observer');

module.exports = {
  mounted() {
    observer.observe(document.querySelector('.abstract-wrapper'));
    document.querySelector(
      'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(1) > h6'
    ).innerText = 'articals';
    document.querySelector(
      'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(2) > h6'
    ).innerText = 'tags';
    document.querySelector('h4:nth-child(2)').innerText = 'categories';
    document.querySelector('h4:nth-child(5)').innerText = 'tags';
  },
  updated() {
    document.querySelector('.navbar').classList.remove('not-floating');
    document.querySelector('.navbar').classList.remove('is-floating');
  }
};
