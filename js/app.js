let token = $('meta[name="csrfToken"]').attr('content');


let header = document.querySelector(".header");
let breadcrumbs = document.querySelector('.breadcrumbs');
window.addEventListener("load", function () {
  let link = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  if(header) {
    document.addEventListener("scroll", function () {
      let scroll = window.scrollY;
      if (scroll > 50 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    });
    let numberSelect = new CustomSelect({
      elem: document.querySelector('.header__options')
    });
  
    document.addEventListener('select', function(event) {
      document.querySelector('.header__result').innerHTML = event.detail.value;
      document.querySelector('.header__result').setAttribute("href", `tel:${event.detail.value}`)
    });

    //breadcrumbs
    let headerHeight = document.querySelector(".header").clientHeight;
    if(breadcrumbs) {
      breadcrumbs.style.marginTop = `${headerHeight}px`;
    }
  }
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

  $('.afos__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.afos__images',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  $('.afos__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.afos__slider',
    fade: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="103" height="210" viewBox="0 0 103 210" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.999992 208.995C12.3172 208.867 25.4893 206.182 37.7991 201.083C50.4169 195.857 61.8818 188.196 71.5391 178.539C81.1964 168.882 88.857 157.417 94.0835 144.799C99.31 132.181 102 118.657 102 105C102 91.3425 99.31 77.8188 94.0835 65.2009C88.857 52.5831 81.1964 41.1182 71.5391 31.4609C61.8818 21.8036 50.4169 14.143 37.7991 8.91652C25.4892 3.81763 12.3172 1.13285 -1.00002 1.00481L-0.999992 208.995Z" stroke="#F5F5F1" stroke-width="2"/><path d="M79 106.003C78.0383 102.379 75.9973 102.523 74.1808 102.501C65.9528 102.379 57.7249 102.335 49.497 102.28C46.2913 102.28 43.0001 102.28 39.4311 102.28C40.0936 100.214 42.017 100.07 43.2993 99.1755C44.5816 98.2807 46.2913 97.419 47.5735 96.3142C47.8161 96.0113 47.9822 95.6509 48.0568 95.2652C48.1314 94.8796 48.1122 94.4808 48.001 94.1047C47.7633 93.7656 47.4518 93.4889 47.0918 93.297C46.7317 93.1051 46.333 93.0034 45.928 93C44.9141 93.1547 43.9341 93.4911 43.0321 93.9943C37.2512 96.6678 31.481 99.3854 25.6894 102.059C24.2147 102.744 22.644 103.561 23.0714 105.439C23.4551 106.741 24.268 107.863 25.3688 108.61C26.8674 109.471 28.4508 110.163 30.0918 110.676C34.3661 112.388 38.7365 114.068 43.0428 115.791C44.9235 116.542 47.2209 118.133 48.5246 115.703C49.9992 112.885 47.2957 111.781 45.4898 110.499C44.6457 109.914 43.7588 109.394 42.0598 108.29C54.6902 106.334 66.7222 107.638 79 106.003Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="102" height="210" viewBox="0 0 102 210" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M104 208.995C90.6828 208.867 77.5107 206.182 65.2009 201.083C52.5831 195.857 41.1182 188.196 31.4609 178.539C21.8036 168.882 14.143 157.417 8.91653 144.799C3.69004 132.181 0.999999 118.657 1 105C1 91.3425 3.69004 77.8188 8.91653 65.2009C14.143 52.5831 21.8036 41.1182 31.4609 31.4609C41.1182 21.8036 52.5831 14.143 65.2009 8.91652C77.5108 3.81763 90.6828 1.13285 104 1.00481L104 208.995Z" stroke="#F5F5F1" stroke-width="2"/><path d="M30 106.003C30.9617 102.379 33.0027 102.523 34.8192 102.501C43.0472 102.379 51.2751 102.335 59.503 102.28C62.7087 102.28 65.9999 102.28 69.5689 102.28C68.9064 100.214 66.983 100.07 65.7007 99.1755C64.4184 98.2807 62.7087 97.419 61.4265 96.3142C61.1839 96.0113 61.0178 95.6509 60.9432 95.2652C60.8686 94.8796 60.8878 94.4808 60.999 94.1047C61.2367 93.7656 61.5482 93.4889 61.9082 93.297C62.2683 93.1051 62.667 93.0034 63.072 93C64.0859 93.1547 65.0659 93.4911 65.9679 93.9943C71.7488 96.6678 77.519 99.3854 83.3106 102.059C84.7853 102.744 86.356 103.561 85.9286 105.439C85.5449 106.741 84.732 107.863 83.6312 108.61C82.1326 109.471 80.5492 110.163 78.9082 110.676C74.6339 112.388 70.2635 114.068 65.9572 115.791C64.0765 116.542 61.7791 118.133 60.4754 115.703C59.0008 112.885 61.7043 111.781 63.5102 110.499C64.3543 109.914 65.2412 109.394 66.9402 108.29C54.3098 106.334 42.2778 107.638 30 106.003Z" fill="white"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
    });

  $('.services__slider').slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 981,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            focusOnSelect: true,
            swipeToSlide: true
          }
        }
      ]
  });

  $('.members__slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    infinite: true,
    dots: true,
    arrows: true,
    appendDots: $('.members__pagin'),
    appendArrows: $('.members__pagin'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 8.1268C34.3989 5.86207 33.1233 5.95183 31.988 5.93802C26.8455 5.86207 21.7031 5.83445 16.5606 5.79992C14.557 5.79992 12.5001 5.79992 10.2694 5.79992C10.6835 4.50875 11.8856 4.41899 12.6871 3.85971C13.4885 3.30043 14.557 2.76187 15.3585 2.0714C15.5101 1.88208 15.6139 1.65679 15.6605 1.41577C15.7071 1.17474 15.6951 0.925518 15.6256 0.690466C15.477 0.4785 15.2824 0.305582 15.0574 0.185649C14.8323 0.0657165 14.5832 0.00212477 14.33 -6.26383e-07C13.6963 0.0966632 13.0838 0.306961 12.5201 0.62142C8.90701 2.29235 5.30061 3.9909 1.68085 5.66183C0.759213 6.08992 -0.22253 6.60087 0.0446106 7.77466C0.284464 8.58843 0.792522 9.2896 1.48049 9.7563C2.41715 10.2942 3.40674 10.7271 4.4324 11.0475C7.10381 12.1177 9.83533 13.1672 12.5268 14.2443C13.7022 14.7139 15.1381 15.7081 15.9529 14.1891C16.8745 12.4284 15.1848 11.7379 14.0562 10.937C13.5285 10.5711 12.9742 10.2465 11.9123 9.55607C19.8064 8.33394 27.3264 9.14869 35 8.1268Z" fill="#181817"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.55234e-07 8.1268C0.601066 5.86207 1.87666 5.95183 3.01201 5.93802C8.15447 5.86207 13.2969 5.83445 18.4394 5.79992C20.443 5.79992 22.4999 5.79992 24.7306 5.79992C24.3165 4.50875 23.1144 4.41899 22.3129 3.85971C21.5115 3.30043 20.443 2.76187 19.6415 2.0714C19.4899 1.88208 19.3861 1.65679 19.3395 1.41577C19.2929 1.17474 19.3049 0.925518 19.3744 0.690466C19.523 0.4785 19.7176 0.305582 19.9426 0.185649C20.1677 0.0657165 20.4168 0.00212477 20.67 -6.26383e-07C21.3037 0.0966632 21.9162 0.306961 22.4799 0.62142C26.093 2.29235 29.6994 3.9909 33.3192 5.66183C34.2408 6.08992 35.2225 6.60087 34.9554 7.77466C34.7155 8.58843 34.2075 9.2896 33.5195 9.7563C32.5829 10.2942 31.5933 10.7271 30.5676 11.0475C27.8962 12.1177 25.1647 13.1672 22.4732 14.2443C21.2978 14.7139 19.8619 15.7081 19.0471 14.1891C18.1255 12.4284 19.8152 11.7379 20.9438 10.937C21.4715 10.5711 22.0258 10.2465 23.0877 9.55607C15.1936 8.33394 7.67362 9.14869 -3.55234e-07 8.1268Z" fill="#181817"/></svg></button>',
    responsive: [
      {
        breakpoint: 981,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

  $('.page-inner__slider').slick({
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    variableWidth: true, 
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    dots: true,
    arrows: true,
    appendDots: $('.page-inner__pagin'),
    appendArrows: $('.page-inner__pagin'),
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 8.1268C34.3989 5.86207 33.1233 5.95183 31.988 5.93802C26.8455 5.86207 21.7031 5.83445 16.5606 5.79992C14.557 5.79992 12.5001 5.79992 10.2694 5.79992C10.6835 4.50875 11.8856 4.41899 12.6871 3.85971C13.4885 3.30043 14.557 2.76187 15.3585 2.0714C15.5101 1.88208 15.6139 1.65679 15.6605 1.41577C15.7071 1.17474 15.6951 0.925518 15.6256 0.690466C15.477 0.4785 15.2824 0.305582 15.0574 0.185649C14.8323 0.0657165 14.5832 0.00212477 14.33 -6.26383e-07C13.6963 0.0966632 13.0838 0.306961 12.5201 0.62142C8.90701 2.29235 5.30061 3.9909 1.68085 5.66183C0.759213 6.08992 -0.22253 6.60087 0.0446106 7.77466C0.284464 8.58843 0.792522 9.2896 1.48049 9.7563C2.41715 10.2942 3.40674 10.7271 4.4324 11.0475C7.10381 12.1177 9.83533 13.1672 12.5268 14.2443C13.7022 14.7139 15.1381 15.7081 15.9529 14.1891C16.8745 12.4284 15.1848 11.7379 14.0562 10.937C13.5285 10.5711 12.9742 10.2465 11.9123 9.55607C19.8064 8.33394 27.3264 9.14869 35 8.1268Z" fill="#181817"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.55234e-07 8.1268C0.601066 5.86207 1.87666 5.95183 3.01201 5.93802C8.15447 5.86207 13.2969 5.83445 18.4394 5.79992C20.443 5.79992 22.4999 5.79992 24.7306 5.79992C24.3165 4.50875 23.1144 4.41899 22.3129 3.85971C21.5115 3.30043 20.443 2.76187 19.6415 2.0714C19.4899 1.88208 19.3861 1.65679 19.3395 1.41577C19.2929 1.17474 19.3049 0.925518 19.3744 0.690466C19.523 0.4785 19.7176 0.305582 19.9426 0.185649C20.1677 0.0657165 20.4168 0.00212477 20.67 -6.26383e-07C21.3037 0.0966632 21.9162 0.306961 22.4799 0.62142C26.093 2.29235 29.6994 3.9909 33.3192 5.66183C34.2408 6.08992 35.2225 6.60087 34.9554 7.77466C34.7155 8.58843 34.2075 9.2896 33.5195 9.7563C32.5829 10.2942 31.5933 10.7271 30.5676 11.0475C27.8962 12.1177 25.1647 13.1672 22.4732 14.2443C21.2978 14.7139 19.8619 15.7081 19.0471 14.1891C18.1255 12.4284 19.8152 11.7379 20.9438 10.937C21.4715 10.5711 22.0258 10.2465 23.0877 9.55607C15.1936 8.33394 7.67362 9.14869 -3.55234e-07 8.1268Z" fill="#181817"/></svg></button>',
  });

  $('.palace__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 8.1268C34.3989 5.86207 33.1233 5.95183 31.988 5.93802C26.8455 5.86207 21.7031 5.83445 16.5606 5.79992C14.557 5.79992 12.5001 5.79992 10.2694 5.79992C10.6835 4.50875 11.8856 4.41899 12.6871 3.85971C13.4885 3.30043 14.557 2.76187 15.3585 2.0714C15.5101 1.88208 15.6139 1.65679 15.6605 1.41577C15.7071 1.17474 15.6951 0.925518 15.6256 0.690466C15.477 0.4785 15.2824 0.305582 15.0574 0.185649C14.8323 0.0657165 14.5832 0.00212477 14.33 -6.26383e-07C13.6963 0.0966632 13.0838 0.306961 12.5201 0.62142C8.90701 2.29235 5.30061 3.9909 1.68085 5.66183C0.759213 6.08992 -0.22253 6.60087 0.0446106 7.77466C0.284464 8.58843 0.792522 9.2896 1.48049 9.7563C2.41715 10.2942 3.40674 10.7271 4.4324 11.0475C7.10381 12.1177 9.83533 13.1672 12.5268 14.2443C13.7022 14.7139 15.1381 15.7081 15.9529 14.1891C16.8745 12.4284 15.1848 11.7379 14.0562 10.937C13.5285 10.5711 12.9742 10.2465 11.9123 9.55607C19.8064 8.33394 27.3264 9.14869 35 8.1268Z" fill="#181817"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.55234e-07 8.1268C0.601066 5.86207 1.87666 5.95183 3.01201 5.93802C8.15447 5.86207 13.2969 5.83445 18.4394 5.79992C20.443 5.79992 22.4999 5.79992 24.7306 5.79992C24.3165 4.50875 23.1144 4.41899 22.3129 3.85971C21.5115 3.30043 20.443 2.76187 19.6415 2.0714C19.4899 1.88208 19.3861 1.65679 19.3395 1.41577C19.2929 1.17474 19.3049 0.925518 19.3744 0.690466C19.523 0.4785 19.7176 0.305582 19.9426 0.185649C20.1677 0.0657165 20.4168 0.00212477 20.67 -6.26383e-07C21.3037 0.0966632 21.9162 0.306961 22.4799 0.62142C26.093 2.29235 29.6994 3.9909 33.3192 5.66183C34.2408 6.08992 35.2225 6.60087 34.9554 7.77466C34.7155 8.58843 34.2075 9.2896 33.5195 9.7563C32.5829 10.2942 31.5933 10.7271 30.5676 11.0475C27.8962 12.1177 25.1647 13.1672 22.4732 14.2443C21.2978 14.7139 19.8619 15.7081 19.0471 14.1891C18.1255 12.4284 19.8152 11.7379 20.9438 10.937C21.4715 10.5711 22.0258 10.2465 23.0877 9.55607C15.1936 8.33394 7.67362 9.14869 -3.55234e-07 8.1268Z" fill="#181817"/></svg></button>',
});

  //accordion camp
  $(function() {
    $('.accordion__heading').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next()
        .stop()
        .slideUp(300);
      } else {
        $(this).addClass('active');
        $(this).next()
        .stop()
        .slideDown(300);
      }
    });
  });

  //administration
  let adminBtn = document.querySelectorAll('.administration__btn');
  if (adminBtn) {
    adminBtn.forEach( btn => {
      btn.addEventListener('click', function() {
        let wrap = this.closest('.administration__desc').querySelector('.administration__wrap')
        wrap.classList.toggle('open');
        btn.classList.toggle('active');
      })
    })
  }

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

  //popup
  function hidePopup(popup) {
    $(popup).click(function(e) {
      const target = e.target;
      if (
        $(target).hasClass("popup__close") ||
        $(target).hasClass("popup")
      ) {
        $(this).fadeOut(400);
      }
    });
  }
  
  function showPopup(popup) {
    $(popup).fadeIn(400);
  }

  let popupForm = document.querySelector("#popup-form");
  let popupTeacher = document.querySelector("#popup-teacher");
  let popupSchedule = document.querySelector('#popup-schedule');
  let feedback = document.querySelector('#feedback');

  if(popupTeacher || popupSchedule || popupForm ){
    hidePopup(popupTeacher)
    hidePopup(popupSchedule)
    hidePopup(popupForm)
  }

  if(feedback) {
    feedback.addEventListener('click', function() {
      showPopup(popupForm)
    });
  }

  //schedule
  let data = {
    "status": "success",
    "status_text": "\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",
    "data": [
      {
        "id": 4,
        "mug_id": 2,
        "teacher_id": 1,
        "date": "2023-07-10T14:52:56+06:00",
        "teacher": {
          "id": 1,
          "filial_id": 0,
          "title": "\u0415\u0441\u0435\u043d\u0433\u0430\u043b\u0438 \u0421\u0435\u0439\u0442\u0436\u0430\u043d \u0420\u0430\u043a\u044b\u043c\u0436\u0430\u043d\u0443\u043b\u044b",
          "img": "c65cbf08aee2a3603a6109dff6d02b97.jpg",
          "position": "\u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u043a\u0430\u0444\u0435\u0434\u0440\u044b \u00ab\u041a\u043e\u0441\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\u00bb \u0415\u041d\u0423 \u0438\u043c. \u041b.\u041d. \u0413\u0443\u043c\u0438\u043b\u0435\u0432\u0430",
          "phone": "+7 (333) 333 33 33",
          "email": "tester@mail.ru",
          "exp": "28 \u043b\u0435\u0442",
          "qual": "II \u043a\u0430\u0442.",
          "cabinet": "45",
          "created_at": "2023-07-03T14:27:32+06:00",
          "updated_at": "2023-07-03T14:27:32+06:00",
          "_locale": "kz"
        },
        "schedule": {
          "id": 5,
          "mugs_teacher_id": 4,
          "filial_id": 0,
          "teacher_id": 0,
          "filials_mug_id": 0,
          "lang_name": "I \/ RU",
          "week_json": [
            {"day_1":"16:00 - 18:00","day_2":"","day_3":"","day_4":"15:00 - 18:00","day_5":"","day_6":"","day_7":"","group":"II"},
            {"day_1":"16:00 - 18:00","day_2":"","day_3":"","day_4":"15:00 - 18:00","day_5":"","day_6":"","day_7":"","group":"II"},
          ],
          "created_at": "2023-07-10T15:03:02+06:00",
          "updated_at": "2023-07-10T15:03:02+06:00"
        }
      },
      {
        "id": 3,
        "mug_id": 2,
        "teacher_id": 3,
        "date": "2023-07-10T14:52:44+06:00",
        "teacher": {
          "id": 3,
          "filial_id": 0,
          "title": "\u0421\u0443\u043b\u0435\u0439\u043c\u0430\u043d\u043e\u0432 \u0415\u0440\u043b\u0430\u043d \u041c\u044d\u043b\u0441\u0443\u043b\u044b",
          "img": "40f5bcea6143fa5938e28be4195ee67f.jpg",
          "position": "\u0417\u0430\u043c\u0435\u0441\u0442\u0438\u0442\u0435\u043b\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0430",
          "phone": "",
          "email": "",
          "exp": null,
          "qual": null,
          "cabinet": "",
          "created_at": "2023-07-03T14:44:41+06:00",
          "updated_at": "2023-07-03T14:44:41+06:00",
          "_locale": "kz"
        },
        "schedule": {
          "id": 6,
          "mugs_teacher_id": 3,
          "filial_id": 0,
          "teacher_id": 0,
          "filials_mug_id": 0,
          "lang_name": "II \/ KZ",
          "week_json": [
            {"day_1":"16:00 - 18:00","day_2":"","day_3":"","day_4":"15:00 - 18:00","day_5":"","day_6":"","day_7":"","group":"II"},
            {"day_1":"16:00 - 18:00","day_2":"","day_3":"","day_4":"15:00 - 18:00","day_5":"","day_6":"","day_7":"","group":"II"},
          ],
          "created_at": "2023-07-10T15:03:25+06:00",
          "updated_at": "2023-07-10T15:03:25+06:00"
        }
      }
    ]
  }

  let cardSchedule = '';
  let aliasCard = '';
  let titleCard = '';
  let idCard ='';
  let sended = false;

  let cardBox = document.querySelector(".popup-schedule__cards");
  let planBtn = document.querySelectorAll('.band__plan');
  if(planBtn) {
    planBtn.forEach(btn => {
      btn.addEventListener('click', (e)=> {
        let target = e.target;
        getInfoCard(target)
        if(popupSchedule) {
          let heading = popupSchedule.querySelector('.popup-schedule__heading')
          setTitleSchedule(aliasCard, titleCard, heading)
          showPopup(popupSchedule)
        }
        if(!sended ){
          sended = true;
          $.ajax({
            method: "POST",
            url: '/mug-schedule',
            data: { mid: idCard},
            dataType: "json",
            headers:{
                'X-CSRF-Token': token,
            }
          })
          .done(function( data ) {
              console.log(data);
          })
          .fail(function( data ){
              console.log(data);
          });
        }
      })
    })
  }

  if(data && cardBox) {
    data.data.forEach( obj => {
      createSchedule(obj);
      cardBox.innerHTML+=cardSchedule
    })
  }

  function getInfoCard(target) {
    let parent = target.closest('.band__card');
    let caption = parent.querySelector('.band__caption a');
    idCard = parent.getAttribute('data-id');
    aliasCard = caption.getAttribute('href');
    titleCard = caption.textContent;
  }

  function setTitleSchedule(alias, title, heading) {
    heading.setAttribute('href', alias)
    heading.innerHTML = `<h4>${title}</h4>`
  }

  function createSchedule(data) {
    let row = ' '
    data.schedule.week_json.forEach( item => {
      row+= `<tr>
        <td>${item.group}</td>
        <td>${item.day_1}</td>
        <td>${item.day_2}</td>
        <td>${item.day_3}</td>
        <td>${item.day_4}</td>
        <td>${item.day_5}</td>
        <td>${item.day_6}</td>
        <td>${item.day_7}</td>
      </tr>`
    })
    card = `
    <div class="popup-schedule__card">
    <div class="timetable__box">
      <table class="popup-schedule__table schedule__table">
        <thead>
          <tr>
            <th>Группа / Язык</th>
            <th>Понедельник</th>
            <th>Вторник</th>
            <th>Среда</th>
            <th>Четверг</th>
            <th>Пятница</th>
            <th>Суббота</th>
            <th>Воскресенье</th>
          </tr>
        </thead>

        <tbody>
          ${row}
        </tbody>
      </table>
    </div>
    <div class="popup-schedule__bottom">
      <div class="popup-schedule__teacher">
        <div class="popup-schedule__img"><img src="${data.teacher.img}" alt=""></div>
        <div class="popup-schedule__name">
          <span>Преподаватель курса:</span>
          <h5>${data.teacher.title}</h5>
        </div>
      </div>
      <div class="popup-schedule__info">
        <div class="popup-schedule__contact">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_590_5503)">
            <path d="M18.3312 14.1V16.6C18.3322 16.8321 18.2846 17.0618 18.1917 17.2745C18.0987 17.4871 17.9623 17.678 17.7913 17.8349C17.6203 17.9918 17.4184 18.1113 17.1985 18.1856C16.9787 18.26 16.7457 18.2876 16.5146 18.2667C13.9503 17.9881 11.4871 17.1118 9.32291 15.7084C7.30943 14.4289 5.60236 12.7219 4.32291 10.7084C2.91456 8.53438 2.03811 6.0592 1.76458 3.48337C1.74375 3.25293 1.77114 3.02067 1.84499 2.80139C1.91885 2.58211 2.03755 2.38061 2.19355 2.20972C2.34954 2.03883 2.53941 1.9023 2.75107 1.80881C2.96272 1.71532 3.19153 1.66692 3.42291 1.66671H5.92291C6.32733 1.66273 6.7194 1.80594 7.02604 2.06965C7.33269 2.33336 7.53297 2.69958 7.58958 3.10004C7.6951 3.9001 7.89078 4.68565 8.17291 5.44171C8.28503 5.73998 8.30929 6.06414 8.24283 6.37577C8.17637 6.68741 8.02196 6.97347 7.79791 7.20004L6.73958 8.25837C7.92587 10.3447 9.65329 12.0721 11.7396 13.2584L12.7979 12.2C13.0245 11.976 13.3105 11.8216 13.6222 11.7551C13.9338 11.6887 14.258 11.7129 14.5562 11.825C15.3123 12.1072 16.0979 12.3029 16.8979 12.4084C17.3027 12.4655 17.6724 12.6694 17.9367 12.9813C18.201 13.2932 18.3414 13.6914 18.3312 14.1Z" stroke="#181817" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_590_5503">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
          </svg>                      
          <span>Контактный номер:</span>
          <a href="tel:${data.teacher.phone}">${data.teacher.phone}</a>
        </div>
        <div class="popup-schedule__cabinet"><span>Кабинет:</span> ${data.teacher.cabinet}</div>
      </div>
    </div>
  </div>
    `
    cardSchedule = card
  }

  //teach_view
  let teachView = document.querySelectorAll('.teach_view');
  let info = {};
  if(teachView) {
    teachView.forEach(btn => {
      btn.addEventListener('click', (e)=> {
        console.log(e)
        let target = e.target;
        getInfoTeach(target);
        if(popupTeacher) {
          let teachCard = document.querySelector('.popup-teacher__card');
          let boxCard = document.querySelector('.popup-teacher__container');
          setInfoTeach(teachCard, info);
          showPopup(popupTeacher);
          boxCard.style.top = `${e.pageY}px`;
          boxCard.style.left = `${e.pageX}px`;
        }
      })
    })
  }

  function getInfoTeach(target) {
    let parent = target.closest('.td-teach');
    let caption = parent.querySelector('.teach_caption').textContent;
    let desc = parent.querySelector('.teach_desc').textContent;
    let phone = parent.querySelector('.teach_phone').textContent;
    let alias = parent.querySelector('.teach_img img').getAttribute('src');
    info = {caption: caption,desc: desc,phone: phone,alias: alias};
  }
  function setInfoTeach(card, info) {
    card.querySelector('.popup-teacher__img img').setAttribute('src',info.alias);
    card.querySelector('.popup-teacher__caption').textContent = info.caption;
    card.querySelector('.popup-teacher__txt').textContent = info.desc;
    card.querySelector('.popup-teacher__tel').setAttribute('href',info.phone);
    card.querySelector('.popup-teacher__tel span').textContent = info.phone;
  }
});


//slider resize
let flag = true;

$(window).on('resize', function(){
  if ($(this).width() <= 600 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      variableWidth: true,
      dots: true
    });
  }
  else if ($(this).width() > 600 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
  }
  if(header) {
    let headerHeight = document.querySelector(".header").clientHeight;
    if(breadcrumbs) {
      breadcrumbs.style.marginTop = `${headerHeight}px`;
    }
  }
}).resize();

