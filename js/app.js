let header = document.querySelector('.header');

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

  // Инициализация миниатюрного слайдера
  const thumbsSlider = new Swiper('.thumbs-slider', {
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // Инициализация основного слайдера
  const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    effect: "fade",
    thumbs: {
        swiper: thumbsSlider,
    },
    navigation: {
      nextEl: ".card__next",
      prevEl: ".card__prev",
    },
    pagination: {
      el: ".card__pagin",
      clickable: true,
    },
  });
  
});
