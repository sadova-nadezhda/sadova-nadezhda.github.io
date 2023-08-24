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
