document.addEventListener('DOMContentLoaded', () => {
    
  // AOS animate
  AOS.init({
    duration: 1200,
  });

  // GSAP

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // section animation

  gsap.utils.toArray(".panel").forEach((panel, i) => {
    let trigger = ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });

  // circle animation

  gsap.to(".circle", {
    width: "600vmax",
    height: "600vmax",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".room",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave")
    }
  });

  // Обновление ScrollTrigger после настройки анимации
  ScrollTrigger.refresh();

  // text animation

  const textLines = document.querySelectorAll(".text-line");

  const textLineAnim = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'none'
    },  
    scrollTrigger: {    
      start: '-5%',
      end: 'max',
      scrub: 1
    }
  });

  textLineAnim
  .fromTo(textLines, {
    x: 0
  }, {
    x: (index, target) => index % 2 ? (-window.innerWidth / 2) : (window.innerWidth / 2)
  }, 0)
  .fromTo(textLines, {
    x: (index, target) => index % 2 ? (window.innerWidth / 2) : (-window.innerWidth / 2)
  }, {
    x: 0,
    immediateRender: false
  }, 0.5); 

  // up animation

  gsap.utils.toArray(".up").forEach(element => {
  gsap.fromTo(element, 
    {
    yPercent: 80,
    opacity: .2,
      },         
    {
    duration: 0.8,
    delay: 1,
    opacity: 1,
    yPercent: 0,
    ease: "power",
    stagger: 0.02,
    
  scrollTrigger: {
      trigger: element,
      start: "top 100%",
      end: "bottom top",
      scrub: 0.5,
      // markers: true
      }
    });
  });

  // photos animation

  const photos = gsap.utils.toArray('.clip img');
  photos.forEach(photo => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: photo,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.75,
        toggleActions: 'play none none none',
      },
    });
    tl.fromTo(
      photo,
      { y: '-20%' },
      { y: '0%' }
    );
  });

  // counter animation

  gsap.utils.toArray('.count-start').forEach(el => {
    let targetArr = el.querySelectorAll('.count');
    
    targetArr.forEach(target => {
      let num = $(target).data('num');
      if (num === undefined) {
        console.error('No data-num attribute found on', target);
        return;
      }
      
      let count = { num: 0 }; 
      $(target).text(0);

      let anim = gsap.to(count, {
        duration: 2,
        num: Number(num),
        ease: 'none',
        onUpdate: () => {
          $(target).text(Math.floor(count.num).toLocaleString());
        }
      });

      ScrollTrigger.create({
        animation: anim,
        trigger: el,
        start: 'top 90%',
        // markers: true 
      });
    });
  });

  // bricks render

  const container = document.querySelector('.bricks');
  const columns = container.querySelectorAll('.bricks__col');

  if (columns) {
      columns.forEach(column => {
          const amount = parseInt(column.getAttribute('data-amount'), 10);
          const fragment = document.createDocumentFragment();
          const images = [];

          for (let i = 0; i < amount; i++) {
              const img = document.createElement('img');
              img.src = '../img/brick.png';
              img.alt = 'Image ' + (i + 1);
              img.style.opacity = 0;
              images.push(img);
              fragment.appendChild(img);
          }

          column.appendChild(fragment);

          // bricks animation
          gsap.fromTo(images, 
              { y: -100, opacity: 0 }, 
              { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.5, 
                  delay: (index) => index * 0.1, 
                  ease: 'bounce.out',
                  scrollTrigger: {
                      trigger: '.building',
                      start: "top center",
                      toggleActions: "play none none reverse"
                  }
              }
          );
      });
  }
  
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
	  ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    ctx.strokeStyle = '#F12670';

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}