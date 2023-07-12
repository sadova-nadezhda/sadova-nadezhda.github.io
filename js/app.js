window.addEventListener("load", function () {
  let header = document.querySelector(".header");
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");

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
  if(header) {
    document.addEventListener("scroll", function () {
      let scroll = window.scrollY;
      if (scroll > 50 ) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
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

});
