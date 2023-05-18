
//расширяем встроенный объект Date 
Date.prototype.daysInMonth = function() {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

window.addEventListener("load", function () {

  //menu
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  const drowdownArrow = document.querySelector('.dropdown svg');
  const checkbox = document.getElementById('openDropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if(checkbox) {
    checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      drowdownArrow.classList.toggle('rotate-dropdown-arrow');
    });
  
    dropdownMenu.addEventListener('click', (e) => {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
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



  //slider Reviews
  $('.reviews__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: false,
    arrows: true,
    appendArrows: $('.reviews__arrows'),
    prevArrow: '<button type="button" class="slick_prev slider_arrow"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9L1 5L5 1" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 5H17" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slider_arrow"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9L17 5L13 1" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 5H1" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  });

  //accordion
  $(function () {
    $(".accordion__content:first h5").addClass("active");
    $(".accordion__content:not(:first)  div").hide();
  
    $(".accordion h5").click(function () {
      $(this).next("div").slideToggle("slow")
        .siblings("div:visible").slideUp("slow");
      $(this).toggleClass("active");
      $(this).siblings("h5").removeClass("active");
    });
  });

  //select
  $('select').niceSelect();

  //progress
  let progressData = document.querySelector('.progress-num');
  if(progressData) {
    let currentStep = progressData.getAttribute("data-progress");

    $(progressData).animate({
     width: `${currentStep}%`
    }, 1000);
  }

  //cabinet User
  let editBtn = document.querySelector('.cabinet__edit');
  let saveBtn = document.querySelector('.cabinet__save');
  let inpList = document.querySelectorAll('.cabinet__field input');
  let passInp = document.querySelector('.cabinet__field__pass');

  if (editBtn) {
    editBtn.addEventListener('click', function() {
      inpList.forEach( field => {
        field.removeAttribute('readonly')
        field.classList.add('edit');
        editBtn.classList.add('hidden');
        saveBtn.classList.remove('hidden');
        passInp.classList.remove('hidden');
      })
    })
  
    saveBtn.addEventListener('click', function() {
      inpList.forEach( field => {
        field.setAttribute('readonly', 'readonly')
        field.classList.remove('edit');
        editBtn.classList.remove('hidden');
        saveBtn.classList.add('hidden');
        passInp.classList.add('hidden');
      })
    })
  }


  //popup
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
        $(target).hasClass("popup__close") ||
        $(target).hasClass("popup")
      ) {
        $(popup).fadeOut(400);
      }
    });
  }
  
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


