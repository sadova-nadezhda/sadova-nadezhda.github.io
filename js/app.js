
let percent = document.querySelector('.test__percent');
let bar = document.querySelector('.test__bar .bar');
let resultBtn = document.querySelector('.test__res');
let total = document.querySelector('.test__passed span');
let slide = document.querySelectorAll('.test__slide');
let btnPrev = document.querySelector('.test_prev');
let btnNext = document.querySelector('.test_next');

let time = document.querySelector('.time');
let timeMinut = 20;

window.addEventListener('load', function() {

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

  $('.inner__slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.5" y="0.5" width="39" height="39" rx="4.5" transform="matrix(-1 0 0 1 39 0)" fill="#48A9A6" stroke="#B4C6D0"/><path d="M20.6667 27.6327L19.475 26.5903L25.7917 20.898L9 20.898L9 19.4014L25.7917 19.4014L19.475 13.7345L20.6667 12.6667L29 20.1497L20.6667 27.6327Z" fill="#F9F8FE"/></svg></button>',
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="39" height="39" rx="4.5" fill="#48A9A6" stroke="#B4C6D0"/><path d="M19.3333 27.6327L20.525 26.5903L14.2083 20.898L31 20.898L31 19.4014L14.2083 19.4014L20.525 13.7345L19.3333 12.6667L11 20.1497L19.3333 27.6327Z" fill="#F9F8FE"/></svg></button>',
    dots: false,
    fade: true,
    asNavFor: '.inner__slider',
    responsive: [
      {
          breakpoint: 600,
          settings: {
            arrows: false
          }
      },
  ]
  });
  $('.inner__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.inner__slider_main',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    // centerMode: true,
    responsive: [
      {
          breakpoint: 1100,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
      },
  ]
  });
  /*form question*/
  $('.test__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    fade: true,
    arrows: true,
    nextArrow: '.test_next',
    prevArrow: '.test_prev', 
    dots: false,
    adaptiveHeight: true
  });
  progressBarUpdate(0);
  $('.test__slider').each(function(){
    let $slickElement = $(this);
    $slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
      progressBarUpdate(currentSlide);
      let slideLast = slide[slide.length - 1] ;
      if(slideLast) {
        slideLast.classList.add('slide_last');
      }
      if (btnPrev && btnNext) {
        $('.test__slider').on('afterChange', function() {
          if (!(slideLast.classList.contains('slick-active'))) {
            btnNext.style.display = 'flex';
            resultBtn.style.display = 'none';
          } else {
            btnNext.style.display = 'none';
            resultBtn.style.display = 'block';
          }
          $('.test__slider').slick('setPosition');
        });
      }
    });
  });
  countdownTimer();
});

function progressBarUpdate(currentSlide) {
  let allSlide = $('.test__slider').find('.test__slide').length;
  let indexSlide = (currentSlide ? currentSlide : 0) + 1;			   
  let progress = Math.ceil((indexSlide*100)/allSlide);

  percent.textContent = progress + '%';
  total.textContent = indexSlide + ' из ' + allSlide;

  if(allSlide) {
    resultBtn.removeAttribute('disabled');
  } else {
    resultBtn.setAttribute('disabled','disabled');
  }

  $(bar).each(function () {
    $(this).animate(
      {
        width: progress + "%",
      },1000
    );
  });

}

function countdownTimer() {
  let deadlineTime = new Date( new Date().getTime() + (timeMinut * 60 * 1000) ); //установить таймер на минуты
  let Timer = setInterval(function() {
    let nowDate = new Date().getTime();
    var residue = deadlineTime - nowDate;
    let hour   = Math.floor( (residue % (1000 * 60 **3)) / (1000 * 60**2) ); 
    let minutes = Math.floor( (residue % (1000 * 60**2)) / (1000 * 60) );
    let seconds = Math.floor( (residue % (1000 * 60)) / 1000 );
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(hour)
    console.log(minutes)
    console.log(seconds)
    time.innerHTML = hour + ':' + minutes + ':' + seconds;
    if (residue < 0) {
      clearInterval(Timer);
      alert("Время истекло!");
     }
  }, 1000);
}