import burgerSubscribe from './../../assets/src/components/burger.js';
import popupSubscribe from './../../assets/src/components/popup.js';
import dataJSON from './../../assets/src/components/data.js';

// wait why all pages html + css will be load
window.onload = () => {
  const data = dataJSON;
  // components
  burgerSubscribe();
  popupSubscribe();

  console.log('Hello, friend!')



  /* -------------------carousel------------------ */ 
  const sliderBtnLeft = document.querySelector('.slide__button_prev');
  const sliderBtnRight = document.querySelector('.slide__button_next');
  const slides = document.querySelector('.slides');

  function moveLeft() {
    slides.classList.add('move-to-left');
    // disable for the duration of the animation
    sliderBtnLeft.removeEventListener('click', moveLeft);
  }
  function moveRight() {
    slides.classList.add('move-to-right');
    // disable for the duration of the animation
    sliderBtnRight.removeEventListener('click', moveRight);
  }

  sliderBtnLeft.addEventListener('click', moveLeft);
  sliderBtnRight.addEventListener('click', moveRight);
  slides.addEventListener('animationend', (ev) => {
    // console.log(ev);
    if (ev.animationName === 'move-left') {
      console.log('some left');
      slides.classList.remove('move-to-left');
      const slideLeft = document.querySelector('#slide-left');
      console.log(slideLeft);
    }
    if (ev.animationName === 'move-right') {
      console.log('some tooooo right');
      slides.classList.remove('move-to-right');
    }   

    sliderBtnLeft.addEventListener('click', moveLeft);
    sliderBtnRight.addEventListener('click', moveRight);
  })

















// stackoverflow code to disable scroll
const { body, documentElement } = document;
let { scrollTop } = document.documentElement;

function disableScroll() {
  scrollTop = documentElement.scrollTop;
  body.style.top = `-${scrollTop}px`;
  body.classList.add("scroll-disabled");
}

function enableScroll() {
  body.classList.remove("scroll-disabled");
  documentElement.scrollTop = scrollTop;
  body.style.removeProperty("top");
}
// If you are using scroll-behavior: smooth on html, you also need to modify the enableScroll function like this:

function enableScroll() {
  body.classList.remove("scroll-disabled");
  // Set "scroll-behavior" to "auto"
  documentElement.style.scrollBehavior = "auto";
  documentElement.scrollTop = scrollTop;
  // Remove "scroll-behavior: auto" after restoring scroll position
  documentElement.style.removeProperty("scroll-behavior");
  body.style.removeProperty("top");
}







}