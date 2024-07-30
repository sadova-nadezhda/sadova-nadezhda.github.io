// formValidation.js
export function validateForm() {
  const form = document.getElementById('formCheckout');

  function checkForm() {
    const fields = form.querySelectorAll('[required]');
    const submitButton = form.querySelector('.submitButton');
    let allFilled = true;

    fields.forEach(field => {
      if (field.type === 'checkbox') {
        if (!field.checked) {
          allFilled = false;
        }
      } else if (!field.value.trim()) {
        allFilled = false;
      }
    });

    submitButton.disabled = !allFilled;
  }

  if (form) {
    const fields = form.querySelectorAll('[required]');
    fields.forEach(field => {
      field.addEventListener('change', checkForm);
    });
    checkForm();
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
}
