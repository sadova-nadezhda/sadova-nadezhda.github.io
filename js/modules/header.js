// header.js
export function addPadTop(header, section) {
  let headerHeight = header.offsetHeight;
  section.style.marginTop = `${headerHeight}px`;
}

export function toggleMenu(menu, link) {
  link.addEventListener("click", () => {
    menu.classList.toggle("open");
  }, false);

  document.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains('header__close')) {
      menu.classList.remove("open");
    }
  });
}

export function menuLg() {
  let menuLg = document.querySelector('.menu_lg');

  menuLg.addEventListener('mouseover', (e) => {
    let target = e.target.parentElement;
    if (target.classList.contains('drop_btn')) {
      document.querySelectorAll('.drop_btn.active').forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
}