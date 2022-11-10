// ---------- Start menu -------------
let header = document.querySelector(".header");
if(header) {
  document.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    if (scroll > 50 ) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
}

let link = document.querySelector(".header__btn");
let closeMenu = document.querySelector(".header__close");
let menu = document.querySelector(".header_opened");
if (menu) {
  console.log('1')
  link.addEventListener("click", function () {
    menu.classList.add("active");
  },false);
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
  },false);
}
// ---------- End menu -------------

let contactBtn = document.querySelector('.phone__btn');
let contactPop = document.querySelector('.popup_contact');
let contactCls = document.querySelector('.popup_contact__close');
if(contactBtn) {
  // contactBtn.addEventListener('click', () => {
  //   contactPop.classList.add('active');
  // });
  // contactCls.addEventListener('click', () => {
  //   contactPop.classList.remove('active');
  // });
  $(contactBtn).click(function () {
    $(contactPop).addClass('active');
    $(contactPop).show()
  });
  $(contactCls).click(function () {
    $(contactPop).removeClass('active');
    $(contactPop).hide();
  });

}


/*slider*/
$('.gallery__container').slick({
  infinite: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#010101"/><path d="M35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="#010101"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="white" stroke="#010101"/><path d="M14.2929 25.7071C13.9024 25.3166 13.9024 24.6834 14.2929 24.2929L20.6569 17.9289C21.0474 17.5384 21.6805 17.5384 22.0711 17.9289C22.4616 18.3195 22.4616 18.9526 22.0711 19.3431L16.4142 25L22.0711 30.6569C22.4616 31.0474 22.4616 31.6805 22.0711 32.0711C21.6805 32.4616 21.0474 32.4616 20.6569 32.0711L14.2929 25.7071ZM35 26H15V24H35V26Z" fill="#010101"/></svg></button>',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
  ]
});

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

/*Fancybox*/

Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});  