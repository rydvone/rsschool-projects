'use strict'
const buttonSlide = document.querySelector('.slide')
const buttonClose = document.querySelector('.popup__button-close');
const body = document.querySelector('.body');
const popupBlock = document.querySelector('.popup-block');
const popupCard = document.querySelector('.popup__card'); 

const popupSwitch = () => {
  console.log('hellooooooooo');
  popupBlock.classList.toggle('open')
  body.classList.toggle('active');
}
const outsidePopup = (e) => {
  if(e.target == popupBlock && !(popupCard.contains(e.target))) {
    popupSwitch();
   }
}

const popupSubscribe = () => {
  buttonSlide.addEventListener('click', popupSwitch);
  buttonClose.addEventListener('click', popupSwitch);
  // menuLink.forEach((el) => el.addEventListener('click', menuSwitch));

  document.addEventListener('click', outsidePopup);

}


export default popupSubscribe;