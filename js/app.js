let link = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let header = document.querySelector(".header");

window.addEventListener('load', function() {
  if(header) {
    document.addEventListener("scroll", function () {
      addScroll();
    });
  }
  if(menu){
    console.log(link)
    link.addEventListener('click', function () {
      link.classList.toggle('active');
      menu.classList.toggle('open');
    }, false);
    window.addEventListener('scroll', () => {
      if (menu.classList.contains('open')) {
        link.classList.remove('active');
          menu.classList.remove('open');
      }
    })
    document.addEventListener('click', e => {
      let target = e.target;
      if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__burger'))) {
          link.classList.remove('active');
          menu.classList.remove('open');
      }
    })
  }
  addScroll();
});

function addScroll() {
  let scroll = window.scrollY;
  if (scroll > 50 ) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
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