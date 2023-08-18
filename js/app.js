let header = document.querySelector(".header");

window.addEventListener("load", function () {

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

  const headerBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');

  if (headerNav) {
    document.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      headerNav.classList.toggle("scroll", scroll > 50);
    });
  }

  if (headerBurger) {
    document.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', closeMenuOnScroll);
    document.addEventListener('click', closeMenuOnClickOutside);
  }

  function handleMenuClick(event) {
    const { target } = event;
    if (target === headerBurger || target.classList.contains('header__item')) {
      headerBurger.classList.toggle('active');
      headerNav.classList.toggle('open');
    }
  }

  function closeMenuOnScroll() {
    if (headerNav.classList.contains('open')) {
      headerBurger.classList.remove('active');
      headerNav.classList.remove('open');
    }
  }

  function closeMenuOnClickOutside(event) {
    const { target } = event;
    if (!headerNav.contains(target) && !headerBurger.contains(target) && !target.classList.contains('header__item')) {
      headerBurger.classList.remove('active');
      headerNav.classList.remove('open');
    }
  }


  const menuContainer = document.querySelector('.header__menu');
  if (menuContainer) {
    const menuItems = document.querySelectorAll('.header__elem');

    function closeAllMenus() {
      menuItems.forEach(function(item) {
        item.parentNode.classList.remove('open');
        item.classList.remove('active');
      });
    }

    menuContainer.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('header__elem')) {
        e.preventDefault();
        target.classList.toggle('active');
        target.parentNode.classList.toggle('open');

        menuItems.forEach(function(item) {
          if (item !== target) {
            item.parentNode.classList.remove('open');
            item.classList.remove('active');
          }
        });
      } else if (!target.classList.contains('sub__menu') && !target.classList.contains('nav__menu')) {
        closeAllMenus();
      }
    });

    window.addEventListener('scroll', function() {
      closeAllMenus();
    });

    // document.addEventListener('click', function(event) {
    //   const { target } = event;
    //   if (!target.classList.contains('header__item')) {
    //     closeAllMenus();
    //   }
    // });
  }

  // show/hide password
  let password = document.querySelectorAll('.pass__icons');
  password.forEach( pass => {
    let eyeCLs = pass.querySelector('.icon ');
    let eyeOpn = pass.querySelector('.icon-view');
    let inpPass = pass.closest('.cabinet__input').querySelector('input');
    if(pass){
      pass.addEventListener('click', () =>{
        inpPass.classList.toggle('view');
        if(inpPass.classList.contains('view')){
          inpPass.type = 'text';
          eyeOpn.style.display = 'block';
          eyeCLs.style.display = 'none';
        } else {
          inpPass.type = 'password';
          eyeOpn.style.display = 'none';
          eyeCLs.style.display = 'block';
        }
      });
    }
  });

  const drowdownArrow = document.querySelector('.dropdown .arrow');
  const checkbox = document.getElementById('openDropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if(checkbox) {
    checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      drowdownArrow.classList.toggle('rotate-dropdown-arrow');
    });

    dropdownMenu.addEventListener('click', (e) => {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
    });

  }


  var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    // centeredSlides: true,
    // loop: true,
    // loopedSlides: 7,
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
  });

  var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 7,
    spaceBetween: 8,
    // centeredSlides: true,
    // loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;

  // var testSlider = new Swiper('.test__slider', {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".test-button-next",
  //     prevEl: ".test-button-prev",
  //   },
  //   thumbs: {
  //     swiper: testThumbs,
  //   },
  // });
  // var testThumbs = new Swiper('.test__slider_thumbs', {
  //   spaceBetween: 10,
  //   // slideToClickedSlide: true,
  //   slidesPerView: 20,
  //   navigation: {
  //     nextEl: ".test-button-next",
  //     prevEl: ".test-button-prev",
  //   },
  // });



  // Form

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 20,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

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
});
