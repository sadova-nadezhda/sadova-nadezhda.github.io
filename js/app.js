
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
  let isValid = true;
  let cabinetEdit = document.querySelector('.cabinet__edit');
  let cabinetSave = document.querySelector('.cabinet__save');
  let cabinetFields = document.querySelectorAll('.cabinet__field input');
  let FieldPass = document.querySelector('.field__pass input');
  let cabinetFieldPass = document.querySelector('.field__pass');
  let cabinetFieldPassEdit = document.querySelector('.field__pass_edit');
  let password = document.querySelector('.password');
  let password_confirm = document.querySelector('.password_confirm');
  let cabinetForm = document.forms.cabinetForm;
  let errorPass = document.querySelectorAll('.error_pass');

  errorPass.forEach( err => {
    $(err).fadeOut(400);
  })

  if (cabinetEdit) {
    cabinetEdit.addEventListener('click', function(e) {
      cabinetFields.forEach(field => {
        field.removeAttribute('readonly');
        field.classList.add('edit');
      });
      cabinetEdit.classList.add('hidden');
      cabinetSave.classList.remove('hidden');
      cabinetFieldPassEdit.classList.remove('hidden');
      cabinetFieldPass.classList.add('hidden');
    });
  }

  if (cabinetSave) {
    cabinetSave.addEventListener('click', function(e) {
      e.preventDefault();
      Validate()
      if(!isValid) {
        password.style.border = "1px solid #e74c3c";
        password_confirm.style.border = "1px solid #e74c3c";
        password.focus();
      }
      else {
        FieldPass.value = password.value;
        password.style.border = "";
        password_confirm.style.border = "";
        cabinetFields.forEach(field => {
          field.setAttribute('readonly', 'readonly');
          field.classList.remove('edit');
        });
        cabinetEdit.classList.remove('hidden');
        cabinetSave.classList.add('hidden');
        cabinetFieldPassEdit.classList.add('hidden');
        cabinetFieldPass.classList.remove('hidden');
        cabinetForm.submit();
      }
    });
  }

  function Validate() {
    // Проверка пароля
    // if (password.value === "" || password_confirm.value === "") {
    //   isValid = false;
    //   errorPass.forEach( err => {
    //     if($(err).hasClass('error_passFill')) {
    //       $(err).fadeIn(400);
    //     } else {
    //       $(err).fadeOut(400);
    //     }
    //   })
    // } 
    // Проверка длины
    if (password.value !== '' && (password.value.length < 6 || password.value.length > 16)) {
      isValid = false;
      errorPass.forEach( err => {
        if($(err).hasClass('error_passLeng')) {
          $(err).fadeIn(400);
        } else {
          $(err).fadeOut(400);
        }
      })
    }
    // Проверка соответствия паролей 
    else if (password.value !== password_confirm.value) {
      isValid = false;
      errorPass.forEach( err => {
        if($(err).hasClass('error_passMatch')) {
          $(err).fadeIn(400);
        } else {
          $(err).fadeOut(400);
        }
      })
    } 
    // Пароль прошел все проверки
    else {
      isValid = true;
    }
    return isValid;
  }

  let sliderTest = document.querySelector('.test__slider');
  let total = document.querySelector('.test__result span');
  let bar = document.querySelector('.test__bar .bar');
  let resultBtn = document.querySelector('.test__res');

  /*form question*/
  $('.test__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    fade: true,
    arrows: true,
    // adaptiveHeight: true,
    nextArrow: '.test_next',
    prevArrow: '.test_prev', 
    dots: false,
  });

  function updateBtn() {
    /*form button*/
    let slide = document.querySelectorAll('.test__item');
    let btnPrev = document.querySelector('.test_prev');
    let btnNext = document.querySelector('.test_next');
    let btnResut = document.querySelector('.test__res');
    let slideLast = slide[slide.length - 1] ;
    if(slideLast) {
      slideLast.classList.add('slide_last');
    }
    if (btnPrev && btnNext) {
      btnNext.style.display = 'flex';
      btnResut.style.display = 'none';
      $('.test__slider').on('afterChange', function() {
        if (slideLast.classList.contains('slick-active')) {
          btnNext.style.display = 'none';
          btnResut.style.display = 'block';
        } else {
          btnNext.style.display = 'flex';
          btnResut.style.display = 'none';
        }
        $('.test__slider').slick('setPosition');
      });
    }
  }

  function updateProgress(){
    let totalInt = document.querySelectorAll('.test__answer input');
    let allSlide = $('.test__slider').find('.test__item').length;
    progressBarUpdate(0);
    if(totalInt){
      totalInt.forEach( elem => {
        elem.addEventListener('change', ()=>{
          let totalCheck = document.querySelectorAll('.test__answer input:checked');
          let ids = [];
          totalCheck.forEach( check => {
            let valCheck = check.getAttribute('value');
            ids.push(valCheck)
          });
          if(totalCheck.length == allSlide) {
            resultBtn.removeAttribute('disabled');
          } else {
            resultBtn.setAttribute('disabled','disabled');
          }
        });
      });
    }
  }

  function progressBarUpdate(currentSlide) {
    let allSlide = $('.test__slider').find('.test__item').length;
    let indexSlide = (currentSlide ? currentSlide : 0) + 1;			   
    let progress = Math.ceil((indexSlide*100)/allSlide);
    total.textContent = progress + '%';
    $(bar).each(function () {
      $(this).animate(
        {
          width: progress + "%",
        },1000
      );
    });
  }

  if(sliderTest) {
    $('.test__slider').each(function(){
      let $slickElement = $(this);
      $slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
        progressBarUpdate(currentSlide);
      });
    });
    updateBtn();
    updateProgress();
  }





  //popup
  let popupLog = document.querySelector("#popup_log");
  let popupSing = document.querySelector("#popup_sing");
  if (popupLog || popupSing) {
    let popupBtn = document.querySelectorAll(".popup__btn");
    $(popupBtn).each( function() {
      $(this).on('click', () => {
        if($(this).hasClass('popup_log')) {
          $(popupLog).fadeIn(400);
        }
        else if($(this).hasClass('popup_sing')) {
          $(popupSing).fadeIn(400);
        }
      })
    });
    $(popupLog).click(function(e) {
      const target = e.target;
      if (
        $(target).hasClass("popup__close") ||
        $(target).hasClass("popup")||
        $(target).hasClass("popup__sing")
      ) {
        $(popupLog).fadeOut(400);
      }
    });
    $(popupSing).click(function(e) {
      const target = e.target;
      if (
        $(target).hasClass("popup__close") ||
        $(target).hasClass("popup") ||
        $(target).hasClass("popup__sing")
      ) {
        $(popupSing).fadeOut(400);
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

  //alert
  let alertBox = document.querySelector('.alert__wrap');
  if(alertBox) {
    if(alertBox.classList.contains('active')) {
      $(alertBox).fadeIn(400);
    }
    $(alertBox).click(function(e) {
      const target = e.target;
      if (
        $(target).hasClass("alert__close") ||
        $(target).hasClass("alert__wrap") ||
        $(target).hasClass("alert__btn")
      ) {
        $(alertBox).fadeOut(400);
      }
    });
  }

});


