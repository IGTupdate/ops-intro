const whyopsSwiper = new Swiper(".whyops_swiper", {
  slidesPerView: 1,
  slideToClickedSlide: true,
  touchMoveStopPropagation: false,
  simulateTouch: false,
  allowSwipeToNext: true,
  allowSwipeToPrev: true,
  allowPageScroll: "auto ",
  navigation: {
    nextEl: ".whyops_swiper .swiper-button-next",
    prevEl: ".whyops_swiper .swiper-button-prev",
  },
});

const whyopsInnerSwiper = new Swiper(".whyops_inner_swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// menubar
const menuBtn = document.querySelector(".menu_btn");
const menubar = document.querySelector("#menubar");

menuBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("overflow_hide");
  menuBtn.classList.toggle("clicked");
  menubar.classList.toggle("show");
});

// AOS
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  mirror: true, // whether elements should animate out while scrolling past them
});

const servicesSwiper = new Swiper(".services-swiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const brandsSwiper = new Swiper(".brands-swiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 6,
    },
  },
});

const testiSwiper1 = new Swiper(".testi-swiper-img", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: { crossFade: true },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const testiSwiper2 = new Swiper(".testi-swiper-txt", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  grabCursor: true,
});

testiSwiper1.controller.control = testiSwiper2;
testiSwiper2.controller.control = testiSwiper1;

// sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 80
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

// Typed
var typed = new Typed("#typedElement", {
  strings: [
    "CLOSING MORE DEALS",
    "15-20+ Leads",
    "20-100+ Meetings",
    "Valuable Connections",
  ],
  typeSpeed: 60,
  loop: true,
});
