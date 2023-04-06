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
    spaceBetween: 10,
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
    // parallax: false,
    loop: true,
    speed: 900,
    height: 'auto',
    // slideToClickedSlide: true,
    paginationClickable: true,
    effect: 'slide',
    breakpoints: {
      600: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });
  let characteristicSwiper  = new Swiper('.characteristicSwiper', {
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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    parallax: false,
    loop: true,
    speed: 900,
    effect: 'slide',
    breakpoints: {
      600: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    }
  });
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    // freeMode: true,
    watchSlidesProgress: true,
    effect: 'slide',
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


  $(function() {
    $('ul.tab__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tab').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });


  const zoom = document.querySelector('.zoom');
  const zoomImg = document.querySelector('.zoom__img');
  const zoomDesc = document.querySelector('.zoom__desc');
  let scrollPos = 0;
  let isZoomImgStretched = false;
  let initialZoomImgWidth, initialZoomImgHeight;

  const moveZoomImgDown = (numPixels, maxShift) => {
    const coord = zoom.getBoundingClientRect();
    const maxShiftDown = coord.height/2;
    if (zoomImg.offsetTop >= maxShiftDown) {
      return;
    }
    const shift = Math.min(numPixels, maxShiftDown, maxShift);
    zoomImg.style.top = `${zoomImg.offsetTop + shift}px`;
  };

  const moveZoomImgToInitial = () => {
    zoomImg.style = '';
    zoomImg.style.width = `${initialZoomImgWidth}px`;
    zoomImg.style.height = `${initialZoomImgHeight}px`;
  };

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const coord = zoom.getBoundingClientRect();
    const coordImg = zoomImg.getBoundingClientRect();
    if (st > scrollPos) {
      if (coord.top < 0 && (!isZoomImgStretched || zoomImg.offsetWidth < window.innerWidth) && coordImg.height < window.innerHeight) {
        zoom.style.height = `${window.innerHeight + 400}px`
        zoomImg.style.width = `${zoomImg.offsetWidth + (window.scrollY / 3)}px`;
        if (coordImg.left < coord.width / 3) {
          zoomImg.style.right = 0;
        }
        moveZoomImgDown(100, window.innerHeight);
        isZoomImgStretched = true;
      } else if (coord.top < coord.height) {
        moveZoomImgToInitial();
        isZoomImgStretched = false;
      } 
    } else {
      zoomImg.style = '';
      zoom.style.height = 'auto';
      isZoomImgStretched = false;
    }

    scrollPos = st;
  };

  if(zoom) {
    window.addEventListener('scroll', handleScroll);
  }

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  new WOW().init();

  $('.anim__card').waypoint({
    handler: function() {
      $(this.element).addClass('amin_svg ');
      const paths = document.querySelectorAll('.amin_svg path');
      anime({
        targets: paths,
        duration: 2000,
        delay: 200,
        easing: 'easeInOutExpo',
        strokeDashoffset: [anime.setDashoffset, 0]
      });
    },
    offset: '80%',
  });

});

$(document).ready(function() {
  var currentAttrValue = $('.accordion__title').attr('href');
  function close_accordion_section() {
      $('.accordion__title').removeClass('active');
      $('.accordion__content').slideUp(300).removeClass('open');
  }
  if($('.accordion__content').hasClass('open')) {
    $('.accordion ' + currentAttrValue).slideDown(300);
  }
  $('.accordion__title').click(function(e) {
      var currentAttrValue = $(this).attr('href');
      if($(e.target).is('.active')) {
          close_accordion_section();
      }else {
          close_accordion_section();
          $(this).addClass('active');
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
      }
      e.preventDefault();
  });
});


let flag = true;
const grids = document.querySelectorAll('.card__grid');

$(window).on('resize', function(){
  if ($(this).width() > 980 && flag) {
    flag = false;
    if(grids) {
      grids.forEach(grid => {
        const cards = grid.querySelectorAll('.complexes__card');
        cards[0].addEventListener('mouseover', function() {
          grid.style.gridTemplateColumns = '6fr 2fr';
        });
        cards[0].addEventListener('mouseout', function() {
          grid.style.gridTemplateColumns = '4fr 4fr';
        });
        cards[1].addEventListener('mouseover', function() {
          grid.style.gridTemplateColumns = '2fr 6fr';
        });
        cards[1].addEventListener('mouseout', function() {
          grid.style.gridTemplateColumns = '4fr 4fr';
        });
      })
    }
  }
}).resize();

