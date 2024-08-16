// Global Vars
var header = document.querySelector("header");
var sectionTop = document.querySelector('.section-top');

// Functions
function addPadTop(header, section) {
  let headerHeight = header.offsetHeight;
  section.style.paddingTop = `${headerHeight}px`;
}

window.addEventListener("load", function () {

  // Header 
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
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
  }
  let scroll = window.scrollY;
  if (scroll > 50 ) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }


  // Fancybox
  Fancybox.bind("[data-fancybox]")

});

window.addEventListener("resize", () => {
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
  }
});

window.addEventListener("scroll", function () {
  if(header) {
    let scroll = window.scrollY;
    if (scroll > 50 ) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }
});
