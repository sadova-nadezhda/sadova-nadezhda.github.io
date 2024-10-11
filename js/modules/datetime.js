// datepicker.js
export function initializeDatepicker(lg) {
  $.datepicker.setDefaults( $.datepicker.regional[ `${lg}` ] );

  Array.from(document.querySelectorAll(".js-datepicker")).forEach(e => {
    $(e).datepicker({
      startDate: "+1d",
      minDate: 1,
      format: "dd.mm.yyyy",
      container: e.hasAttribute("data-picker-container") ? e.getAttribute("data-picker-container") : "#picker-container",
      language: "ru",
      autoclose: !0,
      beforeShow: function(input, inst) {
        let coords = input.getBoundingClientRect();
        inst.dpDiv.css({
          marginTop: input.offsetHeight - 8 + 'px'
        });
        inst.dpDiv.addClass("booking-datepicker");
      }
    }).on("show", function (t) {
      e.classList.add("datepicker-shown")
    }).on("hide", function (t) {
      e.classList.remove("datepicker-shown")
    }).on("changeDate", function (t) {
      $(e).trigger("blur")
    })
  });
}

export function initializeTime() {
  Array.from(document.querySelectorAll(".js-time-dropdown")).forEach((e => {
    const t = e.querySelector(".booking__common-search-input"),
        n = Array.from(e.querySelectorAll(".booking__common-search-dropdown-checkbox-input")),
        r = e.querySelector(".booking__common-search-dropdown"), i = () => {
            const e = n.find((e => e.checked));
            e && (t.value = e.value)
        };
    i(), t.addEventListener("focus", (e => {
        r.classList.add("active")
    }));
    t.addEventListener("blur", (e => {
        r.classList.remove("active")
    }));
    document.addEventListener("click", (e => {
        e.target.matches(".booking__common-search-dropdown") || e.target.closest(".booking__common-search-dropdown") || e.target.matches(".booking__common-search-input") || e.target.closest(".booking__common-search-input") || r.classList.remove("active")
    }));
    n.forEach((e => {
      e.addEventListener("change", (() => {
          i()
      }))
    }))
  }));
}

export function initializeTimepicker() {
  Array.from(document.querySelectorAll(".js-timepicker")).forEach(time => { 
    $(time).timepicker({
      timeFormat: 'H:mm', // 24-часовой формат
      interval: 60,
      minTime: '00:00', 
      maxTime: '23:59', 
      defaultTime: '11:00',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    });
  });
}

export function initializeDatepicker2(lg) {
  $.datepicker.setDefaults( $.datepicker.regional[ `${lg}` ] );
  // Получение текущей даты
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // Январь - это 0, поэтому прибавляем 1
  var yyyy = today.getFullYear();
  
  var formattedToday = dd + '.' + mm + '.' + yyyy; // Форматируем дату как "дд.мм.гггг"
  
  // Устанавливаем сегодняшнюю дату по умолчанию в инпут
  $('.js-datepicker2').val(formattedToday);

    Array.from(document.querySelectorAll(".js-datepicker2")).forEach( date => { 
    $( date ).datepicker({
      startDate: "+1d",
      minDate: 0,
      format: "dd.mm.yyyy",
      language: "ru",
      autoclose: !0,
      templates:{
            leftArrow: '<i class="material-icons icon-30">keyboard_arrow_left</i>',
            rightArrow: '<i class="material-icons icon-30">keyboard_arrow_right</i>',
        },
    });
  });
}