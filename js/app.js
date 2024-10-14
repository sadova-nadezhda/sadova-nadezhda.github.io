// main.js
import { addPadTop, toggleMenu, menuLg } from './modules/header.js';
import { initializeSwipers } from './modules/swiperSetup.js';
import { initializeTabs } from './modules/tabs.js';
import { initializeAccordion } from './modules/accordion.js';
import { initializeDropdowns } from './modules/dropdown.js';
import { validateForm } from './modules/formValidation.js';
import { initializeDatepicker, initializeDatepicker2, initializeTimepicker,  initializeTime } from './modules/datetime.js';
import { calcCheckPrice, calcBookPrice } from './modules/checkPrice.js';

var langBody = document.querySelector('body').getAttribute('data-lang');

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
    initializeDropdowns();
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


    document.querySelectorAll('.plan__item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
  
      const parent = e.currentTarget;
      const planPopup = parent.querySelector('.plan__popup');
  
      // Закрываем другие открытые всплывающие окна
      document.querySelectorAll('.plan__popup.active').forEach(popup => {
        if (popup !== planPopup) {
          popup.classList.remove('active');
        }
      });
  
      // Переключаем активность текущего всплывающего окна
      planPopup.classList.toggle('active');
  
      // Обработчик для кнопки закрытия
      planPopup.querySelector('.plan__close').addEventListener('click', (e) => {
        e.stopPropagation();
        planPopup.classList.remove('active');
      }, { once: true });
    });
  });
  
  // Закрытие всплывающих окон при клике вне их области
  document.addEventListener('click', () => {
    document.querySelectorAll('.plan__popup.active').forEach(popup => {
      popup.classList.remove('active');
    });
  });


  menuLg();
  initializeDropdowns();
  initializeSwipers();
  initializeTabs();
  initializeAccordion();
  initializeTime();
  validateForm();
  // calcCheckPrice();
  // calcBookPrice();

  const descSeo = document.querySelector('.seo__desc');
  const showBtn = document.querySelector('.seo__show');
  const hideBtn = document.querySelector('.seo__hide');

  if(descSeo) {
    showBtn.addEventListener('click', function() {
      descSeo.classList.add("open");
      showBtn.style.display = 'none';
      hideBtn.style.display = 'inline-block';
    });
  
    hideBtn.addEventListener('click', function() {
      descSeo.classList.remove("open");
      showBtn.style.display = 'inline-block';
      hideBtn.style.display = 'none';
    });
  }

  

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
          e.pbronentDefault();
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

  var heroSwiper = document.querySelector('.heroSwiper');
  if (heroSwiper) {
      var slides = heroSwiper.querySelectorAll('.swiper-slide');
      if (slides.length === 1) {
          heroSwiper.style.display = 'none';
      }
  }
});

window.onkeydown = evt => {
  if (evt.key == 'Tab') {
      evt.pbronentDefault();
  }
}

let bronForm =  document.querySelector('.modal-book-form');
if(bronForm){
bronForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let bronrequest = new XMLHttpRequest();
    bronrequest.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            const bronsuccess = bronForm.querySelector('.success');
            /*const formBlock = callBannerForm.querySelector('.call-modal-form');
            const callBannerModalTitle = callBannerModal.querySelector('.call-modal-title');*/
            const bronfields = bronForm.querySelectorAll('input');

            for(let i=0;bronfields.length > i;i++){
              bronfields[i].value = "";
            }

           /* success.style.visibility="visible";
            formBlock.style.visibility = "hidden";
            callBannerModalTitle.style.visibility = "hidden";*/
      location.href = "/stranitsa-blagodarnosti";
        }
    }

    bronrequest.open('POST', '/local/templates/orlov/ajax/forms/bron_form.php', true);
    bronrequest.setRequestHeader('accept', 'application/json');

    let brondata = new FormData(bronForm);
    bronrequest.send(brondata);
})
};


