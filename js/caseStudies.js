/*-------- Case-studies Modal -------*/
const docElem = document.documentElement;
const modal = document.querySelector("#modals");

function showPopUp(n) {
  docElem.classList.add("overflow_hide");
  modal.classList.add("show");

  // assigning the index number of slider to start slider from that slide
  let slide_index = n;
  caseSwiper.slideTo(slide_index + 1, 2, false);
}

function hidePopUp() {
  docElem.classList.remove("overflow_hide");
  modal.classList.remove("show");
}

/*-------- Case-studies Swiper -------*/
const caseSwiper = new Swiper(".caseSwiper", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
