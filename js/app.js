window.addEventListener("load", function () {
  let header = document.querySelector('.header');
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  if (menu) {
    link.addEventListener(
      "click",
      function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");
        header.classList.toggle("active");
      },
      false
    );
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
        header.classList.remove("active");
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
        header.classList.remove("active");
      }
    });
  }

  function handleScroll() {
    let scroll = window.scrollY;
    if (scroll > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  handleScroll();
  
  // hero slider
  const heroSwiper = new Swiper(".heroSwiper", {
    effect: "fade",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        this.slides.forEach((slide) => {
          let background = slide.querySelector(".background");
          if (background) {
            background.classList.remove("animation");
          }
        });
        let activeSlide = this.slides[this.activeIndex];
        let background = activeSlide.querySelector(".background");
        if (background) {
          background.classList.add("animation");
        }
      },
    },
  });

  // tabs faq
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

  function setTabContentHeight() {
    const tabs = document.querySelector('.tabs');
    const tabContents = document.querySelectorAll('.tab-content');
    
    const isDesktop = window.innerWidth > 768;
    tabContents.forEach(tabContent => {
      tabContent.style.height = isDesktop ? `${tabs.offsetHeight - 30}px` : 'auto';
    });
  }

  setTabContentHeight()

  // tabs service
  $(function () {
    $('ul.tabs__nav').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.services-page__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  // Филиалы
  const branchItems = document.querySelectorAll('.branches__item');
  const branchContents = document.querySelectorAll('.branches__content');
  const svgPaths = document.querySelectorAll('.map path');
  const mapPoint = document.querySelector('.map-point');
  
  function removeActiveClass() {
    branchItems.forEach(item => item.classList.remove('active'));
    branchContents.forEach(content => content.classList.remove('active'));
    svgPaths.forEach(path => path.classList.remove('active'));
    mapPoint.style.opacity = 0; // Скрыть иконку
  }
  
  function setActiveElement(index) {
    const item = branchItems[index];
    const branchId = item.getAttribute('data-branch'); // Получаем значение data-атрибута
  
    removeActiveClass(); // Убираем активные классы со всех элементов
  
    // Добавляем активный класс к текущему элементу и контенту
    item.classList.add('active');
    branchContents[index].classList.add('active');
  
    // Поиск соответствующего пути на карте SVG
    svgPaths.forEach(path => {
      const pathId = path.getAttribute('data-branch'); // Получаем значение data-атрибута у пути
      if (pathId === branchId) {
        path.classList.add('active'); // Добавляем класс active к пути
  
        // Получаем координаты пути и устанавливаем положение иконки
        const pathRect = path.getBoundingClientRect();
        const containerRect = document.querySelector('.map').getBoundingClientRect();
  
        // Позиционируем иконку на середине пути
        mapPoint.style.left = `${pathRect.left + pathRect.width / 2 - containerRect.left}px`;
        mapPoint.style.top = `${pathRect.top + pathRect.height / 2 - containerRect.top}px`;
        mapPoint.style.opacity = 1; // Показываем иконку
      }
    });
  }
  
  if (branchItems.length > 0) {
    setActiveElement(0);
  }
  
  branchItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      setActiveElement(index);
    });
  });

  // Fancybox

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
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
    handleScroll();
    setTabContentHeight();
  });

  window.addEventListener('scroll', function() {
    handleScroll();
    if (window.innerWidth > 768) { // Условие для устройств с шириной экрана более 768px
      var services = document.querySelector('.services');
      var offsetTop = services.getBoundingClientRect().top + window.scrollY;
  
      if (window.scrollY > offsetTop - 76) {
        services.classList.add('active');
      }
    }
  });
  
});

let flag = true;

$(window).on('resize', function(){
  if ($(this).width() < 768 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false
    });
  }
  else if ($(this).width() > 768 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
  }
}).resize();