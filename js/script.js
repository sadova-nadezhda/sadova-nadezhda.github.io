//preloader
document.querySelector('body').style.overflow = 'hidden'
window.onload = () => {
    let preloader = document.querySelector('.preloader')
    let preloaderAnim = preloader.animate([{ opacity: '1' }, { opacity: '0' }], {
        duration: 300,
        fill: 'forwards',
        easing: 'ease-in',
    })
    preloaderAnim.addEventListener('finish', () => {
        preloader.style.display = 'none'
        document.querySelector('body').style.overflow = 'unset'
    })
}


//burger
$(document).ready(function(){
  var link = $('.header__icon');
  var menu = $('.header__burger-menu');
  link.click(function(){
      link.toggleClass('active');
      menu.toggleClass('open');
  });
});

$('.burger__dropdown').on('click', function(){
  $('.dropdown__link').toggleClass('active');
  $('.dropdown-list').toggleClass('dropdown');
});


//sliders
$('.apartments__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  vertical: true,
  verticalSwiping: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        swipe: false
      }
    }
  ]
});
$('.partners-banks').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.posts-column-1').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 2,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2
      }
    }
  ]
});

$('.posts-column-2').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 2,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2,
        rtl: true
      }
    }
  ]
});

$('.hol__slider_txt').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.slide__next',
  prevArrow: '.slide__prev', 
  dots: false,
  fade: true,
  variableWidth: true,
  asNavFor: '.hol__slider_img'
});
$('.hol__slider_img').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  variableWidth: true,
  asNavFor: '.hol__slider_txt'
});


let flag = true;
$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      variableWidth: true
    });
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slick-slider').slick('unslick');
  }
}).resize();


//range
function fun1() {
  var square = document.getElementById('square'); //rng - это ползунок
  var i1 = document.getElementById('i1'); // i1 - input
  i1.value = square.value;
}
function fun2() {
  var square2 =document.getElementById('square2'); 
  var i2 = document.getElementById('i2'); 
  i2.value = square2.value;
}
function fun3() {
  var price =document.getElementById('price'); 
  var i3 = document.getElementById('i3'); 
  i3.value = price.value;
}


//анимированные цифры
$('.about-company').waypoint({
  handler: function() {
    $(this.element).addClass('count')
  },
  offset: '80%',
});

let count = document.querySelector('count');
if(count) {
  $('.number').each(function () {
    $(this).prop('Counter',0).animate({
     Counter: $(this).text()
     }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
         $(this).text(Math.ceil(now));
      }
     });
 });
}



