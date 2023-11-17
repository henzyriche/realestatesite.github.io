// Initialize Swiper -->
  var swiper = new Swiper(".mySwiper", {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 