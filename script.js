const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  spaceBetween: 10,
  mousewheel: {
    forceToAxis: true
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1699: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  speed: 700,
  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active"
});