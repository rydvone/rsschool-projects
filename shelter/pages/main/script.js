import burgerSubscribe from './../../assets/src/components/burger.js';
import popupSubscribe from './../../assets/src/components/popup.js';
import dataJSON from './../../assets/src/components/data.js';

// wait why all pages html + css will be load
window.onload = () => {
  const data = dataJSON;




// stackoverflow code
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






  // components
  burgerSubscribe();
  popupSubscribe();

  console.log('Hello, friend!')

}