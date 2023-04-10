window.addEventListener("load", function () {

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  function numberWithSim(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if(header) {
      let scroll = window.scrollY;
      if (scroll > 50 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }
      //анимированные цифры
    $('.anime__num').waypoint({
      handler: function() {
        $(this.element).addClass('anime')
      },
      offset: '80%',
    });
    let count = document.querySelector('.anime');
    if(count) {
      $('.anime').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).data("num")
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).find('span').text(numberWithSpaces(Math.ceil(now)));
          }
        });
      });
    }
  });

  let scroll = window.scrollY;
  if (scroll > 50 ) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow:"<button type='button' class='slick-arrow slick-prev'></button>",
    nextArrow:"<button type='button' class='slick-arrow slick-next'></button>",
    fade: true,
    asNavFor: '.slider-nav'
  });
  
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    fade: true,
    centerMode: true,
    focusOnSelect: true
  });

  var swiper = new Swiper(".certificateSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  let toggles = document.querySelectorAll('[data-toggle]'), i = toggles.length;

  for (i;i--;) {
    toggles[i].addEventListener('click', function(e) {
      e.preventDefault();
      let i = toggles.length;
      for (i;i--;) {
        toggles[i].parentNode.classList.remove('active');
      }
      this.parentNode.classList.add('active');
    }, false);
  }
});

