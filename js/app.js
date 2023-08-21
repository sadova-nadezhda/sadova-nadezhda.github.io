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

  // const headerBurger = document.querySelector('.header__burger');
  // const headerNav = document.querySelector('.header__nav');

  // if (headerNav) {
  //   document.addEventListener("scroll", function () {
  //     const scroll = window.scrollY;
  //     headerNav.classList.toggle("scroll", scroll > 50);
  //   });
  // }

  // if (headerBurger) {
  //   document.addEventListener('click', handleMenuClick);
  //   window.addEventListener('scroll', closeMenuOnScroll);
  //   document.addEventListener('click', closeMenuOnClickOutside);
  // }

  // function handleMenuClick(event) {
  //   const { target } = event;
  //   if (target === headerBurger || target.classList.contains('header__item')) {
  //     headerBurger.classList.toggle('active');
  //     headerNav.classList.toggle('open');
  //   }
  // }

  // function closeMenuOnScroll() {
  //   if (headerNav.classList.contains('open')) {
  //     headerBurger.classList.remove('active');
  //     headerNav.classList.remove('open');
  //   }
  // }

  // function closeMenuOnClickOutside(event) {
  //   const { target } = event;
  //   if (!headerNav.contains(target) && !headerBurger.contains(target) && !target.classList.contains('header__item')) {
  //     headerBurger.classList.remove('active');
  //     headerNav.classList.remove('open');
  //   }
  // }


  // const menuContainer = document.querySelector('.header__menu');
  // if (menuContainer) {
  //   const menuItems = document.querySelectorAll('.header__elem');

  //   function closeAllMenus() {
  //     menuItems.forEach(function(item) {
  //       item.parentNode.classList.remove('open');
  //       item.classList.remove('active');
  //     });
  //   }

  //   menuContainer.addEventListener('click', function(e) {
  //     const target = e.target;
  //     if (target.classList.contains('header__elem')) {
  //       e.preventDefault();
  //       target.classList.toggle('active');
  //       target.parentNode.classList.toggle('open');

  //       menuItems.forEach(function(item) {
  //         if (item !== target) {
  //           item.parentNode.classList.remove('open');
  //           item.classList.remove('active');
  //         }
  //       });
  //     } else if (!target.classList.contains('sub__menu') && !target.classList.contains('nav__menu')) {
  //       closeAllMenus();
  //     }
  //   });

  //   window.addEventListener('scroll', function() {
  //     closeAllMenus();
  //   });

  //   // document.addEventListener('click', function(event) {
  //   //   const { target } = event;
  //   //   if (!target.classList.contains('header__item')) {
  //   //     closeAllMenus();
  //   //   }
  //   // });
  // }

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

  var swiper = new Swiper(".gallery-thumbs", {
    spaceBetween: 8,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".gallery-slider", {
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var testThumbs = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    scrollbar: {
      el: ".test-swiper-scrollbar",
      draggable: true,
      // dragSize: 50,
    },
  });
  var testSlider = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".test-button-next",
      prevEl: ".test-button-prev",
    },
    thumbs: {
      swiper: testThumbs,
    },
    simulateTouch: false,
  });


  // код счетчика слайдов
  const testBox = document.querySelector('.mySwiper2');
  if (testBox) {
    const mySliderAllSlides = document.querySelector('.test__total');
    const mySliderCurrentSlide = document.querySelector('.test__noted');
    const quantity = document.querySelector('.quantity');
    const checkSlide = testBox.querySelectorAll('input:checked');
    const inputsTest = testBox.querySelectorAll('input');
    const mySliderSlides = testSlider.slides;
  
    mySliderAllSlides.textContent = mySliderSlides.length;
    mySliderCurrentSlide.textContent = checkSlide.length;
  
    const updateSlideInfo = () => {
      document.querySelector('.mySwiper .swiper-slide-thumb-active').classList.add('check-slide');
      const newCheckSlide = testBox.querySelectorAll('input:checked');
      mySliderCurrentSlide.textContent = newCheckSlide.length;
      if (quantity) {
        quantity.textContent = mySliderSlides.length - newCheckSlide.length;
      }
    };
  
    inputsTest.forEach(input => {
      input.addEventListener('change', updateSlideInfo);
    });
  
    const toggleTestButtons = () => {
      const endButton = $('.test__end');
      const nextButton = $('.test-button-next');
      
      if (testSlider.activeIndex === mySliderSlides.length - 1) {
        endButton.fadeIn(400);
        nextButton.fadeOut(0);
      } else {
        endButton.fadeOut(0);
        nextButton.fadeIn(400);
      }
    };
  
    testSlider.on('slideChange', toggleTestButtons);
  }

  // timer
  let time = document.querySelector('.time');
  if(time) {
    let timeMinut = time.dataset.time;
  }

  const $hours = document.querySelector('.hours');
  const $minutes = document.querySelector('.minutes');
  const $seconds = document.querySelector('.seconds');

  function countdownTimer() {
    let deadlineTime = new Date( new Date().getTime() + (timeMinut * 60 * 1000) ); //установить таймер на минуты
    let Timer = setInterval(function() {
      let nowDate = new Date().getTime();
      var residue = deadlineTime - nowDate;
      let hours   = Math.floor( (residue % (1000 * 60 ** 3)) / (1000 * 60 ** 2));
      let minutes = Math.floor( (residue % (1000 * 60 ** 2)) / (1000 * 60));
      let seconds = Math.floor( (residue % (1000 * 60)) / 1000);
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      if (residue < 0) {
        clearInterval(Timer);
        alert("Время истекло!");
       }
    }, 1000);
  }

  // popups
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

  let popupTest = document.querySelector("#popup-test");
  let popupAttention = document.querySelector("#popup-attention");
  let testStart = document.querySelector('.popup-test__form');
  let closePopupBtn = document.querySelectorAll('.popup__close');
  let formTest = document.forms.formTest;
  let testFinish = document.querySelector('.form-test__button');
  let testBtn = document.querySelector('.test__end');
  if(testStart) {
    testStart.addEventListener('submit', function() {
      showPopup(popupTest);
      countdownTimer();
    })
  }
  if (popupAttention) {
    closePopupBtn.forEach(btn => {
      btn.addEventListener('click', function() {
        hidePopup(popupAttention)
      })
    });
  }
  if (formTest && testFinish) {
    testFinish.addEventListener('click', function() {
      formTest.submit();
    })
  }
  if(testBtn) {
    testBtn.addEventListener('click', () => {
      showPopup(popupAttention);
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
});

// Fancybox
Fancybox.bind("[data-fancybox]");