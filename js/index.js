/* ------------Mobile Menu------------ */

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header-bottom');
const logo = document.querySelector('.logo');
const headerLink = document.querySelectorAll('.header-bottom .nav-link');
const mainNav = document.querySelector('.main-nav');
const navBar = document.querySelector('.navbar');
const navItem = document.querySelectorAll('.main-nav .nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  headerLink.forEach((link) => {
    link.classList.toggle('active');
  });
  mainNav.classList.toggle('active');
  navItem.forEach((item) => {
    item.classList.toggle('active');
  });
  navBar.classList.toggle('active');
  header.classList.toggle('active');
  logo.classList.toggle('active');
});

headerLink.forEach((link) => {
  link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navBar.classList.remove('active');
      header.classList.remove('active');
      headerLink.forEach((link) => {
      link.classList.remove('active');
    });
    mainNav.classList.remove('active');
    navItem.forEach((item) => { 
      item.classList.remove('active');
    });
  })
  logo.style.display = 'none';
})
