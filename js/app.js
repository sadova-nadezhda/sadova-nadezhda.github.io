// Global VARS
var link = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu");
var header = document.querySelector("header");
var sectionTop = document.querySelector('.section-top');
let scroll = window.scrollY;

// Functions
function addPadTop(header, section) {
  let headerHeight = header.offsetHeight;
  section.style.marginTop = `${headerHeight}px`;
}
function boxHandler(e) {
  e.preventDefault(); 
  let currentBox = e.target.closest(".accordion__item"); 
  let currentContent = e.target.nextElementSibling; 
  currentBox.classList.toggle("active"); 
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let onChange = config.onChange,
  lastIndex = 0,
  tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
    let i = tl.closestIndex();
    if (lastIndex !== i) {
        lastIndex = i;
        onChange(items[i], i);
    }
  }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
  length = items.length,
  startX = items[0].offsetLeft,
  times = [],
  widths = [],
  spaceBefore = [],
  xPercents = [],
  curIndex = 0,
  indexIsDirty = false,
  center = config.center,
  pixelsPerSecond = (config.speed || 1) * 100,
  snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), 
  timeOffset = 0,
  container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
  totalWidth,
  getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
  populateWidths = () => {
    let b1 = container.getBoundingClientRect(), b2;
    items.forEach((el, i) => {
      widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
      b2 = el.getBoundingClientRect();
      spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
      b1 = b2;
    });
    gsap.set(items, { 
      xPercent: i => xPercents[i]
    });
    totalWidth = getTotalWidth();
  },
  timeWrap,
  populateOffsets = () => {
    timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
    center && times.forEach((t, i) => {
      times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
    });
  },
  getClosest = (values, value, wrap) => {
    let i = values.length,
      closest = 1e10,
      index = 0, d;
    while (i--) {
      d = Math.abs(values[i] - value);
      if (d > wrap / 2) {
        d = wrap - d;
      }
      if (d < closest) {
        closest = d;
        index = i;
      }
    }
    return index;
  },
  populateTimeline = () => {
    let i, item, curX, distanceToStart, distanceToLoop;
    tl.clear();
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    timeWrap = gsap.utils.wrap(0, tl.duration());
  },
  refresh = (deep) => {
    let progress = tl.progress();
    tl.progress(0, true);
    populateWidths();
    deep && populateTimeline();
    populateOffsets();
    deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
  },
  proxy;
  gsap.set(items, {x: 0});
  populateWidths();
  populateTimeline();
  populateOffsets();
  window.addEventListener("resize", () => refresh(true));
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    if (time < 0 || time > tl.duration()) {
      vars.modifiers = {time: timeWrap};
    }
    curIndex = newIndex;
    vars.overwrite = true;
    gsap.killTweensOf(proxy);    
    return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
  }
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.closestIndex = setCurrent => {
    let index = getClosest(times, tl.time(), tl.duration());
    if (setCurrent) {
      curIndex = index;
      indexIsDirty = false;
    }
    return index;
  };
  tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  tl.next = vars => toIndex(tl.current()+1, vars);
  tl.previous = vars => toIndex(tl.current()-1, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  if (config.draggable && typeof(Draggable) === "function") {
    proxy = document.createElement("div")
    let wrap = gsap.utils.wrap(0, 1),
      ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX,
      align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
      syncIndex = () => tl.closestIndex(true);
    typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
    draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode,
      type: "x",
      onPressInit() {
        let x = this.x;
        gsap.killTweensOf(tl);
        startProgress = tl.progress();
        refresh();
        ratio = 1 / totalWidth;
        initChangeX = (startProgress / -ratio) - x;
        gsap.set(proxy, {x: startProgress / -ratio});
      },
      onDrag: align,
      onThrowUpdate: align,
      overshootTolerance: 0,
      inertia: true,
      snap(value) {
        if (Math.abs(startProgress / -ratio - this.x) < 10) {
          return lastSnap + initChangeX
        }
        let time = -(value * ratio) * tl.duration(),
          wrappedTime = timeWrap(time),
          snapTime = times[getClosest(times, wrappedTime, tl.duration())],
          dif = snapTime - wrappedTime;
        Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
        lastSnap = (time + dif) / tl.duration() / -ratio;
        return lastSnap;
      },
      onRelease() {
        syncIndex();
        draggable.isThrowing && (indexIsDirty = true);
      },
      onThrowComplete: syncIndex
    })[0];
    tl.draggable = draggable;
  }
  tl.closestIndex(true);
  lastIndex = curIndex;
  onChange && onChange(items[curIndex], curIndex);
  return tl;
}

