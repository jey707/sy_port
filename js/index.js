const swiper = new Swiper(".swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".post-wrapper").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: `<span class="prev-box arrow-box">
  <i class="fa-solid fa-arrow-left"></i>
</span>`, // 이전 화살표 모양 설정
  nextArrow: `<span class="next-box arrow-box">
        <i class="fa-solid fa-arrow-right"></i>
      </span>`, // 다음 화살표 모양 설정
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        prevArrow: "",
        nextArrow: "",
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  nextArrow: $(".next-box"),
  prevArrow: $(".prev-box"),
});
