/*-------- AOS -------*/
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  mirror: true, // whether elements should animate out while scrolling past them
});

/*-------- Hero Typing-Text -------*/
var typed = new Typed("#typedElement", {
  strings: [
    "ACCELERATE YOUR SALES PROCESS",
    "GAIN VALUABLE CONTACTS",
    "TURN CONTENT INTO CLIENTS",
    "HIRE THE BEST INDUSTRY TALENT",
    "UNLOCK NEW OPPORTUNITIES",
    "DISCOVER INCREDIBLE BRANDS",
  ],
  typeSpeed: 60,
  loop: true,
});

/*-------- Hero Find-more Btn -------*/
const findMoreBtn = document.querySelector(".find_more");
const heroPara = $(".hero_para");
const heroSubHead = $(".hero_subHead");

findMoreBtn.addEventListener("click", () => {
  heroPara.slideToggle("fast", "linear");
  heroSubHead.slideToggle("fast", "linear");
});

/*-------- Services section's Swiper -------*/
const servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 20,
  centeredSlides: true,
  speed: 4000,
  autoplay: true,
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: false,
});

/*-------- Feature section's Autoplay-Accordion -------*/
const accordionButtons = document.querySelectorAll(
  "#features .accordion-button"
);
const featuresTxt = document.querySelector(".features_txt");

// Function to toggle the accordion panels
const toggleAccordion = () => {
  // Find the index of the currently active panel
  const activeIndex = Array.from(accordionButtons).findIndex(function (button) {
    return button.getAttribute("aria-expanded") === "true";
  });

  // Calculate the index of the next panel
  const nextIndex = (activeIndex + 1) % accordionButtons.length;

  // Simulate a click event on the next accordion button
  accordionButtons[nextIndex].click();
};

// featuresSwiper (calling the toggleAccordion function when slides changes)
const featuresSwiper = new Swiper(".features-swiper", {
  simulateTouch: false,
  autoplay: {
    delay: 3000,
  },
  on: {
    slideChange: () => toggleAccordion(),
  },
});

featuresTxt.addEventListener("mouseover", () => {
  featuresSwiper.autoplay.stop();
});

featuresTxt.addEventListener("mouseout", () => {
  featuresSwiper.autoplay.start();
});

featuresTxt.addEventListener("touchend", () => {
  featuresSwiper.autoplay.start();
});

/*-------- Testimonials Swiper -------*/
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
