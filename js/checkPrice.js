function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
} 

export function calcCheckPrice() {
  let sum = 0;
  const checkPrice = document.querySelectorAll('.checkout__price span');
  const checkTotal = document.querySelector('.checkout__total span');

  if (checkPrice && checkTotal) {
    checkPrice.forEach(price => {
      sum += parseInt(price.textContent.replace(/\D/g, ""), 10);
    });
    checkTotal.textContent = numberWithSpaces(sum);
  }
}

export function calcBookPrice(){
  const bookingCards = document.querySelectorAll('.booking__card');
  const bookingNext = document.querySelector('.booking__next');
  
  if (bookingCards && bookingNext) {
    bookingNext.classList.add('disabled');
    
    bookingCards.forEach(card => {
      card.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('booking__choose')) {
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            target.textContent = 'Выбрано';
          } else {
            target.textContent = 'Выбрать';
          }
          card.classList.toggle('selected');
  
          // Проверка, есть ли хотя бы одна выбранная карточка
          const selectedCardExists = document.querySelector('.booking__card.selected') !== null;
  
          if (selectedCardExists) {
            bookingNext.classList.remove('disabled');
          } else {
            bookingNext.classList.add('disabled');
          }
        }
      });
    });
  }  
}