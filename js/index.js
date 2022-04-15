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
  });
});

/* -------- Dymanic rendering of sponsors in the sponsor section ------- */

const data = [
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : './images/photopasseport.jpg',
    sponsorName : 'Christian Biringanine',
    sponsorPosition : 'Electrical engineer and studying full stack web-dev at Microverse',
    sponsorBackground : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText : 'chris-photo',
  },
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : '../images/spons1.jpg',
    sponsorName : 'Prophet TB Joshua',
    sponsorPosition : 'Temitope Balogun Joshua, popularly known as T. B. Joshua, was a Nigerian charismatic pastor, televangelist, and philanthropist.',
    sponsorBackground : 'He was the leader and founder of Synagogue, Church of All Nations, a Christian megachurch that runs the Emmanuel TV television station from Lagos.',
    alternativeText : 'TB Joshua-photo',
  },
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : './images/spons2.jpg',
    sponsorName : 'Lila Tretikov',
    sponsorPosition : 'Electrical engineer and studying full stack web-dev at Microverse',
    sponsorBackground : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText : 'Lila-photo',
    classHidden : 'seeMore',
  },
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : '../images/sponsor4.jpg',
    sponsorName : 'Michael DuBois',
    sponsorPosition : 'Electrical engineer and studying full stack web-dev at Microverse',
    sponsorBackground : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText : 'DuBois-photo',
    classHidden : 'seeMore',
  },
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : './images/spons5.jpg',
    sponsorName : 'Ryan Mercley',
    sponsorPosition : 'Electrical engineer and studying full stack web-dev at Microverse',
    sponsorBackground : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText : 'Ryan-photo',
    classHidden : 'seeMore',
  },
  {
    featureImage : './images/blank-chess-board.gif',
    sponsorImage : './images/24755_portrait-photography.jpg',
    sponsorName : 'Julia Leda',
    sponsorPosition : 'Electrical engineer and studying full stack web-dev at Microverse',
    sponsorBackground : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText : 'Julia-photo',
    classHidden : 'seeMore',
  }
];

const sponsorSection = document.querySelector('.sponsor'); 
const title = document.createElement('h3');
title.textContent = 'Potential Sponsors';
title.classList.add('sponsor-title');
sponsorSection.appendChild(title);

const sponsorContainer = document.createElement('div');
sponsorContainer.classList.add('sponsor-container');
sponsorSection.appendChild(sponsorContainer);

data.forEach((sponsor) => {
  const sponsor1 = document.createElement('div');
  sponsor1.classList.add('sponsor1');
  sponsor1.classList.add(`${sponsor.classHidden}`)
  sponsor1.innerHTML = `<div class='sponspo-avatar'>
    <img src='${sponsor.featureImage}' alt='bg' class='img' />
    <img src='${sponsor.sponsorImage}' alt='${sponsor.alternativeText}' class='portrait' />
    </div>
    <div class="sponsor-info">
      <h3 class="sponsor-name">${sponsor.sponsorName}</h3>
      <div class="sponsor-bio">
        <span class="position">${sponsor.sponsorPosition}</span>
        <p class="background">${sponsor.sponsorBackground}</p>
     </div>
    </div>`
  sponsorContainer.appendChild(sponsor1);
});

const seeMorebtn = document.createElement('div');
seeMorebtn.classList.add('seemore-btn');
seeMorebtn.textContent = 'MORE';
sponsorContainer.appendChild(seeMorebtn);

const sponsor1 = document.querySelectorAll('.sponsor1');
console.log(sponsor1);
seeMorebtn.addEventListener('click', () => {
  sponsor1.forEach((element) => {
    if(element.classList.contains('seeMore')){
      element.classList.remove('seeMore');
      seeMorebtn.textContent = 'LESS';
      seeMorebtn.style.display = 'none';
    };
  });
})
