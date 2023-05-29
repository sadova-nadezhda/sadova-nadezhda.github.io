window.addEventListener("load", function () {
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".primery__menu");
  if (menu) {
    link.addEventListener("click", function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");
      }, false);
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        !target.classList.contains("primery__menu") &&
        !target.classList.contains("header__burger")
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }


  //select
  $('select').niceSelect();
  $('select').niceSelect('update');


  //START slider
  $('.trust__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25L1 13L13 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L13 13L1 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
  //END slider

    //popup
    let popupCart = document.querySelector("#popup-cart");
    let popupFeedback = document.querySelector("#popup-feedback");
    let popupForm = document.querySelector("#popup-form");
    let feedback = document.querySelector(".feedback");
    let formBtn = document.querySelector(".popup-feedback_form");
    if(popupCart){
      hidePopup(popupCart)
    }
    if(popupFeedback){
      hidePopup(popupFeedback)
    }
    if(popupForm){
      hidePopup(popupForm)
    }
    if(feedback) {
      feedback.addEventListener('click', function() {
        showPopup(popupFeedback)
      });
    }
    if(formBtn) {
      formBtn.addEventListener('click', function() {
        $(popupFeedback).fadeOut(400);
        showPopup(popupForm)
      });
    }


  //START Basket
  let cartCont = document.querySelector('.js-basket'),
      basketAdd = document.querySelector('.js-button-backet'),
      basketEmpty = document.querySelector('.basket__info'),
      formCart = document.querySelector('.form__cart'),
      countProduct = document.querySelector('.header__basket span'),
      popupCard = document.querySelector('.popup-cart__card'),
      cartData = getProductData() || {},
      count = 0;

  // Получить данные 
  function getProductData() {
    return JSON.parse(localStorage.getItem('cart'));
  }
  // Записать данные 
  function setProductData(data) {
    localStorage.setItem('cart', JSON.stringify(data));
    return false;
  }
  // Создаем товар 
  function createCart(e) {
    this.disabled = true; 
    let parentBox = document.querySelector('.js-product'), 
        itemId = parentBox.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.js-product-title').innerHTML,
        itemImg = parentBox.getAttribute('data-src'),
        itemPath = window.location.href;

    cartData = getProductData();

    cartData[itemId] = { 'title': itemTitle, 'img': itemImg, 'path': itemPath};

    checkCount(cartData);

    if(!setProductData(cartData)){ 
      this.disabled = false; 
    }

    return false;
  }
  // Добавляем  товаров в корзину 
  function addCart(e){
    let totalItems = '';
    cartData = getProductData();
    checkCount(cartData);

    if(cartData !== null &&  count > 0){
      for(let items in cartData){
        totalItems += `
          <div class="basket__product product" data-id="${items}">
            <a href="${cartData[items]['path']}" class="product__title">${cartData[items]['title']}</a>
            <span class="product__close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1L13 13" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                      
            </span>
          </div>
        `
      }
      cartCont.innerHTML = totalItems;
    } else {
      basketEmpty.style.display = 'block';
    }
    return false;
  }
  // Добавляем  товаров в попап 
  function addPopup(e) {
    let totalItems = '',
        target = e.target,
        prodId = target.parentNode.getAttribute('data-id');
    cartData = getProductData();
    if(cartData !== null &&  count > 0){
      for(let items in cartData){
        if( items == prodId) {
          totalItems += `
          <div class="popup-cart__img"><img src="${cartData[items]['img']}" alt=""></div>
          <div class="popup-cart__caption">${cartData[items]['title']}</div>
          `
        }
      }
      popupCard.innerHTML = totalItems;
    }
    else {
      basketEmpty.style.display = 'block';
    }
    return false;
  }
  // Проверка кол-ва товаров
  function checkCount(data) {
    count = Object.keys(cartData).length;
    countProduct.textContent = count;
  }
  // "Добавить в корзину"
  if(basketAdd) {
    basketAdd.addEventListener('click', function(e){
      createCart();
      addPopup(e);
      showPopup(popupCart);
    });
  }
  if(cartCont) {
    addCart();
    cartData = getProductData();
    formCart.value = JSON.stringify(cartData);
    cartCont.addEventListener('click', function(e) {
      let target = e.target;
      if(target.classList.contains('product__close')) {
        let product = target.closest('.basket__product');
        let key = product.getAttribute('data-id');
        delete cartData[key];
        product.remove();
        setProductData(cartData);
        formCart.value = JSON.stringify(cartData);
        addCart();
      }
    })
  }
  checkCount(cartData);
  //END Basket


  //START Map
  let map = document.querySelector('#map');
  if(map) {
    ymaps.ready(function () {
      let myMap = new ymaps.Map('map', {
              center: [51.143974, 71.435806],
              zoom: 9
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemarkWithContent = new ymaps.Placemark([51.148789, 71.467781], {
              hintContent: 'БЦ "Алтай"',
              balloonContent: `<span>БЦ "Алтай"</span> <img src="../img/1000м2.png">`,
          }, {
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Размеры метки.
              iconImageSize: [30, 30],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
      myMap.geoObjects
          .add(myPlacemarkWithContent);
    });
  }
  //END Map


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
