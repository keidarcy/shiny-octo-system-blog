---
home: true
bgImage: 'images/banner.jpg'
bgImageStyle: { display: inherit, height: '1000px' }
heroImage: images/logo-without-background.png
heroImageStyle:
  {
    maxHeight: '230px',
    display: block,
    margin: '6rem auto 1.5rem',
    borderRadius: '20%',
    boxShadow: '0 5px 48px rgba(0,0,0,0.5)',
  }
navbar: false
---

<script>

export default {
 mounted () {
    document.querySelector('div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(1) > h6').innerText='articals';
    document.querySelector('div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(2) > h6').innerText='tags';
    document.querySelector('h4:nth-child(2)').innerText='categories'
    document.querySelector('h4:nth-child(5)').innerText='tags'
  }
}
</script>