let cabForm =  document.querySelector('.modal-cab-form');
if(cabForm){
cabForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let cabrequest = new XMLHttpRequest();
    cabrequest.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            const cabsuccess = cabForm.querySelector('.success');
            /*const formBlock = callBannerForm.querySelector('.call-modal-form');
            const callBannerModalTitle = callBannerModal.querySelector('.call-modal-title');*/
            const cabfields = cabForm.querySelectorAll('input');

            for(let i=0;cabfields.length > i;i++){
              cabfields[i].value = "";
            }

           /* success.style.visibility="visible";
            formBlock.style.visibility = "hidden";
            callBannerModalTitle.style.visibility = "hidden";*/
      location.href = "/stranitsa-blagodarnosti";
        }
    }

    cabrequest.open('POST', '/local/templates/orlov/ajax/forms/cab_form.php', true);
    cabrequest.setRequestHeader('accept', 'application/json');

    let cabdata = new FormData(cabForm);
    cabrequest.send(cabdata);
})
};

let callForm =  document.querySelector('.modal-call-form');
if(callForm){
callForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let callrequest = new XMLHttpRequest();
    callrequest.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            const callsuccess = callForm.querySelector('.success');
            /*const formBlock = callBannerForm.querySelector('.call-modal-form');
            const callBannerModalTitle = callBannerModal.querySelector('.call-modal-title');*/
            const callfields = callForm.querySelectorAll('input');

            for(let i=0;callfields.length > i;i++){
              callfields[i].value = "";
            }

           /* success.style.visibility="visible";
            formBlock.style.visibility = "hidden";
            callBannerModalTitle.style.visibility = "hidden";*/
      location.href = "/stranitsa-blagodarnosti";
        }
    }

    callrequest.open('POST', '/local/templates/orlov/ajax/forms/callback_form.php', true);
    callrequest.setRequestHeader('accept', 'application/json');

    let calldata = new FormData(callForm);
    callrequest.send(calldata);
})
};

let openForm =  document.querySelector('.modal-open-form');
if(openForm){
openForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let openrequest = new XMLHttpRequest();
    openrequest.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            const opensuccess = openForm.querySelector('.success');
            /*const formBlock = callBannerForm.querySelector('.call-modal-form');
            const callBannerModalTitle = callBannerModal.querySelector('.call-modal-title');*/
            const openfields = openForm.querySelectorAll('input');

            for(let i=0;openfields.length > i;i++){
              openfields[i].value = "";
            }

           /* success.style.visibility="visible";
            formBlock.style.visibility = "hidden";
            callBannerModalTitle.style.visibility = "hidden";*/
      location.href = "/stranitsa-blagodarnosti";
        }
    }

    openrequest.open('POST', '/local/templates/orlov/ajax/forms/open_form.php', true);
    openrequest.setRequestHeader('accept', 'application/json');

    let opendata = new FormData(openForm);
    openrequest.send(opendata);
})
};


(function toggleTabItem() {
  const tabBtns = document.querySelectorAll(".tab-nav [data-tab-target]");

  if (tabBtns.length > 0) {
    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab(e.target.dataset.tabTarget, tabBtn);
      });
    });

    // Активируем вкладку на основе текущего URL хеша
    const currentHash = window.location.hash.slice(1);
    if (currentHash) {
      const tabBtn = document.querySelector(`.main-tab-nav [data-tab-target="${currentHash}"]`);
      if (tabBtn) activateTab(currentHash, tabBtn);
    }
  }

  function activateTab(targetID, tabBtn) {
    const closestNav = tabBtn.closest(".tab-nav");
    const closestContent = closestNav.nextElementSibling;

    closestNav.querySelectorAll("[data-tab-target]").forEach((btn) => {
      btn.classList.remove("is-active");
    });

    [...closestContent.children].forEach((content) => {
      content.classList.remove("is-active");
    });

    tabBtn.classList.add("is-active");
    document.getElementById(targetID).classList.add("is-active");
  }
})();



$(document).ready(function() {
    if($("#current-element").length > 0) {
    // Инициализация NiceSelect
    $('#element-select').niceSelect();

    // Получаем ID текущего элемента из data-атрибута
    var currentElementId = $('#current-element').data('id');

    // Устанавливаем значение в select
    $('#element-select').val(currentElementId);

    // Обновляем интерфейс NiceSelect, чтобы изменения были видны
    $('#element-select').niceSelect('update');
     function updateHiddenInput() {
            var selectedText = currentElementId;
            $(".hous-from-select").val(currentElementId);
        }

        // Сразу обновляем текст в скрытом поле
        updateHiddenInput();

        // Обновляем текст при изменении выбора в select
        $('#element-select').on('change', function() {
            updateHiddenInput();
        });
        console.log(currentElementId);
    }
else{
  console.log("Not element page");
}
});

