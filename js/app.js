let header = document.querySelector('.header');

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");

window.addEventListener("load", function () {

  function handleScroll() {
    let scroll = window.scrollY;
    if (scroll > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  function initializeMenuToggle(linkSelector, menuSelector) {
    const link = document.querySelector(linkSelector);
    const menu = document.querySelector(menuSelector);

    if (link && menu) {
      const closeMenu = () => {
        link.classList.remove("active");
        menu.classList.remove("open");
      };

      link.addEventListener("click", function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");

        if (menu.classList.contains('header__box-menu')) {
          header.classList.toggle("active");
        }
      }, false);

      window.addEventListener("scroll", () => {
        if (menu.classList.contains("open")) {
          closeMenu();
        }
        handleScroll();
      });

      document.addEventListener("click", (e) => {
        const target = e.target;
        const isClickInsideMenu = menu.contains(target) || link.contains(target);

        if (!isClickInsideMenu) {
          closeMenu();
        }
      });
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  initializeMenuToggle('.menu-burger', '.header__box-menu');
  initializeMenuToggle('.catalog-burger', '.header__box-catalog');

  // Hero slider
  // Инициализация миниатюрного слайдера
  const thumbsSlider = new Swiper('.thumbs-slider', {
    slidesPerView: 1,
    grabCursor: false,
    freeMode: false,
    allowTouchMove: false,
  });
  // Инициализация основного слайдера
  const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    autoHeight: true,
    effect: "fade",
    allowTouchMove: false,
    thumbs: {
      swiper: thumbsSlider,
    },
    navigation: {
      nextEl: ".card__next",
      prevEl: ".card__prev",
    },
    pagination: {
      el: ".card__pagin",
      clickable: false,
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        autoHeight: false,
      },
    },
  });

  // Product slider
  // Инициализация превью слайдера
  const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 4,
    spaceBetween: 16,
    slideToClickedSlide: true,
    breakpoints: {
      0: { // при 0px и выше
        direction: 'horizontal', // горизонтальная прокрутка
      },
      768: { // при 768px и выше
        direction: 'vertical', // вертикальная прокрутка
      }
    }
  });
  // Инициализация слайдера изображений
  const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 1, //
    spaceBetween: 32, //
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    grabCursor: true, // менять иконку курсора
    thumbs: {
      swiper: sliderThumbs // указываем имя превью слайдера
    },
    breakpoints: {
      0: { // при 0px и выше
        direction: 'horizontal', // горизонтальная прокрутка
      },
      768: { // при 768px и выше
        direction: 'vertical', // вертикальная прокрутка
      }
    }
  });

  // News slider
  const postSwiper = new Swiper(".postSwiper", {
    navigation: {
      nextEl: ".post-button-next",
      prevEl: ".post-button-prev",
    },
    pagination: {
      el: ".post-pagination",
    },
    keyboard: true,
  });

  // About slider
  const aboutSwiper = new Swiper(".aboutSwiper", {
    // slidesPerView: "auto",
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    allowTouchMove: false,
    effect: "fade",
    initialSlide: 2
  });
  const aboutSwiper2 = new Swiper(".aboutSwiper2", {
    // slidesPerView: "auto",
    spaceBetween: 20,
    initialSlide: 2,
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
    thumbs: {
      swiper: aboutSwiper,
    },
  });

  if (num) {

    plus.addEventListener("click", () => {
      a = num.innerText;
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", () => {
      a = num.innerText;
      if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
    });
  }

  const features = document.querySelector('.features');
  const showBtn = document.querySelector('.show');
  const hideBtn = document.querySelector('.hide');

  if (features) {
    showBtn.addEventListener('click', function () {
      features.classList.add("open");
      showBtn.style.display = 'none';
      hideBtn.style.display = 'block';
    });

    hideBtn.addEventListener('click', function () {
      features.classList.remove("open");
      showBtn.style.display = 'block';
      hideBtn.style.display = 'none';
    });
  }

  const likes = document.querySelectorAll('.button_like');
  if (likes) {
    likes.forEach(like => {
      like.addEventListener('click', () => like.classList.toggle('active'))
    })
  }

  // tabs
  $(function () {
    $('ul.tabs__nav').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  // accordion
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }

      // Close other open accordion items
      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = 0;
        }
      });
    });
  });

  // parameters
  let parameters = document.querySelector('.parameters');

  if (parameters) {
    let parametersItem = parameters.querySelectorAll('.parameters__item');
    let parametersContent = parameters.querySelectorAll('.parameters__content');
  
    const resetAll = () => {
      parameters.classList.remove('active');
      parametersItem.forEach(item => item.classList.remove('active'));
      parametersContent.forEach(content => {
        content.classList.remove('open');
        content.style.maxHeight = 0;
        content.style.opacity = 0;
      });
    };
  
    const toggleContent = (item) => {
      let content = item.querySelector('.parameters__content');
      item.classList.toggle('active');
      content.classList.toggle('open');
  
      if (content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 24 + "px";
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = 0;
        content.style.opacity = 0;
      }
      parameters.classList.toggle('active');
    };
  
    // Сбросить все по умолчанию
    resetAll();
  
    // Обработчик клика по элементам внутри parameters
    parameters.addEventListener('click', (e) => {
      let target = e.target.closest('.parameters__item');
      if (target && parameters.contains(target)) {
        resetAll(); // Сбрасываем все перед открытием нового
        toggleContent(target); // Открываем или закрываем выбранный элемент
      }
    });
  
    // Обработчик клика по всему документу для сброса при клике вне parameters
    document.addEventListener('click', (e) => {
      if (!parameters.contains(e.target)) {
        resetAll();
      }
    });
  }
  
});