//tabs
$(function() {
  $('ul.history__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.history__tabs').find('div.history__tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$(function() {
  $('.tabs__caption').on('click', ':not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('div.tabs').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});


// Табы Вопросы
var mob = false;
var tab = $('.questions__tab__item');
var tab_content = $('.questions__tab__content');
  
if($('.tab__contents').css("display") == 'none'){
  for (var i=0; i<tab_content.length; i++){
    $(tab_content[i]).appendTo(tab[i]);
  }
  mob = true;
} else if($('.tab__contents').css("display") != 'none'){
  for (var i=0; i<tab_content.length; i++){
    $(tab_content[i]).appendTo('.tab__contents');
  }
  mob = false;
}
// клик на родительский элемент при клике на дочерние элементы блока .questions__tab__item
$('.questions__tab__item').children().on("click", function(){
  $(this).parent('.questions__tab__item').click();
});

$('.questions__tabs__caption').on("click", function(event){
  var target = event.target;
  if ($(target).hasClass('questions__tab__item')){
    for(var i=0; i<tab.length; i++){
      if (target == tab[i]){
        tab[i].classList.add('active');
        showContent(i);
        tab_content[i].classList.add('active');
      } else{
        tab[i].classList.remove('active'); 
        hideContent(i);
        tab_content[i].classList.remove('active'); 
      }
    }
  }
});

function showContent(i){
  if(mob){
    $(tab_content[i]).slideDown();
  } else{
    $(tab_content[i]).show();
  }
}
function hideContent(i){
  if(mob){
    $(tab_content[i]).slideUp();
  } else{
    $(tab_content[i]).hide();
  }
}

$(window).resize(function(){
// Табы вакансий, проверка ширины экрана
if($('.tab__contents').css("display") == 'none'){
  for (var i=0; i<tab_content.length; i++){
    $(tab_content[i]).appendTo(tab[i]);
  }
  mob = true;
  } else if($('.tab__contents').css("display") != 'none'){
    for (var i=0; i<tab_content.length; i++){
      $(tab_content[i]).appendTo('.tab__contents');
    }
  mob = false;
  }
});


//popup career
let careerCards = document.querySelector('.career__cards');
if (careerCards) {
  careerCards.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains('card__btn') || target.classList.contains('career__card__title')){
      let careerCard = target.closest('.career__card');
      let careerTitle = careerCard.querySelector('.career__card__title');
      let careerList = careerCard.querySelector('.career__card__list');
      let careerType = careerCard.querySelector('.career__card__type');
      let careerTerms = careerCard.querySelector('.career__card__terms');
      let careerSkills = careerCard?.querySelector('.career__card__skills');
      let popupTitle = document.querySelector('.popup-career__title');
      let popupList = document.querySelector('.popup-career__list');
      let popupType = document.querySelector('.popup-career__type');
      let popupTerms = document.querySelector('.popup-career__terms');
      let popupSkills = document.querySelector('.popup-career__skills');
      popupTitle.innerHTML = careerTitle.innerHTML;
      popupList.innerHTML = careerList?.innerHTML != undefined ? careerList?.innerHTML : ' ';
      popupType.innerHTML = careerType?.innerHTML != undefined ? careerType?.innerHTML : ' ';
      popupTerms.innerHTML = careerTerms?.innerHTML != undefined ? careerTerms?.innerHTML :' ';
      popupSkills.innerHTML = careerSkills?.innerHTML != undefined ? careerSkills?.innerHTML : ' ';
      document.querySelector('#popup-career').style.display = 'flex';
    }
  });
}


//form
function submitForm() {
  $('#form_loader').show()
}
// input mask tel
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos)
  } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
  }
}
$('input[type="tel"]').click(function() {
  $(this).setCursorPosition(3);
}).mask('+7 (999) 999 99 99');
//валидатор мыла
function isEmail(string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(string).toLowerCase());
}
$('#mail').on('keyup', function(){
  let mail = isEmail($('#mail').val());
  if (!mail) {
    $('#mail').addClass('mail-err');
  } else {
    $('#mail').removeClass('mail-err');
  }
});

let popupCareerBtn = document.querySelector('.popup-career__btn');
  if(popupCareerBtn){
  popupCareerBtn.addEventListener('click', () => {
    document.querySelector('#popup-career').style.display = 'none';
    document.querySelector('#popup-form').style.display = 'flex';
  });
};

let popupFormCls = document.querySelector('.popup-form__close');
if(popupFormCls){
  popupFormCls.addEventListener('click', () => {
    document.querySelector('#popup-form').style.display = 'none';
  });
};

let popupCareerCls = document.querySelector('.popup-career__close');
if(popupCareerCls){
  popupCareerCls.addEventListener('click', () => {
    document.querySelector('#popup-career').style.display = 'none';
  });
}

let file = document.querySelector('.file');
if(file){
  file.addEventListener('change', ()=> {
    if(file.files[0]?.name) {
      document.querySelector('.file-done').style.display = 'block';
      document.querySelector('.file-done').innerHTML = file.files[0].name;
      document.querySelector('.file-empty').style.display = 'none';
    }
    else {
      document.querySelector('.file-done').style.display = 'none';
      document.querySelector('.file-empty').style.display = 'block';
    }
  });
}

let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
 item.addEventListener('click', function (event) {
    alertt.classList.remove("alert--active")
   alertt.classList.remove("alert--warning")
   alertt.classList.remove("alert--error")
 })
}




/* custom select */
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

