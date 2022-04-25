"use strict";

function paginationSubscribe(dataJSON) {
  const slider = document.querySelector(".slider");
  const buttonDoubleLess = document.querySelector(".double-less");
  const buttonLess = document.querySelector(".less");
  const buttonDoubleMore = document.querySelector(".double-more");
  const buttonMore = document.querySelector(".more");
  const page = document.querySelector(".page");



  // const sliderBtnLeft = document.querySelector(".slide__button_prev");
  // const sliderBtnRight = document.querySelector(".slide__button_next");
  // const slides = document.querySelector(".slides");
  // const wrapperSlideLeft = document.querySelector("#slide-left");
  // const wrapperSlideRight = document.querySelector("#slide-right");
  // const wrapperSlideActive = document.querySelector("#slide-active");
  const windowInnerWidth = window.innerWidth;
  let numCurrentPage = 1;
  let numMaxPage = 6;
  let numSlide = 8;


  if (windowInnerWidth < 1280 && windowInnerWidth >= 768) {
    numSlide = 6;
    numMaxPage = 8;
  }
  if (windowInnerWidth < 768) {
    numSlide = 3;
    numMaxPage = 16;
  }
  let arrPetsSlideAll = [];
  let arrPetsPage8 = [];
  let arrPetsPage6 ;
  let arrPetsPage3 = [];



  function loadPage() {
    page.textContent = numCurrentPage;
    numCurrentPageIsStart();
    if (numSlide == 8) {
      arrPetsPage8 = [...arrPetsSlideAll];
    }
  }


  // create common array for all pages
  function createArrayPetsCommon() {
    for (let i = 0; i < 6; i++) {
      arrPetsSlideAll.push(createRandomPage(8));
    }
  }

  function createArrayPetsForAllPage() {
    let countSlide = 6;
    let countMaxPage = 8;
    let arrRandomInner = [];
    // let arrPetsPageTemp = arrPetsSlideAll.join().split();
    // let min = 0;
    // let max = arrPetsPageTemp.length;
    // let rndNum = 0;

    // const random = (min, max) => {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // };

    // for (let i = 0; i < countMaxPage; i++) {      
    //   let arrRandomInnerTemp = [];
    //   rndNum = random(min, max);
    //   arrRandomInnerTemp.push(arrPetsPageTemp[rndNum]);
    //   arrPetsPageTemp.splice(rndNum, 1);
    //   max--;
    //   for (let j = 0; j < countSlide - 1; j++) {
    //     rndNum = random(min, max);
    //     while (arrRandomInnerTemp.indexOf(arrPetsPageTemp[rndNum]) !== -1) {
    //       rndNum = random(min, max);
    //     }
    //     arrRandomInnerTemp.push(arrPetsPageTemp[rndNum]);
    //     arrPetsPageTemp.splice(rndNum, 1);
    //     max--;
    //   }
    //   arrRandomInner.push(arrRandomInnerTemp);
    // }
  }
  

  // random
  function createRandomPage(numPetsCard) {
    let rndNum;
    let arrRandomInner = [];
    rndNum = Math.floor(Math.random() * 8);
    arrRandomInner.push(rndNum);
    for (let i = 0; i < numPetsCard - 1; i++) {
      rndNum = Math.floor(Math.random() * 8);
      while (arrRandomInner.indexOf(rndNum) !== -1) {
        rndNum = Math.floor(Math.random() * 8);
      }
      arrRandomInner.push(rndNum);
    }
    // console.log("arrRandomInner = " + arrRandomInner);
    return arrRandomInner;
  }
  //   arrNumPetsActive = [...arrRandomInner];


  // createRandomPage(numSlide);
  createArrayPetsCommon();
  console.log(arrPetsSlideAll);
  loadPage();
  createArrayPetsForAllPage();
  createSlide(slider, numCurrentPage);

  



  function numCurrentPageIsStart() {
    buttonDoubleLess.disabled = true;
    buttonDoubleLess.classList.add("disable");
    buttonDoubleLess.removeEventListener("click", moveDoubleLess);

    buttonLess.disabled = true;
    buttonLess.classList.add("disable");
    buttonLess.removeEventListener("click", moveLess);

    buttonMore.disabled = false;
    buttonMore.classList.remove("disable");
    buttonMore.addEventListener("click", moveMore);

    buttonDoubleMore.disabled = false;
    buttonDoubleMore.classList.remove("disable");
    buttonDoubleMore.addEventListener("click", moveDoubleMore);
  }

  function numCurrentPageIsEnd() {
    buttonDoubleLess.disabled = false;
    buttonDoubleLess.classList.remove("disable");
    buttonDoubleLess.addEventListener("click", moveDoubleLess);

    buttonLess.disabled = false;
    buttonLess.classList.remove("disable");
    buttonLess.addEventListener("click", moveLess);

    buttonMore.disabled = true;
    buttonMore.classList.add("disable");
    buttonMore.removeEventListener("click", moveMore);

    buttonDoubleMore.disabled = true;
    buttonDoubleMore.classList.add("disable");
    buttonDoubleMore.removeEventListener("click", moveDoubleMore);
  }

  function numCurrentPageIsMiddle() {
    buttonDoubleLess.disabled = false;
    buttonDoubleLess.classList.remove("disable");
    buttonDoubleLess.addEventListener("click", moveDoubleLess);

    buttonLess.disabled = false;
    buttonLess.classList.remove("disable");
    buttonLess.addEventListener("click", moveLess);

    buttonMore.disabled = false;
    buttonMore.classList.remove("disable");
    buttonMore.addEventListener("click", moveMore);

    buttonDoubleMore.disabled = false;
    buttonDoubleMore.classList.remove("disable");
    buttonDoubleMore.addEventListener("click", moveDoubleMore);
  }


  function moveDoubleLess() {
    numCurrentPage = 1;
    createSlide(slider, numCurrentPage);
    numCurrentPageIsStart();
    page.textContent = numCurrentPage;
  }

  function moveLess() {
    numCurrentPage--;
    createSlide(slider, numCurrentPage);
    if (numCurrentPage != numMaxPage) {
      numCurrentPageIsMiddle();
    }
    if (numCurrentPage == 1) {
      numCurrentPageIsStart();
    }
    page.textContent = numCurrentPage;
  }

  function moveMore() {
    numCurrentPage++;
    createSlide(slider, numCurrentPage);
    if (numCurrentPage != 1) {
      numCurrentPageIsMiddle();
    }
    if (numCurrentPage == numMaxPage) {
      numCurrentPageIsEnd();
    }
    page.textContent = numCurrentPage;
  }

  function moveDoubleMore() {
    numCurrentPage = numMaxPage;
    createSlide(slider, numCurrentPage);
    numCurrentPageIsEnd();
    page.textContent = numCurrentPage;
  }

  buttonDoubleLess.addEventListener("click", moveDoubleLess);
  buttonLess.addEventListener("click", moveLess);
  buttonMore.addEventListener("click", moveMore);
  buttonDoubleMore.addEventListener("click", moveDoubleMore);






  //   let arrPetsPage6Temp = arrPetsSlideAll.join().split();



  // createSlide(wrapperSlideActive, true);
  // createSlide(wrapperSlideLeft, false);
  // document.querySelector("#slide-right").innerHTML =
  //   document.querySelector("#slide-left").innerHTML;

  // function moveLeft() {
  //   slides.classList.add("move-to-left");
  //   // disable for the duration of the animation
  //   sliderBtnLeft.removeEventListener("click", moveLeft);
  //   sliderBtnRight.removeEventListener("click", moveRight);
  // }
  // function moveRight() {
  //   slides.classList.add("move-to-right");
  //   // disable btn for the duration of the animation
  //   sliderBtnLeft.removeEventListener("click", moveLeft);
  //   sliderBtnRight.removeEventListener("click", moveRight);
  // }

  // sliderBtnLeft.addEventListener("click", moveLeft);
  // sliderBtnRight.addEventListener("click", moveRight);

  // slides.addEventListener("animationend", (ev) => {
  //   // enable listener after end animation
  //   sliderBtnLeft.addEventListener("click", moveLeft);
  //   sliderBtnRight.addEventListener("click", moveRight);

  //   if (ev.animationName === "move-left") {
  //     slides.classList.remove("move-to-left");
  //     const wrapperSlideLeftHTML = wrapperSlideLeft.innerHTML;
  //     wrapperSlideActive.innerHTML = wrapperSlideLeftHTML;

  //     createSlide(wrapperSlideLeft, false);
  //     document.querySelector("#slide-right").innerHTML =
  //       document.querySelector("#slide-left").innerHTML;
  //   }

  //   if (ev.animationName === "move-right") {
  //     slides.classList.remove("move-to-right");
  //     const wrapperSlideRightHTML = wrapperSlideRight.innerHTML;
  //     wrapperSlideActive.innerHTML = wrapperSlideRightHTML;

  //     createSlide(wrapperSlideRight, false);
  //     document.querySelector("#slide-left").innerHTML =
  //       document.querySelector("#slide-right").innerHTML;
  //   }
  // });


  function createSlide(nameSlide, numPageArg) {
    nameSlide.innerHTML = "";
    // let arrRandom = findRandom(ckeckEmptyArr);

    for (let i = 0; i < numSlide; i++) {
      let namePets = dataJSON[arrPetsPage8[numPageArg - 1][i]].name;

      const tagDivSlide1 = document.createElement("div");
      tagDivSlide1.classList.add("slide");

      const tagImgSlide1 = document.createElement("img");
      tagImgSlide1.classList.add("img__slide");
      tagImgSlide1.src = "./../../assets/images/pets/" + namePets.toLowerCase() + ".png";
      tagImgSlide1.alt = "your best friends";

      const tagDivSubtitleSlide1 = document.createElement("div");
      tagDivSubtitleSlide1.classList.add("slide__subtitle");
      tagDivSubtitleSlide1.textContent = namePets;

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

export default paginationSubscribe;
