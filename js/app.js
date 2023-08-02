let header = document.querySelector(".header");
let firstSection = document.querySelector('.section_first');

window.addEventListener("load", function () {

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

      //breadcrumbs
      let headerHeight = document.querySelector(".header").clientHeight;
      if(firstSection) {
        firstSection.style.marginTop = `${headerHeight}px`;
      }

  const headerBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');

  if (headerNav) {
    document.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      headerNav.classList.toggle("scroll", scroll > 50);
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


  const menuContainer = document.querySelector('.header__menu');
  if (menuContainer) {
    const menuItems = document.querySelectorAll('.header__elem');

    function closeAllMenus() {
      menuItems.forEach(function(item) {
        item.parentNode.classList.remove('open');
        item.classList.remove('active');
      });
    }

    menuContainer.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('header__elem')) {
        e.preventDefault();
        target.classList.toggle('active');
        target.parentNode.classList.toggle('open');

        menuItems.forEach(function(item) {
          if (item !== target) {
            item.parentNode.classList.remove('open');
            item.classList.remove('active');
          }
        });
      } else if (!target.classList.contains('sub__menu') && !target.classList.contains('nav__menu')) {
        closeAllMenus();
      }
    });

    window.addEventListener('scroll', function() {
      closeAllMenus();
    });

    // document.addEventListener('click', function(event) {
    //   const { target } = event;
    //   if (!target.classList.contains('header__item')) {
    //     closeAllMenus();
    //   }
    // });
  }

  //START slider
  $('.members__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 56 0)" fill="#E8E8E8"/><path d="M31 22L25 28L31 34" stroke="#222222" stroke-width="0.957931"/></svg></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="28" fill="#E8E8E8"/><path d="M25 22L31 28L25 34" stroke="#222222" stroke-width="0.957931"/></svg></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
  //END slider

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

// resize
$(window).on('resize', function(){
  if(header) {
    let headerHeight = document.querySelector(".header").clientHeight;
    if(firstSection) {
      firstSection.style.marginTop = `${headerHeight}px`;
    }
  }
}).resize();