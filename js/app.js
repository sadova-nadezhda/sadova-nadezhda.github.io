window.addEventListener("load", function () {
  // menu
  const link = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  let header = document.querySelector(".header");

  function toggleMenu() {
    link.classList.toggle("active");
    menu.classList.toggle("open");
  }

  function closeMenuScroll() {
    if (menu.classList.contains("open")) {
      link.classList.remove("active");
      menu.classList.remove("open");
    }
  }

  function closeMenuClick(e) {
    const target = e.target;
    if (
      !target.classList.contains("header__nav") &&
      !target.classList.contains("header__burger")
    ) {
      link.classList.remove("active");
      menu.classList.remove("open");
    }
  }

  if (menu) {
    link.addEventListener("click", toggleMenu, false);
    window.addEventListener("scroll", closeMenuScroll);
    document.addEventListener("click", closeMenuClick);
  }

  if (header) {
    const scroll = window.scrollY;
    header.classList.toggle("scroll", scroll > 50);
    document.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      header.classList.toggle("scroll", scroll > 50);
    });
  }

  let swiper = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: ".projects-prev",
      nextEl: ".projects-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  //AOS animate
  AOS.init({
    duration: 1200,
  });

  // popup
  function hidePopup(popup) {
    $(popup).click(function (e) {
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


  let popupForm = document.querySelector(".popup__feedback");
  let popupCall = document.querySelector(".popup__btn");
  let popupClose = document.querySelectorAll('.popup__close');
  if (popupForm) {
    hidePopup(popupForm)
  }
  if (popupCall) {
    popupCall.addEventListener('click', function () {
      showPopup(popupForm)
    });
    popupClose.forEach(btn => {
      btn.addEventListener('click', function () {
        hidePopup(popupForm)
      })
    });
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

});
