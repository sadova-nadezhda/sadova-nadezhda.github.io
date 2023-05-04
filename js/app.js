
window.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector('.header');
  let scroll = window.scrollY;
  if (scroll > 100 ) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  if (menu) {
    link.addEventListener("click", function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");
      },false);
  }
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (menu.classList.contains("open")) {
      link.classList.remove("active");
      menu.classList.remove("open");
    }
    if(header) {
      if (scroll > 100 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }
    let count = document.querySelector('.count');
    if(count) {
      $('.about__num').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).data("num")
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).find('span').text(Math.ceil(now));
          }
        });
      });
    }
    
  });
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (
      !target.classList.contains("header__nav") &&
      !target.classList.contains("header__burger")
    ) {
      link.classList.remove("active");
      menu.classList.remove("open");
    }
  });
  $('.academy__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    dots: true,
    arrows: true,
    appendDots: $('.academy__arrows'),
    appendArrows: $('.academy__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
  });
  $('.services__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    appendArrows: $('.services__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
    responsive: [{
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 541,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    appendArrows: $('.reviews__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
    responsive: [{
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 541,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.news__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    appendArrows: $('.news__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 541,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.trust__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    appendArrows: $('.trust__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    // {
    //   breakpoint: 541,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    ]
  });
  $('.gallery__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    appendArrows: $('.gallery__arrows'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.81793 19.051L11.2319 17.637L3.59594 10L11.2319 2.36297L9.81793 0.948975L0.767943 10L9.81793 19.051Z" fill="#092C4D"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18207 19.051L0.768066 17.637L8.40406 10L0.768066 2.36297L2.18207 0.948975L11.2321 10L2.18207 19.051Z" fill="#092C4D"/></svg></button>',
    responsive: [{
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 541,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});

// function RemoveFancy() {
//   let activeSlides = document.querySelectorAll('.reviews__img');
//   activeSlides.forEach(elem => {
//     if(elem.closest('.reviews__item').classList.contains('slick-cloned')){
//       elem.setAttribute('data-fancybox', '');
//     }else{
//       elem.setAttribute('data-fancybox', 'reviews');
//     }
//   });
// }

// $('.reviews__slider').on('afterChange', RemoveFancy);

// window.addEventListener('load', () => {
//   RemoveFancy();
// });