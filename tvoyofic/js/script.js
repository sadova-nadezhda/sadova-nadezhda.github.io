//burger menu
/*---------- Start menu ------------- */
let header = document.querySelector('.header')
document.addEventListener('scroll', function() {
    let scroll = window.scrollY
    if(scroll > 0) {
         header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
});

let body = document.querySelector('body');
let link = document.querySelector('.header__btn');
let menu = document.querySelector('.header__nav');
if(menu){
  link.addEventListener('click', function () {
    menu.classList.toggle('opened');
  }, false);
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      menu.classList.remove('opened');
    }
  })
  document.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__icon'))) {
      menu.classList.remove('opened');
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