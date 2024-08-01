// main.js
import { addPadTop, toggleMenu, menuLg } from './header.js';
import { initializeSwipers } from './swiperSetup.js';
import { initializeTabs } from './tabs.js';
import { initializeAccordion } from './accordion.js';
import { initializeDropdowns } from './dropdown.js';
import { validateForm } from './formValidation.js';
import { initializeDatepicker, initializeTime } from './datetime.js';
import { calcCheckPrice, calcBookPrice } from './checkPrice.js';

document.addEventListener("DOMContentLoaded", function () {
  let preloader = document.querySelector("#preloader");
  if (preloader) {
    document.querySelector("body").style.overflow = "hidden";
    let preloaderAnim = preloader.animate(
      [{ opacity: "1" }, { opacity: "0" }],
      {
        duration: 300,
        fill: "forwards",
        easing: "ease-in",
      }
    );
    preloaderAnim.addEventListener("finish", () => {
      preloader.style.display = "none";
      document.querySelector("body").style.overflow = "unset";
    });
  }

  const header = document.querySelector("header");
  const sectionTop = document.querySelector('.section-top');
  let langBody = document.querySelector('body').getAttribute('data-lang');

  let scroll = window.scrollY;
  if (scroll > 50 ) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  window.addEventListener("scroll", function () {
    if(header) {
      let scroll = window.scrollY;
      if (scroll > 50 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }
  });

  if (sectionTop && header) {
    addPadTop(header, sectionTop);
  }

  const link = document.querySelector(".header__open");
  const menu = document.querySelector(".header__wrap");
  if (menu && link) {
    toggleMenu(menu, link);
  }

  AOS.init();
  $('select:not(.mobile-select)').niceSelect();

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  menuLg();
  initializeDropdowns();
  initializeSwipers();
  initializeTabs();
  initializeAccordion();
  initializeDatepicker(langBody);
  initializeTime();
  validateForm();
  calcCheckPrice();
  calcBookPrice();

  const proceduresPageLinks = document.querySelectorAll(
    ".procedures-page__link"
  );

  proceduresPageLinks.forEach((link) => {
    link.addEventListener("click", function (a) {
      // Убираем класс active со всех ссылок
      proceduresPageLinks.forEach((link) => link.classList.remove("active"));

      // Добавляем класс active на кликнутую ссылку
      a.target.classList.add("active");
    });
  });

  const certificatesRegistrationCount = document.querySelectorAll(
    ".certificates-registration-card__count-box"
  );

  certificatesRegistrationCount.forEach((box) => {
    let input = box.querySelector(
      ".certificates-registration-card__count-input"
    );
    let minBtn = box.querySelector(
      ".certificates-registration-card__count-btn_minus"
    );
    let plusBtn = box.querySelector(
      ".certificates-registration-card__count-btn_plus"
    );

    if (input && minBtn && plusBtn) {
      console.log(input.value);

      minBtn.addEventListener("click", function (e) {
        if (input.value <= 1) {
          e.preventDefault();
        } else {
          input.value--;
        }
      });

      plusBtn.addEventListener("click", function (e) {
        input.value++;
      });
    }
  });

  // Modals
  function hidePopup(popup) {
    popup.addEventListener('click', function(e) {
      const target = e.target;
      if (
        target.classList.contains("modal__close") ||
        target.classList.contains("modals")
      ) {
        popup.style.transition = "opacity 0.4s";
        popup.style.opacity = "0";
        setTimeout(() => {
          popup.style.display = "none";
        }, 400);
      }
    });
  }
  function showPopup(popup) {
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.transition = "opacity 0.4s";
      popup.style.opacity = "1";
    }, 10);
  } 

  //popup
  let modals = document.querySelector('.modals')
  let modalAll = document.querySelectorAll('.modal')
  let popupBtns = document.querySelectorAll(".popup-btn");
  if(modals && popupBtns){
    hidePopup(modals);
    popupBtns.forEach( btn => {
      btn.addEventListener('click', () => {
        showPopup(modals)
        let typeBtn = btn.dataset.type;
        modalAll.forEach( modal => {
          let typeModal = modal.dataset.type;
          modal.style.display = 'none'
          if(typeBtn == typeModal) {
            modal.style.display = 'block'
          }
        });
      })
    })
  }

  window.addEventListener("resize", () => {
    if (sectionTop && header) {
      addPadTop(header, sectionTop);
    }
  });
});

// Получаем текущий путь URL
const currentPath = window.location.pathname;

// Функция для перенаправления на страницу 404
function redirectTo404() {
    window.location.href = '/404.html';
}

// Функция для проверки статуса страницы
function checkPageStatus(path) {
    fetch(path, { method: 'HEAD' })
        .then(response => {
            if (response.status === 404) {
                redirectTo404();
            }
        })
        .catch(error => {
            console.error('Error checking page status:', error);
            redirectTo404();
        });
}

// Проверяем текущий путь
checkPageStatus(currentPath);
