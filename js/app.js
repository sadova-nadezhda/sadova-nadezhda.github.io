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