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
        if (event.target !== button && event.target !== menu) {
            menu.classList.add('hidden');
            menu.style.maxHeight = '0';
            button.classList.remove('active');
        }
    });
    // Предотвращение закрытия меню при клике на само меню
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

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
