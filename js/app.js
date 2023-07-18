window.addEventListener("load", function () {
  let header = document.querySelector(".header");
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");

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
  if (header) {
    document.addEventListener("scroll", function () {
      let scroll = window.scrollY;
      if (scroll > 50) {
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

  let swiperWrap = document.querySelectorAll(".wrapper__swiper");
  if (swiperWrap) {
    swiperWrap.forEach((slider) => {
    if(!slider.classList.contains('construction__swiper')) {
      var swiper = new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
          el: slider.nextElementSibling,
          draggable: true,
        },
      });
    }
    });
  }

  let sliderConst = document.querySelector('.construction__swiper')
  var swiper4 = new Swiper(sliderConst, {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: sliderConst.nextElementSibling,
      draggable: true,
    },
  });

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
      },
    },
  });

  //info Card
  let cardTop = document.querySelectorAll(".info__top_slide");
  if (cardTop) {
    cardTop.forEach((top) => {
      $(top).next().slideUp();
      top.addEventListener("mouseover", (e) => {
        let target = e.target;
        if (target.classList.contains("info__top")) {
          $(target).next().slideDown();
        }
      });
      top.addEventListener("mouseout", (e) => {
        let target = e.target;
        if (target.classList.contains("info__top")) {
          $(target).next().slideUp();
        }
      });
    });
  }

  //layouts
  const formFilters = document.getElementById("formFilters");
  const typeRadios = formFilters.elements["type"];
  const roomRadios = formFilters.elements["room"];
  const quadRadios = formFilters.elements["quad"];
  const layoutsDesc = document.querySelectorAll(".layouts__desc");
  const layoutsImages = document.querySelectorAll(".layouts__item");

  // Добавляем слушатели событий на каждую группу
  typeRadios.forEach((radio) => {
    radio.addEventListener("change", () => updateLayout("type"));
  });

  roomRadios.forEach((radio) => {
    radio.addEventListener("change", () => updateLayout("room"));
  });

  quadRadios.forEach((radio) => {
    radio.addEventListener("change", () => updateLayout("quad"));
  });

  // Функция для проверки и обновления состояния радио кнопок
  function updateLayout(radiousRow) {
    // Получаем выбранные значения из каждой группы
    let selectedType = document.querySelector(
      'input[name="type"]:checked'
    ).value;
    let selectedRoom = document.querySelector(
      'input[name="room"]:checked'
    ).value;
    const roomFilterBox = document.querySelector(".form-filters__room");
    if (selectedType === "commercial") {
      roomFilterBox.style.display = "none";
      selectedRoom = "0";
    } else {
      roomFilterBox.style.display = "flex";
    }
    let selectedQuad = document.querySelector(
      'input[name="quad"]:checked'
    ).value;

    // Перебираем каждую радио кнопку квадратуры и скрываем/показываем в зависимости от выбранных значений
    quadRadios.forEach((radio) => {
      const type = radio.parentElement.dataset.type;
      const room = radio.parentElement.dataset.room;

      if (type === selectedType && room === selectedRoom) {
        radio.parentElement.classList.add("active");
      } else {
        radio.parentElement.classList.remove("active");
      }
    });

    if (radiousRow === "room" || radiousRow === "type") {
      let isFirstActive = false;
      quadRadios.forEach((elem, index) => {
        // elem.removeAttribute("checked");
        elem.checked = false;
        console.log("🚀 ~ file: app.js:184 ~ quadRadios.forEach ~ elem:", elem)
        if (!isFirstActive && elem.parentElement.classList.contains("active")) {
          isFirstActive = true;
          // elem.setAttribute("checked", true);
          elem.checked = true;
        }
      });
    }

    selectedType = document.querySelector('input[name="type"]:checked').value;
    selectedRoom = selectedType === "commercial" ? "0" : document.querySelector('input[name="room"]:checked').value;
    selectedQuad = document.querySelector('input[name="quad"]:checked').value;
    layoutsDesc.forEach((desc) => {
      let descType = desc.getAttribute("data-type");
      let descRoom = desc.getAttribute("data-room");

      // Проверяем соответствие типа помещения и количества комнат
      if (descType === selectedType && descRoom === selectedRoom) {
        desc.classList.add("active");
      } else {
        desc.classList.remove("active");
      }
    });

    layoutsImages.forEach((image) => {
      let imageType = image.getAttribute("data-type");
      let imageRoom = image.getAttribute("data-room");
      let imageQuad = image.getAttribute("data-quad");

      // Проверяем соответствие типа помещения, количества комнат и квадратуры
      if (
        imageType === selectedType &&
        imageRoom === selectedRoom &&
        imageQuad === selectedQuad
      ) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  }

  updateLayout();

  //construction
  let itemList = document.querySelectorAll('.construction__item');
  let itemListActive = document.querySelectorAll('.construction__item.active');
  let slider = document.querySelector('.construction__swiper');
  let siblings = n => [...n.parentElement.children].filter(c=>c!=n)
  let queue =  0;
  let year = 0;
  function updateActiveItem(item) {
    if(item.hasAttribute('data-queue')) {
      queue = item.getAttribute('data-queue')
    } else if(item.hasAttribute('data-year')) {
      year = item.getAttribute('data-year')
    }
    filterSlides()
  }
  function filterSlides() {
    slider.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'))
    let activeSlide = slider.querySelectorAll(`.slide[data-queue='${queue}'][data-year='${year}']`);
    activeSlide.forEach(slide => slide.classList.add('active'))
    // swiper4.disable()
    // swiper4.init(slider)
    swiper4.update()
  }

  itemListActive.forEach( item => {
    updateActiveItem(item)
  })

  itemList.forEach( item => {
    item.addEventListener('click', (e)=> {
      let target = e.target;
      let siblingsItem = siblings(target);
      siblingsItem.forEach(sibling=> {
        sibling.classList.remove('active')
      })
      if(!target.classList.contains('active')) {
        target.classList.add('active')
      }
      updateActiveItem(item)
    })
  })




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
    $(popup).click(function (e) {
      const target = e.target;
      if ($(target).hasClass("popup__close") || $(target).hasClass("popup")) {
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
  if (popupFeedback || popupForm) {
    hidePopup(popupFeedback);
    hidePopup(popupForm);
  }
  if (feedback) {
    feedback.addEventListener("click", function () {
      showPopup(popupFeedback);
    });
  }
  if (formBtn) {
    formBtn.addEventListener("click", function () {
      $(popupFeedback).fadeOut(400);
      showPopup(popupForm);
    });
  }

  //slider resize
  let flag = true;
  let card = document.querySelectorAll(".info__top");
  $(window)
    .on("resize", function () {
      if ($(this).width() <= 980 && flag) {
        flag = false;
        card.forEach((elem) => {
          $(elem).next().slideDown();
          if (elem.classList.contains("info__top_slide")) {
            elem.classList.remove("info__top_slide");
          }
        });
      } else if ($(this).width() > 980 && !flag) {
        flag = true;
        card.forEach((elem) => {
          $(elem).next().slideUp();
          if (!elem.classList.contains("info__top_slide")) {
            elem.classList.add("info__top_slide");
          }
        });
      }
    })
    .resize();
});
