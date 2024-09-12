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
        if (menu.classList.contains('header__box-menu')) {
          header.classList.remove("active");
        }
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
      // dynamicBullets: true,
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
        mousewheel: false,
      },
      768: { // при 768px и выше
        direction: 'vertical', // вертикальная прокрутка
        mousewheel: true,
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
  // $(function () {
  //   $('ul.tabs__nav').on('click', 'li:not(.active)', function () {
  //     $(this)
  //       .addClass('active').siblings().removeClass('active')
  //       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  //   });
  // });

  const tabs = document.querySelectorAll('.tab label');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const currentInput = tab.previousElementSibling;

      if (window.innerWidth <= 600) {
        const isAccordionActive = currentInput.checked;

        contents.forEach(content => {
          content.style.maxHeight = '0'; // Скрыть все контенты
        });

        if (!isAccordionActive) {
          const content = tab.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + 'px'; // Задать высоту для раскрытия контента
        }
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      contents.forEach(content => {
        content.style.opacity = '0'; // Скрыть все контенты при переключении обратно в табы
        content.style.visibility = 'hidden';
      });

      const activeInput = document.querySelector('input[type="radio"]:checked');
      if (activeInput) {
        const activeContent = activeInput.nextElementSibling.nextElementSibling;
        activeContent.style.opacity = '1';
        activeContent.style.visibility = 'visible';
      }
    }
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
  
    const closeAllExcept = (currentItem) => {
      parametersItem.forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
          let content = item.querySelector('.parameters__content');
          content.classList.remove('open');
          content.style.maxHeight = 0;
          content.style.opacity = 0;
        }
      });
    };
  
    const toggleContent = (item) => {
      let content = item.querySelector('.parameters__content');
      let isOpen = content.classList.contains('open');
      
      // Закрываем все элементы, кроме текущего
      closeAllExcept(item);
  
      // Переключаем состояние текущего элемента
      item.classList.toggle('active', !isOpen);
      content.classList.toggle('open', !isOpen);
  
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 24 + "px";
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = 0;
        content.style.opacity = 0;
      }
  
      // Управляем классом 'active' для всего контейнера
      if (Array.from(parametersItem).some(item => item.classList.contains('active'))) {
        parameters.classList.add('active');
      } else {
        parameters.classList.remove('active');
      }
    };
  
    // Обработчик клика по элементам внутри parameters
    parameters.addEventListener('click', (e) => {
      // Если клик был на контенте, не обрабатываем его
      if (e.target.closest('.parameters__content')) {
        return;
      }
  
      let target = e.target.closest('.parameters__item');
      if (target && parameters.contains(target)) {
        toggleContent(target); // Открываем или закрываем выбранный элемент
      }
    });
  }


  const $range = $(".range");
  const $rangeInputLeft = $(".range-input-left");
  const $rangeInputRight = $(".range-input-right");
  
  function formatCurrency(value) {
      return value.toLocaleString('ru-RU') + ' ₸';
  }
  
  function cleanInput(value) {
      return parseInt(value.replace(/\D/g, ''), 10) || 0;
  }
  
  const range = $(".range");
  const rangeInputLeft = $(".range-input-left");
  const rangeInputRight = $(".range-input-right");
  
  // Получаем min и max из data-атрибутов
  const minVal = parseInt(rangeInputLeft.data('min'), 10) || 0;
  const maxVal = parseInt(rangeInputRight.data('max'), 10) || 500000;
  
  function formatCurrency(value) {
      return value.toLocaleString('ru-RU') + ' ₸';
  }
  
  function cleanInput(value) {
      return parseInt(value.replace(/\D/g, ''), 10) || 0;
  }
  
  range.slider({
      min: minVal,
      max: maxVal,
      values: [minVal, maxVal],
      range: true,
      animate: "fast",
      slide: function(event, ui) {
          rangeInputLeft.val(formatCurrency(ui.values[0]));
          rangeInputRight.val(formatCurrency(ui.values[1]));
      }
  });
  
  rangeInputLeft.val(formatCurrency($range.slider("values", 0)));
  rangeInputRight.val(formatCurrency($range.slider("values", 1)));
  
  $(".range-container input").on("change", function() {
      let inputLeft = cleanInput(rangeInputLeft.val());
      let inputRight = cleanInput(rangeInputRight.val());
  
      const currentLeft = range.slider("values", 0);
      const currentRight = range.slider("values", 1);
  
      inputLeft = Math.max(minVal, Math.min(inputLeft, currentRight));
      inputRight = Math.min(maxVal, Math.max(inputRight, currentLeft));
  
      rangeInputLeft.val(formatCurrency(inputLeft));
      rangeInputRight.val(formatCurrency(inputRight));
  
      if (inputLeft !== currentLeft) {
          range.slider("values", 0, inputLeft);
      }
      if (inputRight !== currentRight) {
          range.slider("values", 1, inputRight);
      }
  });
  
});