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
    const preloaderForm = document.querySelector('.preloader-form');
    
    function checkForm(form) {
      const fields = form.querySelectorAll('[required]');
      const errorField = form.querySelector('.form-error');
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
    
      if (errorField) {
        // Скрыть ошибку, если все поля заполнены, иначе показать
        errorField.style.display = allFilled ? 'none' : 'block';
      }
    
      if (submitButton) {
        submitButton.disabled = !allFilled; // Заблокировать или разблокировать кнопку
      }
    }
    
    function attachListeners(form) {
      const fields = form.querySelectorAll('[required]');
      const errorField = form.querySelector('.form-error');
      const submitButton = form.querySelector('.submitButton');
    
      if (errorField && submitButton) {
        // Изначально скрыть ошибку и разблокировать кнопку
        errorField.style.display = 'none';
        submitButton.disabled = false;
      }
    
      fields.forEach(field => {
        const eventType = field.type === 'checkbox' ? 'change' : 'input';
        field.addEventListener(eventType, () => {
          checkForm(form);
        });
      });
    
      submitButton?.addEventListener('click', (event) => {
        checkForm(form);
    
        // Если все поля заполнены
        if (!submitButton.disabled) {
          // Добавить класс active на preloaderForm
          preloaderForm?.classList.add('active');
    
          // Имитация отправки данных (можно заменить на реальный процесс отправки)
          setTimeout(() => {
            // Удалить класс active после успешной отправки данных
            preloaderForm?.classList.remove('active');
            
            // Можно добавить логику для очищения формы, если нужно
            form.reset(); 
          }, 2000); // Задержка для имитации отправки данных (2 секунды)
        }
      });
    }
    
    if (formCheckout) {
      attachListeners(formCheckout);
    }
    
    if (formCall) {
      attachListeners(formCall);
    }
    
}