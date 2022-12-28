// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

window.addEventListener('load', function() {

  let body = document.querySelector('body');
  let burger = document.querySelector('.wrapper__burger');
  let menu = document.querySelector('.header');

  if(menu){
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      menu.classList.toggle('open');
    }, false);
    window.addEventListener('scroll', () => {
      if (menu.classList.contains('open')) {
        burger.classList.remove('active');
          menu.classList.remove('open');
      }
    })
    document.addEventListener('click', e => {
      let target = e.target;
      if (!(target.classList.contains('header')) && !(target.classList.contains('wrapper__burger'))) {
          burger.classList.remove('active');
          menu.classList.remove('open');
      }
    })
  }

  let password = document.querySelectorAll('.pass__icons');
  password.forEach( pass => {
    let eyeCLs = pass.querySelector('.icon ');
    let eyeOpn = pass.querySelector('.icon-view');
    let inpPass = pass.closest('.input__box').querySelector('input');
    if(pass){
      pass.addEventListener('click', () =>{
        inpPass.classList.toggle('view');
        if(inpPass.classList.contains('view')){
          inpPass.type = 'text';
          eyeOpn.style.display = 'block';
          eyeCLs.style.display = 'none';
        } else {
          inpPass.type = 'password';
          eyeOpn.style.display = 'none';
          eyeCLs.style.display = 'block';
        }
      });
    }
  });

  let profileForm = document.querySelector('.profile__form');
  let intPass = document.querySelectorAll("input[type='password']"); 
  
  if(profileForm) {
    let newPass = profileForm.querySelector('#new__password');
    let repeatPass = profileForm.querySelector('#repeat__password');
    let updateBtn = profileForm.querySelector('.profile__button');
    intPass.forEach( elem => {
      elem.addEventListener('change', () => {
        if(newPass.value == repeatPass.value) {
          updateBtn.removeAttribute('disabled');
        }
      })
    })
  };

  let accordion = this.document.querySelectorAll('.accordion__header');
  accordion.forEach( acc => {
    let titleAcc = acc.querySelector('h5');
    titleAcc.addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = acc.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });

});