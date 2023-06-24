'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// document.getElementsByClassName('btn');

//creating and inserting the html element
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'we use cookies for improved functionality and analytics';  -can not insert the tags in it
// message.innerHTML =
//   'we use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// //header.before(message);
// //header.after(message);
// //delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     //message.parentElement.removeChild(message);
//   });

// message.style.backgroundColor = '#34567d';
// message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orange');

// //Attributes
// const logo = document.querySelector('.nav__logo');

// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// logo.setAttribute('alt', 'Beautiful bank logo');
// console.log(logo.alt);

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //data attribute
// console.log(logo.dataset.versionNumer);

// //class
// logo.classList.add('c', 'd');
// logo.classList.remove('c', 'd');
// logo.classList.toggle('c');
// logo.classList.contains('c');

const scrollTo = document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function () {
    const section1 = document.querySelector('.section');
    const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
    section1.scrollIntoView({ behavior: 'smooth' });
  });
//onmouse events
const h1 = document.querySelector('h1');
const head1 = function () {
  alert('You have entered to heading section');
};

h1.addEventListener('mouseenter', head1);

h1.onmouseenter = function () {
  alert('onmouseEnter funtion');
};

setTimeout(() => h1.removeEventListener('mouseenter', head1), 3000);

//capturing and bubbling
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', this, e.target, e.currentTarget);

  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', this, e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', this, e.target, e.currentTarget);
  },
  true
);
