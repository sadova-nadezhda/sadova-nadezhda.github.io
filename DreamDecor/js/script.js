// ---------- Start menu -------------
let header = document.querySelector(".header");
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

let link = document.querySelector(".header__burger");
let closeMenu = document.querySelector(".header__close");
let menu = document.querySelector(".header__opened");
if (menu) {
  link.addEventListener("click", function () {
    menu.classList.add("active");
  },false);
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
  },false);
}
// ---------- End menu -------------