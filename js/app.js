window.addEventListener("load", function () {
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  let close = document.querySelector(".header__close");
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

  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
  });

  /*duplicated logo clients*/
  let widthPage = $(window).width();
  let countCrd = $(".partners__cards").first().children().length;
  let fullCountCrd = Math.round(widthPage / 100);
  let crdClients = $(".partners__cards").html();
  if (countCrd < fullCountCrd) {
    $(".partners__cards").append(crdClients);
  }

  /* AOS */
  AOS.init();

  /*marquee*/
  $('.marquee_lf').marquee({
    direction: "left",
    speed: 80,
    duplicated: true,
    startVisible: true,
  })

  $('.marquee_rg').marquee({
    direction: 'right',
    speed: 80,
    duplicated: true,
    startVisible: true,
  })

  // sliders
  var swiperSeminar = new Swiper("#aboutSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 40
      }
    }
  });

  //popup
  function hidePopup(popup) {
    $(popup).click(function (e) {
      const target = e.target;
      if ($(target).hasClass("popup__close") || $(target).hasClass("popup")) {
        $(this).fadeOut(400);
      }
    });
  }
  
  function showPopup(popup) {
    $(popup).fadeIn(400);
  }

  let popupForm = document.querySelector("#popup-form");
  let feedback = document.querySelector("#feedback");

  const popups = [popupForm];
  popups.forEach((popup) => {
    if (popup) {
      hidePopup(popup);
    }
  });

  if (feedback && popupForm) {
    feedback.addEventListener("click", function () {
      showPopup(popupForm);
    });
  }

});
