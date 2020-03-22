---
home: true
bgImage: 'images/banner.jpg'
bgImageStyle: { display: inherit, height: '1000px' }
heroImage: '/images/logo-without-background.png'
heroImageStyle:
  {
    maxHeight: '200px',
    display: block,
    margin: '6rem auto 1.5rem',
    borderRadius: '20%',
    boxShadow: '0 5px 48px rgba(0,0,0,0.5)',
  }
---

<script>
require('intersection-observer');
const observer = new IntersectionObserver(
  entries => {
    if (entries[0].intersectionRatio >= 0.25) {
      document.querySelector('.navbar').classList.add('is-floating');
      document.querySelector('.navbar').classList.remove('not-floating');
    } else {
      document.querySelector('.navbar').classList.remove('is-floating');
      document.querySelector('.navbar').classList.add('not-floating');
    }
  },
  {
    threshold: 0.25
  }
);
// import homeMixin from './.vuepress/mixins/home'
// const homeMixin = require('./.vuepress/mixins/home.js')
export default {
  // mixins: [homeMixin],
  mounted() {
  observer.observe(document.querySelector('.abstract-wrapper'));
  // observer.observe(document.querySelector('.page-title'));
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
}
</script>
