'use strict'
const slide = [...document.querySelectorAll('.slide')];
const buttonClose = document.querySelector('.popup__button-close');
const body = document.querySelector('.body');
const popupBlock = document.querySelector('.popup-block');
const popupCard = document.querySelector('.popup__card'); 


const popupSwitch = () => {
  console.log('hellooooooooo');
  popupBlock.classList.toggle('open');
  body.classList.toggle('active');

  // if (popupBlock.contains('open')) {
  //   disableScroll();
  // }

}
// e.target == popupBlock || !(popupCard.contains(e.target))
const outsidePopup = (e) => {
  if(!(popupCard.contains(e.target))) {
    console.log('block shadow');
    popupSwitch();
   }
}

const popupSubscribe = () => {
  buttonClose.addEventListener('click', popupSwitch);
  slide.forEach((el) => el.addEventListener('click', popupSwitch));

  // popupCard.addEventListener('click', popupSwitch);
  // document.addEventListener('click', outsidePopup);

}


export default popupSubscribe;