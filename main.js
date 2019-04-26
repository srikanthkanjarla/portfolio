/* fix navbar on top after scrolling down */
const portfolioContainer = document.querySelector('.portfolio-container');
// const profileContainer = document.querySelector('.profile-container');

function fixNavbar() {
  if (window.scrollY > portfolioContainer.offsetTop - 22) {
    // if (window.scrollY > profileContainer.offsetHeight + 22) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNavbar);

// footer copy rights year
document.getElementById('year').textContent = new Date().getFullYear();
