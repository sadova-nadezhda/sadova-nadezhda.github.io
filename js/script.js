//preloader
document.querySelector("body").style.overflow = "hidden";
window.addEventListener("load", () => {
  let preloader = document.querySelector(".preloader");
  let preloaderAnim = preloader.animate([{ opacity: "1" }, { opacity: "0" }], {
    duration: 300,
    fill: "forwards",
    easing: "ease-in",
  });
  preloaderAnim.addEventListener("finish", () => {
    preloader.style.display = "none";
    document.querySelector("body").style.overflow = "unset";
  });
});

// ---------- Start menu -------------
let header = document.querySelector(".header");
document.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
let body = document.querySelector("body");
let link = document.querySelector(".header__icon");
let menu = document.querySelector(".header__nav");
if (menu) {
  link.addEventListener(
    "click",
    function () {
      link.classList.toggle("active");
      menu.classList.toggle("opened");
    },
    false
  );
  window.addEventListener("scroll", () => {
    if (menu.classList.contains("opened")) {
      link.classList.remove("active");
      menu.classList.remove("opened");
    }
  });
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (
      !target.classList.contains("header__nav") &&
      !target.classList.contains("header__icon")
    ) {
      link.classList.remove("active");
      menu.classList.remove("opened");
    }
  });
}
// ---------- End menu -------------


// popup close
let popup = document.querySelector("#popup");
if (popup) {
  let bigBtn = document.querySelectorAll(".big-btn");
  bigBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        popup.style.display = "block";
      }, 300);
    });
    popup.addEventListener("click", closePopup);
  });
}
function closePopup(e) {
  const target = e.target;
  if (
    target.classList.contains("popup-close") ||
    target.classList.contains("popup")
  ) {
    popup.style.display = "none";
  }
}

// /*marquee*/
// $('.marquee').marquee({
//   direction: 'left',
//   speed: 100,
//   duplicated: true
// })











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

//валидатор мыла
function isEmail(string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(string).toLowerCase());
}


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
