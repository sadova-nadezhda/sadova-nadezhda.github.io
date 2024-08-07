// datepicker.js
export function initializeDatepicker(lg) {
  $.datepicker.setDefaults( $.datepicker.regional[ `${lg}` ] );

  Array.from(document.querySelectorAll(".js-datepicker")).forEach(e => {
    $(e).datepicker({
      startDate: "+1d",
      minDate: 0,
      format: "dd.mm.yyyy",
      container: e.hasAttribute("data-picker-container") ? e.getAttribute("data-picker-container") : "#picker-container",
      language: "ru",
      autoclose: !0,
      templates: {
        leftArrow: '<svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.8313H59M1 11.8313L11 0.831299M1 11.8313L11 22.8313" stroke="url(#paint0_linear_996_11138)" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_996_11138" x1="1" y1="12.8313" x2="59" y2="12.8313" gradientUnits="userSpaceOnUse"><stop stop-color="#3B2720"/><stop offset="1" stop-color="#F0EFE5"/></linearGradient></defs></svg>',
        rightArrow: '<svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59 11.8313H1M59 11.8313L49 0.831299M59 11.8313L49 22.8313" stroke="url(#paint0_linear_996_11140)" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_996_11140" x1="59" y1="12.8313" x2="1" y2="12.8313" gradientUnits="userSpaceOnUse"><stop stop-color="#3B2720"/><stop offset="1" stop-color="#F0EFE5"/></linearGradient></defs></svg>'
      },
      beforeShow: function(input, inst) {
        let coords = input.getBoundingClientRect();
        inst.dpDiv.css({
          marginTop: input.offsetHeight - 8 + 'px'
        });
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