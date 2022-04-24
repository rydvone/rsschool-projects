import burgerSubscribe from "./../../assets/src/components/burger.js";
import popupSubscribe from "./../../assets/src/components/popup.js";
import dataJSONfile from "./../../assets/src/components/data.js";
import sliderSubscribe from "./../../assets/src/components/slider.js";


// wait why all pages html + css will be load
window.onload = () => {
  const dataJSON = dataJSONfile;
  // components
  burgerSubscribe();
  popupSubscribe();
  sliderSubscribe(dataJSON);


  console.log("Hello, friend!");




  




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
};
