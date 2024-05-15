// Global VARS
var link = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu");
var header = document.querySelector("header");
var sectionTop = document.querySelector('.section-top');

// Functions
function addPadTop(header, section) {
  let headerHeight = header.offsetHeight;
  section.style.marginTop = `${headerHeight}px`;
}
function boxHandler(e) {
  e.preventDefault(); 
  let currentBox = e.target.closest(".accordion__item"); 
  let currentContent = e.target.nextElementSibling; 
  currentBox.classList.toggle("active"); 
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}

// AOS animate
AOS.init({
  duration: 1200,
});

window.addEventListener("load", function () {
  // header
  if (menu) {
    link.addEventListener("click",() => {
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
        !target.classList.contains("header__menu") &&
        !target.classList.contains("header__burger") 
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
  }

  // accordion
  const accordionItems = Array.from(document.querySelectorAll(".accordion__item")); 
  accordionItems.forEach((item) => {
    item.addEventListener("click", boxHandler);
  });

  // sliders
  var swiperSeminar = new Swiper("#seminarSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    height: 'auto',
    watchSlidesVisibility: true,
    effect: 'slide',
    centeredSlides: true,
    keyboard: {
      enabled: true
    },

    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // navigation
    navigation: {
      nextEl: ".seminar-button-next",
      prevEl: ".seminar-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      640: {
        spaceBetween: 16
      }
    }
  });
});

window.addEventListener("resize", () => {
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
  }
});

