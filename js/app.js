window.addEventListener("load", function () {
  let header = document.querySelector(".header");

  let preloader = document.querySelector("#preloader");
  if(preloader) {
    document.querySelector("body").style.overflow = "hidden";
    let preloaderAnim = preloader.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 300,
      fill: "forwards",
      easing: "ease-in",
    });
    preloaderAnim.addEventListener("finish", () => {
      preloader.style.display = "none";
      document.querySelector("body").style.overflow = "unset";
    });
  }

  const headerBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');

  if (header) {
    document.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      header.classList.toggle("scroll", scroll > 50);
    });
  }

  if (headerBurger) {
    document.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', closeMenuOnScroll);
    document.addEventListener('click', closeMenuOnClickOutside);
  }

  function handleMenuClick(event) {
    const { target } = event;
    if (target === headerBurger || target.classList.contains('header__item')) {
      headerBurger.classList.toggle('active');
      headerNav.classList.toggle('open');
    }
  }

  function closeMenuOnScroll() {
    if (headerNav.classList.contains('open')) {
      headerBurger.classList.remove('active');
      headerNav.classList.remove('open');
    }
  }

  function closeMenuOnClickOutside(event) {
    const { target } = event;
    if (!headerNav.contains(target) && !headerBurger.contains(target) && !target.classList.contains('header__item')) {
      headerBurger.classList.remove('active');
      headerNav.classList.remove('open');
    }
  }

  let imgLines = document.querySelectorAll('.img__lines');
  imgLines.forEach( img => {
    $(img).waypoint({
      handler: function() {
        $(this.element).addClass('active');
      },
      offset: '40%',
    });
  })

  let cardsMed  = document.querySelectorAll('.healthcare__card')
  cardsMed.forEach( card => {
    $(card).waypoint({
      handler: function() {
        $(this.element).addClass('active');
        $(this.element).next().removeClass('active');
        $(this.element).prev().removeClass('active');
      },
      offset: '30%',
    });
  })

  $('.way').waypoint({
    handler: function() {
    $(this.element).addClass("way--active")
    },
    offset: '90%'
  });

  // popup
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


  let popupForm = document.querySelector("#popup-form");
  let feedback = document.querySelector(".feedback");
  if(popupForm){
    hidePopup(popupForm)
  }
  if(feedback) {
    feedback.addEventListener('click', function() {
      showPopup(popupForm)
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

$(document).ready(function() {
  let currentAttrValue = $('.accordion__title').attr('href');
  function close_accordion_section() {
      $('.accordion__title').removeClass('active');
      $('.accordion__title').parent().removeClass('active');
      $('.accordion__content').slideUp(300).removeClass('open');
  }
  if($('.accordion__content').hasClass('open')) {
    $('.accordion ' + currentAttrValue).slideDown(300);
  }
  $('.accordion__title').click(function(e) {
      var currentAttrValue = $(this).attr('href');
      if($(e.target).is('.active')) {
          close_accordion_section();
      }else {
          close_accordion_section();
          $(this).addClass('active');
          $(this).parent().addClass('active');
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
      e.preventDefault();
  });
});

new WOW().init();
