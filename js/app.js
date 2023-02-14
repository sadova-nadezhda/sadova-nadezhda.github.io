/*header scroll*/
let header = document.querySelector('.header');
/*scroll up*/
let scrollBtn = document.querySelector('.scoll_up');

document.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if(scroll > 0) {
         header.classList.add('scroll');
    } else{
        header.classList.remove('scroll');
    }

    if(scroll > 1000) {
      scrollBtn.classList.add('active');
    } else{
        scrollBtn.classList.remove('active');
    }
});

/*burger menu*/
let body = document.querySelector('body');
let link = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

if(menu){
  link.addEventListener('click', function () {
    link.classList.toggle('active');
    menu.classList.toggle('opened');
  }, false);
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
  document.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('header__nav')) && !(target.classList.contains('header__burger'))) {
        link.classList.remove('active');
        menu.classList.remove('opened');
    }
  })
}

/*Show card services text*/
let cardMore = document.querySelectorAll('.card__more');
if(cardMore) {
  cardMore.forEach( elem => {
    elem.addEventListener('click', (e) => {
      let target = e.target;
      elem.classList.toggle('active');
      let cardTxt = target.closest('.card').querySelector('.card__txt');
      let cardImg = target.closest('.card').querySelector('.card__img');
      if(elem.classList.contains('active')) {
        cardTxt.classList.add('active');
        cardImg.classList.add('active');
      } else {
        cardTxt.classList.remove('active');
        cardImg.classList.remove('active');
      }
    });
  });
}

/*Swiper Services*/
var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1540: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/*Swiper Reviews*/
var swiper2 = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
  startVisible: true,
  duplicated: true
})

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


/*popup*/
let popup = document.querySelector("#popup");
if (popup) {
  let popupBtn = document.querySelectorAll(".popup__btn");
  $(popupBtn).each( function() {
    $(this).on('click', () => {
      $(popup).fadeIn(400);
    })
  });
  $(popup).click(function(e) {
    const target = e.target;
    if (
      $(target).hasClass("popup_close") ||
      $(target).hasClass("popup")
    ) {
      $(popup).fadeOut(400);
    }
  });
}

/*canvas*/
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const MAX_PARTICLES = 200;

const c2 = document.getElementById('canvas-2');
const ctx2 = c2.getContext('2d');
const MAX_PARTICLES2 = 200;

const mouse = {
  x: 0,
  y: 0 };


c.width = window.innerWidth;
c.height = window.innerHeight;



c2.width = document.querySelector('.offer__container').offsetWidth;
c2.height = document.querySelector('.offer__container').offsetHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(p1, p2) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

class Particle {
  constructor() {
    this.x = random(0, c.width);
    this.y = random(0, c.height);
    this.x = random(0, c2.width);
    this.y = random(0, c2.height);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
    this.size = random(1, 3);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) {
      this.x = c.width;
      this.x = c2.width;
    }
    if (this.x > c.width || this.x > c2.width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = c.height;
      this.y = c2.height;
    }
    if (this.y > c.height || this.y > c2.height) {
      this.y = 0;
    }
  }}


const particles = [];

for (let i = 0; i < MAX_PARTICLES; i++) {
  particles.push(new Particle());
}
for (let i = 0; i < MAX_PARTICLES2; i++) {
  particles.push(new Particle());
}

function update() {
  particles.forEach(particle => {
    particle.update();
  });
}

function render() {
  particles.forEach(particle => {
    particles.forEach(particle2 => {
      const d = distance(particle, particle2);
      if (d < 100) {
        ctx.fillStyle = '#DCBB63';
        ctx.strokeStyle = '#DCBB63';
        ctx2.fillStyle = '#DCBB63';
        ctx2.strokeStyle = '#DCBB63';
        const d2 = distance(mouse, particle);
        if (d2 < 300) {
          ctx.globalAlpha = 1000 / d2 / 100;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();

          ctx2.globalAlpha = 1000 / d2 / 100;
          ctx2.beginPath();
          ctx2.moveTo(particle.x, particle.y);
          ctx2.lineTo(particle2.x, particle2.y);
          ctx2.stroke();
        }
      }
    });
    ctx.fillStyle = '#DCBB63';
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size/2 , 0, Math.PI * 2, true);
    ctx.fill();

    ctx2.fillStyle = '#DCBB63';
    ctx2.beginPath();
    ctx2.arc(particle.x, particle.y, particle.size/2 , 0, Math.PI * 2, true);
    ctx2.fill();
  });
}

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx2.clearRect(0, 0, c.width, c.height);
  update();
  render();
}

function init() {
  mouse.x = c.width / 1;
  mouse.y = c.height / 3;
  mouse.x = c2.width / 1;
  mouse.y = c2.height / 3;
  loop();
}

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', e => {
  c.width = window.innerWidth;
  c2.width = window.innerWidth;
});

init();
