$(".slider-testimonials_component").each(function (index) {
  let loopMode = $(this).attr("loop-mode") !==
    "false"; // Default to true if not explicitly set to false
  let sliderDuration = $(this).attr("slider-duration") ? parseInt($(this).attr(
    "slider-duration"), 10) : 1000;

  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoplay: { delay: 8000, disableOnInteraction: false },
    autoHeight: true,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
    threshold: 20,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    resizeObserver: true
  });
});
