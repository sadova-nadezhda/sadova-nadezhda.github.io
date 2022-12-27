// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

window.addEventListener('load', function() {

  let password = document.querySelector('.cabinet__pass');
  let eyeCLs = password.querySelector('.icon ');
  let eyeOpn = password.querySelector('.icon-view');
  let inpPass = password.closest('.cabinet__input').querySelector('input');
  let btn = document.querySelector('.cabinet__button');

  if(password){
    password.addEventListener('click', () =>{
      inpPass.classList.toggle('view');
      if(inpPass.classList.contains('view')){
        inpPass.type = 'text';
      } else {
        inpPass.type = 'password';
      }
    });
  }
});