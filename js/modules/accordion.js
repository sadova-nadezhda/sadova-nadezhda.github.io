export function initializeAccordion() {
    document.querySelectorAll('.accordion-header').forEach((button, index) => {
      button.addEventListener('click', () => {
          const accordionContent = button.nextElementSibling;
          let parent = button.parentElement;
  
          button.classList.toggle('active');
          parent.classList.toggle('active');
  
          if (button.classList.contains('active')) {
              accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          } else {
              accordionContent.style.maxHeight = 0;
          }
  
          // Close other open accordion items
          document.querySelectorAll('.accordion-header').forEach(otherButton => {
              if (otherButton !== button) {
                parent = otherButton.parentElement;
                parent.classList.remove('active');
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
              }
          });
      });
  
      // Open the first accordion item
      if (index === 0) {
        const parent = button.parentElement;
        button.classList.toggle('active');
        parent.classList.toggle('active');
        button.nextElementSibling.style.maxHeight = button.nextElementSibling.scrollHeight + 'px';
      }
    });
  }