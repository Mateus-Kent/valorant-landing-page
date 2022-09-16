new Swiper('.mapsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true
})

new Swiper('.agentsSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 45,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true
})
