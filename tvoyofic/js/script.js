//burger menu
/*---------- Start menu ------------- */
// let header = document.querySelector('.header')
// document.addEventListener('scroll', function() {
//     let scroll = window.scrollY
//     if(scroll > 0) {
//          header.classList.add('scroll')
//     } else{
//         header.classList.remove('scroll')
//     }
// });

let body = document.querySelector('body');
let link = document.querySelector('.header__btn');
let menu = document.querySelector('.header__nav');
let menuOpen = document.querySelector('nav.opened');
let listMenu = document.querySelector('.header__list');
let menuHg = listMenu.clientHeight + 40;
if(link){
  link.addEventListener('click', function () {
    menu.classList.toggle('opened');
    if (menu.classList.contains('opened')) {
    menu.style.height = menuHg + 'px';
    menu.style.width = '200px';
    menu.style.opacity = '1';
    }else {
      menu.style.height = '0px';
      menu.style.width = '0px';
      menu.style.opacity = '0';
    }
  }, false);
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      menu.classList.remove('opened');
      menu.style.height = '0px';
      menu.style.width = '0px';
      menu.style.opacity = '0';
    }
  })
  document.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__btn'))) {
      menu.style.height = '0px';
      menu.style.width = '0px';
      menu.style.opacity = '0';
    }
  })
}


/*---------- End menu ------------- */

/*slider*/
$('.slider__container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30L26 15L0 0L0 30Z" fill="white"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 0L-4.64873e-07 15L26 30L26 0Z" fill="white"/></svg></button>',
  dots: true,
});

/*swiper*/
let swiperArtist = document.querySelector('.furniture__sliders');
if(swiperArtist){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}


