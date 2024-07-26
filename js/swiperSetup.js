// swiperSetup.js
export function initializeSwipers() {
  var heroSwiper = new Swiper(".heroSwiper", {
    spaceBetween: 4,
    slidesPerView: 5.7,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      1024: {
        spaceBetween: 16,
        slidesPerView: 4,
      },
    }
  });
  var heroSwiper2 = new Swiper(".heroSwiper2", {
    spaceBetween: 0,
    effect: "fade",
    watchSlidesVisibility: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    thumbs: {
      swiper: heroSwiper,
    }
  });

  var bathSwiper = new Swiper(".bathSwiper", {
    spaceBetween: 12,
    slidesPerView: 'auto',
  });
  var bathSwiper2 = new Swiper(".bathSwiper2", {
    navigation: {
      nextEl: ".bath-button-next",
      prevEl: ".bath-button-prev",
    },
    thumbs: {
      swiper: bathSwiper,
    },
  });

  var benefitsSwiper = new Swiper(".benefitsSwiper", {
    slidesPerView: 2,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".benefits-button-next",
      prevEl: ".benefits-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 40,
        slidesPerView: 3.3,
      },
    }
  });

  var PostSwiper = new Swiper(".postSwiper", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    loopFillGroupWithBlank: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".post-button-next",
      prevEl: ".post-button-prev",
    },
  });

  var officesSwiper = new Swiper(".officesSwiper", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    loopFillGroupWithBlank: false,
    watchSlidesVisibility: true,
    speed: 500,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".offices-pagination",
      type: "progressbar",
    },
  });

  var kitchenSwiper = new Swiper(".kitchenSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".kitchen-button-next",
      prevEl: ".kitchen-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 40,
        slidesPerView: 3.3,
      },
    }
  });

  var hallSwiper = new Swiper(".hallSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    watchSlidesVisibility: true,
    loop: true,
    loopFillGroupWithBlank: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".hall-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".hall-button-next",
      prevEl: ".hall-button-prev",
    },
  });

  var swiper = new Swiper(".basicSwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".basic-button-next",
      prevEl: ".basic-button-prev"
    },
  });

  // var proceduresSwiper = new Swiper(".proceduresSwiper", {
  //   navigation: {
  //     nextEl: ".procedures-button-next",
  //     prevEl: ".procedures-button-prev",
  //   },
  // });

  // var homeSwiper = new Swiper(".homeSwiper", {
  //   navigation: {
  //     nextEl: ".home-button-next",
  //     prevEl: ".home-button-prev",
  //   },
  // });

  // var newsInnerSwiper = new Swiper(".newsInnerSwiper", {
  //   navigation: {
  //     nextEl: ".newsInner-button-next",
  //     prevEl: ".newsInner-button-prev",
  //   },
  // });

  // var awardsSwiper = new Swiper(".awardsSwiper", {
  //   navigation: {
  //     nextEl: ".awards-button-next",
  //     prevEl: ".awards-button-prev",
  //   },
  // });

  // var officeSwiper = new Swiper(".officeSwiper", {
  //   navigation: {
  //     nextEl: ".office-button-next",
  //     prevEl: ".office-button-prev",
  //   },
  // });
}
