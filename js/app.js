let sectionTop = document.querySelector('.section_top');
let headerHeight = document.querySelector(".header").clientHeight;
const windowInnerWidth = window.innerWidth;
let layoutText = $('.layout__desc .layout__text').clone()

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
    let swiper = new Swiper(".infoSwiper-sm", {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
      });
    let swiper2 = new Swiper(".infoSwiper", {
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
            nextEl: ".info-button-next",
            prevEl: ".info-button-prev",
        },
    });

    let swiper3 = new Swiper(".pricesSwiper", {
        slidesPerView: 2,
        spaceBetween: 8,
        navigation: {
            nextEl: ".prices-button-next",
            prevEl: ".prices-button-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            700: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1100: {
                slidesPerView: 6,
                spaceBetween: 8,
            },
        },
      });

    let btnToggle = document.querySelectorAll('.layout__btn');

    btnToggle.forEach( btn => {
        btn.addEventListener('click', (e)=> {
            let target = e.target;
            if(target.classList.contains('show')) {
                let boxInfo = target.closest('.layout__previw').querySelector('.content');
                boxInfo.classList.remove('active')
                target.nextElementSibling.style.display = 'block'
                target.style.display = 'none'
            }
            else if(target.classList.contains('hide')) {
                let boxInfo = target.closest('.layout__previw').querySelector('.content');
                boxInfo.classList.add('active')
                target.previousElementSibling.style.display = 'block'
                target.style.display = 'none'
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

    new AirDatepicker('#date', {
        dateFormat: 'dd / MM / yyyy',
    });
    new AirDatepicker('#date-start', {
        dateFormat: 'dd / MM / yyyy',
    });
    new AirDatepicker('#date-end', {
        dateFormat: 'dd / MM / yyyy',
    });

    $(document).ready(function() {
        $('.js-multiple').select2({
            width: '100%',
            // dropdownAutoWidth : true,
            selectionCssClass: "custom-container",
            dropdownCssClass: "loc-dropdown",
        });
    });


    const inputs = document.querySelectorAll('.js-input');
    inputs.forEach( input => {
        input.addEventListener("focus", (e) => {
            let target = e.target;
            let label = target.closest('.form__input').querySelector('label');
            label.style.display = 'none';
        });

        input.addEventListener("blur", (e) => {
            let target = e.target;
            let label = target.closest('.form__input').querySelector('label');
            label.style.display = 'block';
        });
    })

    $('.js-multiple').on('select2:opening', function (e) {
        let target = e.target;
        let label = target.closest('.form__input').querySelector('label');
        label.style.display = 'none';
     });

     $('.js-multiple').on('select2:closing', function (e) {
        let target = e.target;
        let label = target.closest('.form__input').querySelector('label');
        label.style.display = 'block';
     });


    let counter = this.document.querySelector('#counter')
    if (counter) {
        let displayCout = document.querySelector('#counter span');
        let min = counter.getAttribute('data-min');
        let max = counter.getAttribute('data-max');
        let count= 1;

        let productCounter = {
            incrementCounter: function(){
                if(count<max){
                    return count = count + 1;
                }else{
                    return count;
                }
            },
            decrementCounter: function(){
                  if (count>min){
                  return count = count - 1;
                } else {
                  return count=1;
                }
            }

        };

        document.querySelector('.increase').onclick=function(){
            productCounter.incrementCounter();
            displayCout.innerHTML=count
            document.querySelector('.input__tourists').value = count;
        }
        document.querySelector('.decrease').onclick=function(){
            productCounter.decrementCounter()
            displayCout.innerHTML = count;
            document.querySelector('.input__tourists').value = count;
        }
    }

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    //unwrap / wrap
    if(windowInnerWidth <= 600) {
        $('.layout__row').unwrap()
        $('.layout__box').unwrap()
        $('.layout__content').unwrap()
        $('.layout__desc .layout__text').html($('.layout__about').clone().attr('class', 'layout__about_top'))
    }
    else {
        $('.layout__row').wrapAll( "<div class='layout__wrapper' />");
        $('.layout__box').wrapAll( "<div class='layout__aside'  />");
        $('.layout__content').wrapAll( "<div class='layout__row layout__contents'  />");
        $('.layout__desc .layout__text').replaceWith(layoutText)
    }


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

        let popup = document.querySelector("#popup");
        if (popup) {
            let popupBtn = document.querySelectorAll(".popup-btn");
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


    // $('input[name="date"]')
    //     .click(function () {
    //     $(this).setCursorPosition(0);
    //     })
    //     .mask("99 / 99 / 9999");

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
    $('.nice-select').niceSelect();
});

window.addEventListener("resize", ()=> {
    if(sectionTop) {
        sectionTop.style.marginTop = `${headerHeight}px`;
    }
    if(windowInnerWidth <= 600) {
        $('.layout__row').unwrap()
        $('.layout__box').unwrap()
        $('.layout__content').unwrap()
        $('.layout__desc .layout__text').html($('.layout__about').clone().attr('class', 'layout__about_top'))
    }
    else {
        $('.layout__row').wrapAll( "<div class='layout__wrapper' />");
        $('.layout__box').wrapAll( "<div class='layout__aside'  />");
        $('.layout__content').wrapAll( "<div class='layout__row layout__contents'  />");
        $('.layout__desc .layout__text').replaceWith(layoutText)
    }
});
