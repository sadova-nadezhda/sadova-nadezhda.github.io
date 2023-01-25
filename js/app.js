
window.addEventListener('load', function() {
  let link = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  if(menu){
    link.addEventListener('click', function () {
      link.classList.toggle('active');
      menu.classList.toggle('open');
    }, false);
    window.addEventListener('scroll', () => {
      if (menu.classList.contains('open')) {
        link.classList.remove('active');
          menu.classList.remove('open');
      }
    })
    document.addEventListener('click', e => {
      let target = e.target;
      if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__burger')) && !(target.classList.contains('header__item'))) {
          link.classList.remove('active');
          menu.classList.remove('open');
      }
    })
  }

  /*menu*/
  const menuItm = document.querySelectorAll('.header__item');
  if (menuItm){
    menuItm.forEach(function(item, index) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        this.parentNode.classList.toggle('open');
        menuItm.forEach(function(item2, index2) {
          if ( index !== index2 ) {
            item2.parentNode.classList.remove('open');
            item2.classList.remove('active');
          }
          document.addEventListener('click', e => {
            let target = e.target;
            if (!(target.classList.contains('header__item')) && !(target.classList.contains('sub__menu')) && !(target.classList.contains('nav__menu'))) {
              item2.parentNode.classList.remove('open');
              item2.classList.remove('active');
            }
          });
          window.addEventListener('scroll', () => {
            if(item2.parentNode.classList.contains('open')){
              item2.parentNode.classList.remove('open');
              item2.classList.remove('active');
            }
          });
        });
      });
    });
  }

  //sliders
  $('.benefits__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
		appendArrows: $(".benefits__arrows"),
		prevArrow: '<div class="slick__arrow slick_prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8591 5.00659L3.72125 5.00659L7.30675 1.72486C8.33679 0.782077 6.78994 -0.631859 5.76194 0.310921L2.49664 3.30239L0.31705 5.3006C0.113972 5.48735 -3.56924e-05 5.74011 -3.57154e-05 6.00359C-3.57384e-05 6.26708 0.113972 6.51984 0.317049 6.70659L5.76194 11.6981C5.86444 11.7947 5.98723 11.8712 6.12293 11.9231C6.25862 11.975 6.40439 12.0012 6.55145 12.0001C7.53196 12.0001 8.01558 10.9068 7.30675 10.2842L3.71308 7.00246L22.9147 7.00247C24.4248 6.93422 24.3119 4.93742 22.858 5.00613L22.8591 5.00659Z" fill="#F6F5EC"/></svg></div>',
		nextArrow: '<div class="slick__arrow slick_next"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.13851 5.00659L21.2763 5.00659L17.6908 1.72486C16.6608 0.782077 18.2076 -0.631859 19.2356 0.310921L22.5009 3.30239L24.6805 5.3006C24.8836 5.48735 24.9976 5.74011 24.9976 6.00359C24.9976 6.26708 24.8836 6.51984 24.6805 6.70659L19.2356 11.6981C19.1331 11.7947 19.0103 11.8712 18.8746 11.9231C18.7389 11.975 18.5932 12.0012 18.4461 12.0001C17.4656 12.0001 16.982 10.9068 17.6908 10.2842L21.2845 7.00246L2.08284 7.00247C0.572757 6.93422 0.685618 4.93742 2.13953 5.00613L2.13851 5.00659Z" fill="#F6F5EC"/></svg></div>',
		dots: true,
		appendDots: $('.benefits__dots'),
		dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.teachers__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
		appendArrows: $(".teachers__arrows"),
		prevArrow: '<div class="sick__arrow slick_prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8591 5.00659L3.72125 5.00659L7.30675 1.72486C8.33679 0.782077 6.78994 -0.631859 5.76194 0.310921L2.49664 3.30239L0.31705 5.3006C0.113972 5.48735 -3.56924e-05 5.74011 -3.57154e-05 6.00359C-3.57384e-05 6.26708 0.113972 6.51984 0.317049 6.70659L5.76194 11.6981C5.86444 11.7947 5.98723 11.8712 6.12293 11.9231C6.25862 11.975 6.40439 12.0012 6.55145 12.0001C7.53196 12.0001 8.01558 10.9068 7.30675 10.2842L3.71308 7.00246L22.9147 7.00247C24.4248 6.93422 24.3119 4.93742 22.858 5.00613L22.8591 5.00659Z" fill="#3FBA73"/></svg></div>',
		nextArrow: '<div class="slick__arrow slick_next"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.13851 5.00659L21.2763 5.00659L17.6908 1.72486C16.6608 0.782077 18.2076 -0.631859 19.2356 0.310921L22.5009 3.30239L24.6805 5.3006C24.8836 5.48735 24.9976 5.74011 24.9976 6.00359C24.9976 6.26708 24.8836 6.51984 24.6805 6.70659L19.2356 11.6981C19.1331 11.7947 19.0103 11.8712 18.8746 11.9231C18.7389 11.975 18.5932 12.0012 18.4461 12.0001C17.4656 12.0001 16.982 10.9068 17.6908 10.2842L21.2845 7.00246L2.08284 7.00247C0.572757 6.93422 0.685618 4.93742 2.13953 5.00613L2.13851 5.00659Z" fill="#3FBA73"/></svg></div>',
		dots: true,
		appendDots: $('.teachers__dots'),
		dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  var swiper = new Swiper(".tab__slider", {
    spaceBetween: 30,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      1440: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      980: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    }
  });
  var swiper2 = new Swiper(".mugs__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "cards",
    grabCursor: true,
    thumbs: {
      swiper: swiper,
    },
  });

  $(function () {
    $(".accordion h6:first").addClass("active");
    $(".accordion div:not(:first)").hide();
  
    $(".accordion h6").click(function () {
      $(this).next("div").slideToggle("slow")
        .siblings("div:visible").slideUp("slow");
      $(this).toggleClass("active");
      $(this).siblings("h6").removeClass("active");
    });
  });

  $(function() {
    $('.tabs__caption').on('click', ':not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      $('div.tabs').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  /*mobile Slider*/
  let flag = true;

  $(window).on('resize', function(){
    if ($(this).width() < 601 && flag) {
      flag = false;
      $('.js-slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipe: false,
        dots: true
      });
    }
    else if ($(this).width() > 600 && !flag) {
      flag = true;
      $('.js-slick-slider').slick('unslick');
    }
  }).resize();
});

// Form
function submitForm() {
  $("#form_loader").show();
}
// input mask tel
$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};
$('input[type="tel"]')
  .click(function () {
    $(this).setCursorPosition(3);
  })
  .mask("+7 (999) 999 99 99");


// alert
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close");
for (let item of alertClose) {
  item.addEventListener("click", function (event) {
    alertt.classList.remove("alert--active");
    alertt.classList.remove("alert--warning");
    alertt.classList.remove("alert--error");
  });
}

$(document).ready(function() {
  // function formatState (state) {
  //   console.log(state)
  //   if (!state.id) { return state.text; }
  //   var $state = $(
  //     '<span><img src="../img/lang.svg" class="img-flag" /> ' + state.text + '</span>'
  //   );
  //   return $state;
  // };
  
  // $(".header__lang").select2({
  //   templateResult: formatState,
  //   minimumResultsForSearch: Infinity
  // });
  $(".custom-select").select2({
    minimumResultsForSearch: Infinity
  });
});

