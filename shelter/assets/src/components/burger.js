'use strict'

const wrapperBurger = document.querySelector('.wrapper-burger');

const menuNav = document.querySelector('.menu__nav');
const menuLink = [...document.querySelectorAll('.menu__link')];

// add for shelter
const headerLogo = document.querySelector('.wrapper-header__logo')
const headerWrapper = document.querySelector('.header-wrapper');
const body = document.querySelector('.body');

const menuSwitch = () => {
  wrapperBurger.classList.toggle('open');
  menuNav.classList.toggle('open');


  headerLogo.classList.toggle('open');
  headerWrapper.classList.toggle('open');
  body.classList.toggle('active');
}
const outsideMenu = (e) => {
  if(!(menuNav.contains(e.target) || wrapperBurger.contains(e.target)) && wrapperBurger.classList.contains('open')) {
    menuSwitch();
   }
}








const burgerSubscribe = () => {
  wrapperBurger.addEventListener('click', menuSwitch);
  menuLink.forEach((el) => el.addEventListener('click', menuSwitch));

  document.addEventListener('click', outsideMenu);






  // document.addEventListener('click', outsideEvtListener);
  
  // function outsideEvtListener(e) {
  //     if (e.target === menuNav || menuNav.contains(e.target)) {
  //         // клик внутри
  //         return;
  //     }
  //     menuSwitch();
  //     // код для закрытия меню, например el.classList.add('hidden')
     
  //     // не забыть убрать слушатель событий (не для каждой имплементации требуется)
  //     // document.removeEventListener(outsideEvtListener);
  // }

  // document.addEventListener('click', function(e) {
  //   // if(e.target.className != 'menu__nav' || e.target.className != 'menu__list open' || e.target.className != 'burger' ) {
  //     if(e.target.className != 'menu__nav open') {
  //     // menuSwitch();
  //       console.log(e.target);
  //    }
  // });



}

export default burgerSubscribe;