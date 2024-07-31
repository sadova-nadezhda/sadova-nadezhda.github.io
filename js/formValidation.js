export function validateForm() {
  // input mask tel
  $.fn.setCursorPosition = function (pos) {
    if (this.setSelectionRange) {
      this.setSelectionRange(pos, pos);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
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


  const formCheckout = document.getElementById('formCheckout');
  const formCall = document.querySelector('.modal-call form');

  function checkForm(form) {
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

  function attachListeners(form) {
    const fields = form.querySelectorAll('[required]');
    fields.forEach(field => {
      field.addEventListener('change', () => {
        checkForm(form);
      });
    });
    checkForm(form);
  }

  if (formCheckout) {
    attachListeners(formCheckout);
  }

  // if (formCall) {
  //   attachListeners(formCall);
  // }
}