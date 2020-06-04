---
home: true
bgImage: 'images/banner.jpg'
bgImageStyle: { display: inherit, height: '1000px' }
heroImage: /images/logo-without-background.png
heroImageStyle:
  {
    maxHeight: '200px',
    display: block,
    margin: '6rem auto 1.5rem',
    borderRadius: '20%',
    boxShadow: '0 5px 48px rgba(0,0,0,0.5)',
  }
permalink: /
---

<script>
export default {
  mounted() {
  console.log(1)
  document.querySelector(
    'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(1) > h6'
  ).innerText = '記事';
  document.querySelector(
    'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(2) > h6'
  ).innerText = 'タグ';
  document.querySelector('h4:nth-child(2)').innerText = 'カテゴリー';
  document.querySelector('h4:nth-child(5)').innerText = 'タグ';
  }
}
</script>
