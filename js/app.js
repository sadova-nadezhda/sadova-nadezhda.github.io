let sectionTop = document.querySelector('.section_top');
let headerHeight = document.querySelector(".header").clientHeight;

window.addEventListener("load", function () {
    let preloader = document.querySelector("#preloader");
    if(preloader) {
      document.querySelector("body").style.overflow = "hidden";
      let preloaderAnim = preloader.animate([{ opacity: "1" }, { opacity: "0" }], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in",
      });
      preloaderAnim.addEventListener("finish", () => {
        preloader.style.display = "none";
        document.querySelector("body").style.overflow = "unset";
      });
    }
    const button = document.querySelector(".main-menu__burger");
    const menu = document.querySelector(".header__nav");
    const btnSearch = document.querySelector('.search-btn');
    const boxSearch = document.querySelector('.search-box');
    // Обработчик события для кнопки
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            menu.style.maxHeight = '0';
            button.classList.remove('active');
        } else {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            button.classList.add('active');
        }
    });
    // Закрытие меню при клике вне меню
    document.addEventListener('click', (event) => {
        if (event.target !== button && event.target !== menu && event.target !== btnSearch) {
            menu.classList.add('hidden');
            menu.style.maxHeight = '0';
            button.classList.remove('active');
        }
        if (event.target === btnSearch) {
            boxSearch.classList.toggle('active');
        }
        else if (!event.target.classList.contains('search-input')) {
            boxSearch.classList.remove('active');
        }
    });

    // Предотвращение закрытия меню при клике на само меню
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Section Top

    if(sectionTop) {
        sectionTop.style.marginTop = `${headerHeight}px`;
    }

    // form inputs
    const inputs = document.querySelectorAll('.form__input input');
    inputs.forEach( input => {
        input.addEventListener("focus", (e) => {
            let target = e.target;
            let label = target.previousElementSibling;
            label.style.display = 'none';
        });

        input.addEventListener("blur", (e) => {
            let target = e.target;
            let label = target.previousElementSibling;
            label.style.display = 'block';
        });
    })

    // rangeSlider
    let rangeSlider = document.querySelector('#rangeSlider');
    if (rangeSlider) {
        let filterMin = document.querySelector('#filter-min');
        let filterMax = document.querySelector('#filter-max');
        let filterMinPrice = document.querySelector('#filter-min').getAttribute('data-min-price');
        let filterMaxPrice = document.querySelector('#filter-max').getAttribute('data-max-price');
        $("#rangeSlider").ionRangeSlider({
            type: "double",
            min: filterMinPrice,
            max: filterMaxPrice,
            from: filterMin.value,
            to: filterMax.value,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function(data) {
                filterMin.setAttribute('value', data.from);
                filterMin.value = data.from;
                filterMax.setAttribute('value', data.to);
                filterMax.value = data.to;
            }
        });
        let my_range = $("#rangeSlider").data("ionRangeSlider");
        filterMin.addEventListener('input', e => {
            my_range.update({
                from: filterMin.value,
            })
        })
        filterMax.addEventListener('input', e => {
            my_range.update({
                to: filterMax.value,
            })
        })
    }

    //sliders
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
      });
    let swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let btnToggle = document.querySelectorAll('.layout__btn');
    let boxInfo = document.querySelector('.content');

    btnToggle.forEach( btn => {
        btn.addEventListener('click', (e)=> {
            let target = e.target;
            if(target.classList.contains('show')) {
                console.log('show')
                target.style.display = 'none'
                boxInfo.classList.remove('active')
                target.nextSibling.style.display = 'block'
            }
            else if(target.classList.contains('hide')) {
                console.log('hide')
                target.style.display = 'none'
                boxInfo.classList.add('active')
                target.previousSibling.style.display = 'block'
            }

        })
    })

    new AirDatepicker('#index-date', {
        range: true,
        multipleDatesSeparator: ' - ',
        buttons: [
            {
                content(dp) {
                    return 'Любые даты'
                },
                onClick(dp) {

                }
            }
        ]
    });

    new AirDatepicker('#date');

    let count = 0;
    let counter = document.querySelector('#counter');
    if (counter) {
        const minCount = counter.getAttribute('data-min');
        const maxCount = counter.getAttribute('data-max');
    }


    function updateCounter() {
      document.getElementById('counter').innerText = count;
    }

    function increment() {
      if (count < maxCount) {
        count++;
        updateCounter();
      }
    }

    function decrement() {
      if (count > minCount) {
        count--;
        updateCounter();
      }
    }

    document.querySelector('body').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('decrease')) {
            decrement()
        }
        if (target.classList.contains('increase')) {
            increment()
        }
    });


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
        .mask("+7(999)-999-99-99");

    $('input[name="code"]')
        .click(function () {
        $(this).setCursorPosition(0);
        })
        .mask("999");

    $('input[name="phone"]')
        .click(function () {
        $(this).setCursorPosition(0);
        })
        .mask("999-9999");

    $('input[name="date"]')
        .click(function () {
        $(this).setCursorPosition(0);
        })
        .mask("99 / 99 / 9999");

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
});

$(document).ready(function() {
    $('select').niceSelect();
});

window.addEventListener("resize", ()=> {
    if(sectionTop) {
        sectionTop.style.marginTop = `${headerHeight}px`;
    }
});
