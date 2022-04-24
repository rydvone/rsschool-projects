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
  }    
  const popupClose = (e) => {
    popupBlock.classList.remove('open');
    body.classList.remove('active');
  }  
  const outsidePopup = (e) => {
    if(!(popupCard.contains(e.target))) {
      console.log('block shadow');
      popupSwitch();
     }
  }
  
    buttonClose.addEventListener('click', popupClose);
    // slide.forEach((el) => el.addEventListener('click', popupSwitch));
  
    document.addEventListener('click', (e) => {
      if (e.target.closest('.slide') != null) {
        let some = e.target.closest('.slide');

        let lengthNamePets = some.textContent.length;
        namePets = some.textContent.slice(0, (lengthNamePets - 10));
        console.log(namePets);
        // createPopupWindow(); 
        popupSwitch(e);
      }
    })
    
    // popupCard.addEventListener('click', popupSwitch);
    // document.addEventListener('click', outsidePopup);
    // e.target.closest('.popup')

  function createPopupWindow() {
    popupCard.innerHTML = "";
    // let arrRandom = findRandom(ckeckEmptyArr);

    // for (let i = 0; i < numSlide; i++) {
      let namePets = dataJSON[arrRandom[3]].name;

      const tagDivSlide1 = document.createElement("div");
      tagDivSlide1.classList.add("slide");

      const tagImgCard = document.createElement("img");
      tagImgCard.classList.add("img__popup");
      tagImgCard.src = "./../../assets/images/pets/" + namePets.toLowerCase() + ".png";
      tagImgCard.alt = "your best friends";

      const tagDivPopupContent = document.createElement("div");
      tagDivPopupContent.classList.add("popup__content");

      const tagDivPopupName = document.createElement("div");
      tagDivPopupName.classList.add("popup__name");
      tagDivPopupName.textContent = namePets;


      const tagDivPopupType = document.createElement("div");
      tagDivPopupType.classList.add("popup__type");
      tagDivPopupType.textContent = namePets;

      const tagDivPopupDescription = document.createElement("div");
      tagDivPopupDescription.classList.add("popup__description");
      tagDivPopupDescription.textContent = namePets;

      const tagDivPopupListWrraper = document.createElement("div");
      tagDivPopupListWrraper.classList.add("popup__list-wrapper");

      const tagDivPopupList = document.createElement("ul");
      tagDivPopupList.classList.add("popup__list");
      
      const tagDivPopupItem = document.createElement("li");
      tagDivPopupItem.classList.add("popup__item");
      
      const tagDivPopupItemSpan1 = document.createElement("span");
      tagDivPopupItemSpan1.classList.add("popup__item_bold");      

      const tagDivPopupItemSpan2 = document.createElement("span");
      tagDivPopupItemSpan2.classList.add("popup__item_text");
      tagDivPopupType.textContent = namePets;


      const tagButtonSlide1 = document.createElement("button");
      tagButtonSlide1.classList.add("button_transparent");
      tagButtonSlide1.classList.add("slide__button");
      tagButtonSlide1.textContent = "Learn more";

      nameSlide.append(tagDivSlide1);
      tagDivSlide1.append(tagImgSlide1);
      tagDivSlide1.append(tagDivSubtitleSlide1);
      tagDivSlide1.append(tagButtonSlide1);
    }
  }
  }







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