// AOS animate
AOS.init({
  duration: 1200,
});

window.addEventListener("load", function () {
  // header
  if (menu) {
    link.addEventListener("click",() => {
        link.classList.toggle("active");
        menu.classList.toggle("open");
      },
      false
    );
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
      if(header) {
        scroll = window.scrollY;
        header.classList.toggle("scroll", scroll > 50);
      }
    });
    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        !target.classList.contains("header__menu") &&
        !target.classList.contains("header__burger") 
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
    scroll = window.scrollY;
    header.classList.toggle("scroll", scroll > 50);
  }

  // accordion
  const accordionItems = Array.from(document.querySelectorAll(".accordion__item")); 
  accordionItems.forEach((item) => {
    item.addEventListener("click", boxHandler);
  });

  // sliders
  var swiperSeminar = new Swiper("#seminarSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    height: 'auto',
    watchSlidesVisibility: true,
    effect: 'slide',
    centeredSlides: true,
    keyboard: {
      enabled: true
    },

    // Enabled autoplay mode
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // },

    // navigation
    navigation: {
      nextEl: ".seminar-button-next",
      prevEl: ".seminar-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      640: {
        spaceBetween: 16
      }
    }
  });

  // brands
  const wrapper = document.querySelector(".brands__cards");
  if(wrapper) {
    const boxes = gsap.utils.toArray(".brands__card");
    gsap.registerPlugin(Draggable);
    const loop = horizontalLoop(boxes, { repeat: -1, draggable: true });
    wrapper.addEventListener("mouseenter", () => loop.pause());
    wrapper.addEventListener("mouseleave", () =>
      loop.reversed() ? loop.reverse() : loop.play()
    );
  }

  // tabs
  const tabsButtons = document.querySelectorAll('.tabs__button');

  if(tabsButtons) {
    tabsButtons.forEach(btn => {
      btn.addEventListener('click', () => {
  
        const prevActiveItem = document.querySelector('.tabs__item.active');
        const prevActiveButton = document.querySelector('.tabs__button.active');
  
        if (prevActiveButton) {
          prevActiveButton.classList.remove('active');
        }
        
        if (prevActiveItem) {
          prevActiveItem.classList.remove('active');
        }
  
        const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
        const nextActiveItem = document.querySelector(nextActiveItemId);
  
        btn.classList.add('active');
        nextActiveItem.classList.add('active');
      });
    })
  }

  // form
  let numInputs = document.querySelectorAll('.number')
  numInputs.forEach( input => {
    input.addEventListener('input', (e) => {
      input.value = input.value.replace(/\D/g, '');
    })
  })

  // file
  const inputs = document.querySelectorAll(".inputfile");
  if(inputs) {
    inputs.forEach((input) => {
      const label = input.nextElementSibling,
            labelVal = label.querySelector("span").innerHTML;
  
      input.addEventListener("change", function (e) {
        const fileName =
          this.files && this.files.length > 1
            ? (this.getAttribute("data-multiple-caption") || "").replace(
                "{count}",
                this.files.length
              )
            : e.target.value.split("\\").pop();
  
        label.querySelector("span").innerHTML = fileName ? fileName : labelVal;
      });
    });
  }

  // mask phone
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
});

window.addEventListener("resize", () => {
  if (sectionTop && header) {
    addPadTop(header, sectionTop)
  }
});

