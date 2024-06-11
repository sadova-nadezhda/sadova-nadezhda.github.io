document.addEventListener('DOMContentLoaded', () => {

  // Initialize AOS
  AOS.init({ duration: 1200 });

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Section animation
  gsap.utils.toArray(".panel").forEach(panel => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing: false
    });
  });

  // Circle animation
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

  // Refresh ScrollTrigger after setting animations
  ScrollTrigger.refresh();

  // Text animation
  // const textLines = document.querySelectorAll(".text-line");

  // const textLineAnim = gsap.timeline({
  //   defaults: { duration: 1, ease: 'none' },
  //   scrollTrigger: {
  //     start: '-5%',
  //     end: 'max',
  //     scrub: 1
  //   }
  // });

  // textLineAnim
  //   .fromTo(textLines, { x: 0 }, { x: (index) => index % 2 ? -window.innerWidth / 2.5 : window.innerWidth / 2.5 }, 0)
  //   .fromTo(textLines, { x: (index) => index % 2 ? window.innerWidth / 2.5 : -window.innerWidth / 2.5 }, { x: 0, immediateRender: false }, 0.5);

  // Up animation
  gsap.utils.toArray(".up").forEach(element => {
    gsap.fromTo(element,
      { yPercent: 80, opacity: .2 },
      {
        duration: 1.2,
        delay: 1,
        opacity: 1,
        yPercent: 0,
        ease: "power",
        stagger: 0.01,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top+=200",
          scrub: 1
        }
      }
    );
  });

  // Photos animation
  gsap.utils.toArray('.clip img').forEach(photo => {
    gsap.timeline({
      scrollTrigger: {
        trigger: photo,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.75,
        toggleActions: 'play none none none',
      }
    }).fromTo(photo, { y: '-20%' }, { y: '0%' });
  });

  // Counter animation
  gsap.utils.toArray('.count-start').forEach(el => {
    el.querySelectorAll('.count').forEach(target => {
      const num = $(target).data('num');
      if (num !== undefined) {
        const count = { num: 0 };
        $(target).text(0);
        const anim = gsap.to(count, {
          duration: 2,
          num: Number(num),
          ease: 'none',
          onUpdate: () => $(target).text(Math.floor(count.num).toLocaleString())
        });

        ScrollTrigger.create({
          animation: anim,
          trigger: el,
          start: 'top 90%',
        });
      } else {
        console.error('No data-num attribute found on', target);
      }
    });
  });

  // Bricks render
  const container = document.querySelector('.bricks');
  container?.querySelectorAll('.bricks__col').forEach(column => {
    const amount = parseInt(column.getAttribute('data-amount'), 10);
    const fragment = document.createDocumentFragment();
    const images = [];

    for (let i = 0; i < amount; i++) {
      const img = document.createElement('img');
      img.src = '../img/brick.png';
      img.alt = `Image ${i + 1}`;
      img.style.opacity = 0;
      images.push(img);
      fragment.appendChild(img);
    }

    column.appendChild(fragment);

    gsap.fromTo(images,
      { y: -100, opacity: 0, rotate: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: (index) => index * 0.1,
        ease: 'bounce.out',
        rotate: () => Math.random() > 0.5 ? 180 : 0,
        scrollTrigger: {
          trigger: '.building',
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Titles
  const updateTitles = () => {
    const heroTitle = document.querySelector('.hero__title');
    const dreamTitle = document.querySelector('.dream__title');
    if (window.innerWidth < 768) {
      if (heroTitle) {
        heroTitle.innerHTML = `
          <span data-aos="fade-right">Каждый день мы видим </span>
          <span data-aos="fade-left">как дети с ДЦП </span>
          <span data-aos="fade-right">преодолевают </span>
          <span data-aos="fade-left">трудности на пути </span>
          <span data-aos="fade-right">к полноценной жизни </span>
        `;
      }
      if (dreamTitle) {
        dreamTitle.innerHTML = `
          <div data-aos="fade-right">Давай вспомним, <span>что Мир</span> </div>
          <div data-aos="fade-left"><span>полон возможностей</span> </div>
          <div data-aos="fade-right">и каждый день дети</div>
          <div data-aos="fade-left">с ДЦП делают шаги</div>
          <div data-aos="fade-right"><span>к полноценной жизни</span></div>
        `;
      }
    }
  };
  updateTitles();

});

// Canvas animation
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
let mouseMoved = false;
const pointer = { x: .5 * window.innerWidth, y: .5 * window.innerHeight };
const params = { pointsNumber: 40, widthFactor: .3, mouseThreshold: .6, spring: .4, friction: .5 };
const trail = Array.from({ length: params.pointsNumber }, () => ({ x: pointer.x, y: pointer.y, dx: 0, dy: 0 }));

const updateMousePosition = (x, y) => {
  pointer.x = x;
  pointer.y = y;
};

['click', 'mousemove', 'touchmove'].forEach(event => {
  window.addEventListener(event, e => {
    mouseMoved = true;
    updateMousePosition(e.pageX || e.targetTouches[0].pageX, e.pageY || e.targetTouches[0].pageY);
  });
});

const setupCanvas = () => {
  if (window.innerWidth < 768) {
    canvas.width = 0;
    canvas.height = 0;
    return;
  }

  const hero = document.querySelector('.hero');
  if (hero) {
    canvas.width = window.innerWidth;
    canvas.height = hero.offsetHeight;
  }
};

const update = (t) => {
  if (window.innerWidth < 768) return;

  if (!mouseMoved) {
    pointer.x = (.5 + .3 * Math.cos(.002 * t) * Math.sin(.005 * t)) * window.innerWidth;
    pointer.y = (.5 + .2 * Math.cos(.005 * t) + .1 * Math.cos(.01 * t)) * window.innerHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trail.forEach((p, i) => {
    const prev = i === 0 ? pointer : trail[i - 1];
    const spring = i === 0 ? .4 * params.spring : params.spring;
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
};

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);

let flag = true;
$(window).on('resize', function () {
  const width = $(this).width();
  if (width < 768 && flag) {
    flag = false;
    $('.js-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      variableWidth: true,
      dots: false
    });
  } else if (width >= 768 && !flag) {
    flag = true;
  }
}).resize();
