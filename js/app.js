/*header scroll*/
let header = document.querySelector('.header');
/*scroll up*/
let scrollBtn = document.querySelector('.scoll_up');

document.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if(scroll > 0) {
         header.classList.add('scroll');
    } else{
        header.classList.remove('scroll');
    }

    if(scroll > 1000) {
      scrollBtn.classList.add('active');
    } else{
        scrollBtn.classList.remove('active');
    }
});

/*burger menu*/
let body = document.querySelector('body');
let link = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

if(menu){
  link.addEventListener('click', function () {
    link.classList.toggle('active');
    menu.classList.toggle('opened');
  }, false);
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
  document.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__burger'))) {
        link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
}

/*Show card services text*/
let cardMore = document.querySelectorAll('.card__more');
if(cardMore) {
  cardMore.forEach( elem => {
    elem.addEventListener('click', (e) => {
      let target = e.target;
      elem.classList.toggle('active');
      let cardTxt = target.closest('.card').querySelector('.card__txt');
      let cardImg = target.closest('.card').querySelector('.card__img');
      if(elem.classList.contains('active')) {
        cardTxt.classList.add('active');
        cardImg.classList.add('active');
      } else {
        cardTxt.classList.remove('active');
        cardImg.classList.remove('active');
      }
    });
  });
}

/*Swiper Services*/
var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1540: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/*Swiper Reviews*/
var swiper2 = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
  startVisible: true,
  duplicated: true
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


/*popup*/
let popup = document.querySelector("#popup");
if (popup) {
  let popupBtn = document.querySelectorAll(".popup__btn");
  $(popupBtn).each( function() {
    $(this).on('click', () => {
      $(popup).fadeIn(400);
    })
  });
  $(popup).click(function(e) {
    const target = e.target;
    if (
      $(target).hasClass("popup_close") ||
      $(target).hasClass("popup")
    ) {
      $(popup).fadeOut(400);
    }
  });
}


