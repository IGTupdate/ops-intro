/*-------- Sticky Header -------*/
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 80
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

/*-------- Menubar -------*/
const menubar = document.querySelector("#menubar");
const menuBtn = document.querySelector(".menu_btn");
const menuCloseBtn = document.querySelector(".menu_close_btn");

menuBtn.addEventListener("click", () => {
  document.documentElement.classList.add("overflow_hide");
  menubar.classList.add("show");
});

menuCloseBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("overflow_hide");
  menubar.classList.remove("show");
});

/*-------- Brands Swiper -------*/
// const brandsSwiper = new Swiper(".brands-swiper", {
//   loop: true,
//   autoplay: true,
//   slidesPerView: 3,
//   spaceBetween: 50,
//   grabCursor: true,

//   // Responsive breakpoints
//   breakpoints: {
//     576: {
//       slidesPerView: 4,
//     },
//     1000: {
//       slidesPerView: 6,
//     },
//   },
// });
