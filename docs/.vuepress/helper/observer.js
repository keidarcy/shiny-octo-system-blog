module.exports = new IntersectionObserver(
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
