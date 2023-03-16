window.addEventListener("load", function () {
  // let header = document.querySelector(".header");
  // if (header) {
  //   document.addEventListener("scroll", function () {
  //     let scroll = window.scrollY;
  //     if (scroll > 0) {
  //       header.classList.add("scroll");
  //     } else {
  //       header.classList.remove("scroll");
  //     }
  //   });
  // }

  let link = document.querySelector(".main-menu__burger");
  let menu = document.querySelector(".main-menu__nav");
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
        !target.classList.contains("main-menu__nav") &&
        !target.classList.contains("main-menu__burger")
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }

  let swiper = new Swiper(".popularSwiper", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
