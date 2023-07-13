window.addEventListener("load", function () {
  let header = document.querySelector(".header");
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");

  let preloader = document.querySelector("#preloader");
  if(preloader) {
    document.querySelector("body").style.overflow = "hidden";
    let preloaderAnim = preloader.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 300,
      fill: "forwards",
      easing: "ease-in",
    });
    preloaderAnim.addEventListener("finish", () => {
      preloader.style.display = "none";
      document.querySelector("body").style.overflow = "unset";
    });
  }
  if(header) {
    document.addEventListener("scroll", function () {
      let scroll = window.scrollY;
      if (scroll > 50 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    });
  }
  if (menu) {
    link.addEventListener(
      "click",
      function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");
      },
      false
    );
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
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
  }

  let swiperWrap = document.querySelectorAll('.wrapper__swiper');
  if(swiperWrap) {
    swiperWrap.forEach( slider => {
      console.log(slider)
      var swiper = new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
          el: slider.nextElementSibling,
          draggable: true
        },
      });
    })
  }

  var swiper2 = new Swiper(".wrapper__swiper_sm", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".booklet .swiper-button-next",
      prevEl: ".booklet .swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".wrapper__swiper_lg", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".interior-dark .swiper-button-next",
      prevEl: ".interior-dark .swiper-button-prev",
    },
    breakpoints: {
      640: {
        spaceBetween: 20,
      },
      981: {
        spaceBetween: 30,
      }
    },
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
  
  /* ---popups--- */
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


  //popup
  let popupFeedback = document.querySelector("#popup-feedback");
  let popupForm = document.querySelector("#popup-form");
  let feedback = document.querySelector(".feedback");
  let formBtn = document.querySelector(".popup-feedback_form");
  if(popupFeedback || popupForm){
    hidePopup(popupFeedback)
    hidePopup(popupForm)
  }
  if(feedback) {
    feedback.addEventListener('click', function() {
      showPopup(popupFeedback)
    });
  }
  if(formBtn) {
    formBtn.addEventListener('click', function() {
      $(popupFeedback).fadeOut(400);
      showPopup(popupForm)
    });
  }


});
