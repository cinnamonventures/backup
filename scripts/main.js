 new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  parallax: true,
  effect: 'fade',
  speed: 500,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
 
  sliderPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
   scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  

  
});