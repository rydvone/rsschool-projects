import burgerSubscribe from "./../../assets/src/components/burger.js";
// import popupSubscribe from "./../../assets/src/components/popup.js";
import dataJSONfile from "./../../assets/src/components/data.js";
import sliderSubscribe from "./../../assets/src/components/slider.js";


// wait why all pages html + css will be load
window.onload = () => {
  const dataJSON = dataJSONfile;
  // components
  burgerSubscribe();
  // popupSubscribe();
  sliderSubscribe(dataJSON);


  console.log("Hello, friend!");

  // const slide = [...document.querySelectorAll('.slide')];
  // slide.forEach((el) => el.addEventListener('click', (e) => {
  //   console.log(e.currentTarget);
  // }));

  const slide = [...document.querySelectorAll('.slide')];
  const buttonClose = document.querySelector('.popup__button-close');
  const body = document.querySelector('.body');
  const popupBlock = document.querySelector('.popup-block');
  const popupCard = document.querySelector('.popup__card'); 
  const imgAbout = document.querySelector('.img__about'); 
  let namePets = '';
  
  const popupSwitch = (e) => {
    popupBlock.classList.toggle('open');
    body.classList.toggle('active');
    // console.log(e.currentTarget.textContent);
    // let lengthNamePets = e.currentTarget.textContent.length;
    // namePets = e.currentTarget.textContent.slice(0, (lengthNamePets - 10));
    // console.log(namePets);
  }  
  
  const outsidePopup = (e) => {
    if(!(popupCard.contains(e.target))) {
      console.log('block shadow');
      popupSwitch();
     }
  }
  
    buttonClose.addEventListener('click', popupSwitch);
    slide.forEach((el) => el.addEventListener('click', popupSwitch));
  
    document.addEventListener('click', (e) => {
      if (e.target.closest('.slide') != null) {
        popupSwitch(e);
      }
    })
    
    // popupCard.addEventListener('click', popupSwitch);
    // document.addEventListener('click', outsidePopup);
    // e.target.closest('.popup')

  




  // stackoverflow code to disable scroll
  // const { body, documentElement } = document;
  // let { scrollTop } = document.documentElement;

  // function disableScroll() {
  //   scrollTop = documentElement.scrollTop;
  //   body.style.top = `-${scrollTop}px`;
  //   body.classList.add("scroll-disabled");
  // }

  // function enableScroll() {
  //   body.classList.remove("scroll-disabled");
  //   documentElement.scrollTop = scrollTop;
  //   body.style.removeProperty("top");
  // }
  // // If you are using scroll-behavior: smooth on html, you also need to modify the enableScroll function like this:

  // function enableScroll() {
  //   body.classList.remove("scroll-disabled");
  //   // Set "scroll-behavior" to "auto"
  //   documentElement.style.scrollBehavior = "auto";
  //   documentElement.scrollTop = scrollTop;
  //   // Remove "scroll-behavior: auto" after restoring scroll position
  //   documentElement.style.removeProperty("scroll-behavior");
  //   body.style.removeProperty("top");
  // }
};
