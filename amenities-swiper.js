var swiper = new Swiper(".myswiper", {
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  speed: 1000,
  grabCursor: true,
  autoplay: { enabled: true, delay: 5000 },
  watchSlidesProgress: false,
});
var swiper2 = new Swiper(".myswiper2", {
  loop: true,
  direction: 'horizontal',
  speed: 1000,
  grabCursor: true,
  autoplay: { enabled: true, delay: 5000 },
  watchSlidesProgress: false,
  slidesPerView: '1',
  spaceBetween: "2%",
  thumbs: {
    swiper: swiper,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".next-right-3",
    prevEl: ".prev-left-3",
  },
  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active"
});