$(document).ready(function() {
    if($("#current-element1").length > 0) {
    // Инициализация NiceSelect
    $('#element-select').niceSelect();

    // Получаем ID текущего элемента из data-атрибута
    var currentElementId = $('#current-element1').data('id');

    // Устанавливаем значение в select
    $('#element-select').val(currentElementId);

    // Обновляем интерфейс NiceSelect, чтобы изменения были видны
    $('#element-select').niceSelect('update');
    function updateHiddenInput2() {
            var selectedText = currentElementId;
            $(".hous-from-select").val(currentElementId);
        }

        // Сразу обновляем текст в скрытом поле
        updateHiddenInput2();

        // Обновляем текст при изменении выбора в select
        $('#element-select').on('change', function() {
            updateHiddenInput2();
        });
        console.log(currentElementId);
    }
else{
  console.log("Not element page");
}
$('.cab-btn').on('click', function() {
        // Получаем data-id из нажатого слайда
        var slideId = $(this).data('id');

        // Проверяем наличие элемента #current-element перед выполнением действий
        if ($('.officesSwiper').length > 0) {
            // Инициализация NiceSelect, если требуется
            $('#element-select3').niceSelect();

            // Устанавливаем значение в select
            $('#element-select3').val(slideId);

            // Обновляем интерфейс NiceSelect
            $('#element-select3').niceSelect('update');
        }
        function updateHiddenInput3() {
            var selectedText = slideId;
            $(".hous-from-select1").val(slideId);
        }

        // Сразу обновляем текст в скрытом поле
        updateHiddenInput3();

        // Обновляем текст при изменении выбора в select
        $('#element-select3').on('change', function() {
            updateHiddenInput3();
        });
        console.log(slideId);
    });
$('.houstab-btn').on('click', function() {
        // Получаем data-id из нажатого слайда
        var housId = $(this).data('id');

        // Проверяем наличие элемента #current-element перед выполнением действий
        if ($('.houstab-btn').length > 0) {
            // Инициализация NiceSelect, если требуется
            $('#element-select').niceSelect();

            // Устанавливаем значение в select
            $('#element-select').val(housId);

            // Обновляем интерфейс NiceSelect
            $('#element-select').niceSelect('update');
        }
        function updateHiddenInput1() {
            var selectedText = housId;
            $(".hous-from-select").val(housId);
        }

        // Сразу обновляем текст в скрытом поле
        updateHiddenInput1();

        // Обновляем текст при изменении выбора в select
        $('#element-select').on('change', function() {
            updateHiddenInput1();
        });
        console.log(housId);
    });
});

$(document).ready( function() {
  initializeDatepicker(langBody);
  initializeDatepicker2(langBody);
  initializeTimepicker();
});


const blocks = document.querySelectorAll(".quantity");
const ticketAdult = document.querySelector(".booking__adult .quantity .num");
const ticketChildren = document.querySelector(".booking__children");

const toggleChildrenActive = () => {
  const adultCount = parseInt(ticketAdult.innerText, 10);
  ticketChildren.classList.toggle('active', adultCount > 0);
};

toggleChildrenActive();

blocks.forEach(block => {
  const plus = block.querySelector(".plus"),
        minus = block.querySelector(".minus"),
        num = block.querySelector(".num");

  if (num) {
    let count = parseInt(num.innerText, 10);
    
    const updateMinusState = () => {
      minus.style.pointerEvents = count > 0 ? 'all' : 'none';
      minus.style.opacity = count > 0 ? '1' : '0.5';
    };

    updateMinusState();

    plus.addEventListener("click", () => {
      count++;
      num.innerText = count;
      updateMinusState();
      toggleChildrenActive();
    });

    minus.addEventListener("click", () => {
      if (count > 0) {
        count--;
        num.innerText = count;
        updateMinusState();
        toggleChildrenActive();
      }
    });
  }
});
