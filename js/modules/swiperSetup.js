// swiperSetup.js
export function initializeSwipers() {
  
  var heroSwiper = new Swiper(".heroSwiper", {
    spaceBetween: 4,
    slidesPerView: 5.7,
    breakpoints: {
      1024: {
        spaceBetween: 16,
        slidesPerView: 4,
      },
    }
  });
  var heroSwiper2 = new Swiper(".heroSwiper2", {
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    thumbs: {
      swiper: heroSwiper,
    }
  });

  var bathSwiper = new Swiper(".bathSwiper", {
    spaceBetween: 12,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    freeMode: true,
    
  });
  var bathSwiper2 = new Swiper(".bathSwiper2", {
    loop: true,
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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".benefits-button-next",
      prevEl: ".benefits-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
    }
  });

  var PostSwiper = new Swiper(".postSwiper", {
    spaceBetween: 16,
    slidesPerView: 1,
    navigation: {
      nextEl: ".post-button-next",
      prevEl: ".post-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    }
  });

  

  let kitchen = document.querySelector('.kitchenSwiper');
  if(kitchen) {

    var kitchenSwiper = new Swiper(".kitchenSwiper", {
      slidesPerView: 1,
      allowTouchMove: false,
      initialSlide: 2,
      loop: true,
      loopedSlides: 4
    });
  
    var kitchenSwiper2 = new Swiper(".kitchenSwiper2", {
      slidesPerView: 1.3,
      spaceBetween: 16,
      centeredSlides: true,
      initialSlide: 2,
      loop: true,
      // loop: true,
      navigation: {
        nextEl: ".kitchen-button-next",
        prevEl: ".kitchen-button-prev",
      },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   // pauseOnMouseEnter: true,
      // },
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 3.3,
        },
      },
      // thumbs: {
      //   swiper: kitchenSwiper,
      // },
    
    });
  
    kitchenSwiper.controller.control = kitchenSwiper2;
    kitchenSwiper2.controller.control = kitchenSwiper;
  }

  var kitchenPageSwiper = new Swiper(".kitchenPageSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
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
  
  
 


  var swiper = new Swiper(".basicSwiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
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
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.hallSwiper .swiper-wrapper'); 

  if(container) {
    const elements = Array.from(container.children);
    while (container.children.length < 14) {
        elements.forEach(element => {
            if (container.children.length < 14) {
                const clone = element.cloneNode(true);
                container.appendChild(clone);
            }
        });
    }
  }
   var hallSwiper = new Swiper(".hallSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    centeredSlides: false,
    watchSlidesVisibility: true,
    slideToClickedSlide: true,
    loop: true,
    loopFillGroupWithBlank: false,
  /*  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },*/
    pagination: {
      el: ".hall-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".hall-button-next",
      prevEl: ".hall-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
      },
    }
  });
  });

document.addEventListener('DOMContentLoaded', function() {

  var officesSwiper = new Swiper(".officesSwiper", {
    spaceBetween: 16,
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    watchSlidesVisibility: true,
    speed: 500,
    pagination: {
      el: ".offices-pagination",
      type: "progressbar",
    },
    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    }
  });
});