let header = document.querySelector(".header");

document.addEventListener("scroll", function () {
  if(header) {
    let scroll = window.scrollY;
    if (scroll > 50 ) {
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

window.addEventListener("load", function () {
  let scroll = window.scrollY;
  if (scroll > 50 ) {
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
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
    document.addEventListener("click", (e) => {
      let target = e.target;
      if ( !target.classList.contains("header__nav") && !target.classList.contains("header__burger") ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }
  let aboutSwiper = new Swiper(".aboutSwiper", {
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let projectSwiper  = new Swiper('.projectsSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    watchSlidesVisibility: true,
    parallax: false,
    loop: true,
    speed: 900,
    height: 'auto',
    slideToClickedSlide: true,
    paginationClickable: true,
    effect: 'slide',
    breakpoints: {
      600: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*marquee*/
  $('.marquee').marquee({
    direction: 'left',
    speed: 100,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
      startVisible: true,
    gap: 100,
  })
  //анимированные цифры
  $('.about__cards').waypoint({
    handler: function() {
      $(this.element).addClass('count')
    },
    offset: '80%',
  });
  // $('.way').waypoint({
  //   handler: function() {
  //       $(this.element).addClass("way--active");
  //   },
  //   offset: '88%'
  // })
});

$(function() {
  $('ul.tab__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tab').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

new WOW().init();
