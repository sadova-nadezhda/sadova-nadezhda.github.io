window.addEventListener("load", function () {
  var teachersSwiper = new Swiper(".teachersSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".teachers-button-next",
      prevEl: ".teachers-button-prev",
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   981: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    // },
  });
  var resultsSwiper = new Swiper(".resultsSwiper", {
    navigation: {
      nextEl: ".results-button-next",
      prevEl: ".results-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
  /*duplicated logo clients*/
  var text = $('.marquee').text();
  for (var i = 0; i < 5; i++) {
    text += ' ' + text;
  }
  $('.marquee').html(text);

  /*marquee*/
  $('.marquee').marquee({
    direction: 'left',
    speed: 100,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    startVisible: true,
    gap: 20,
  })

  $('.way').waypoint({
    handler: function() {
        $(this.element).addClass("way--active");
    },
    offset: '80%'
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
});
