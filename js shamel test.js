  let data = {
    "questions": 
    [
     {
       "question" : "1. Question Text Example",
       "answers": {
        "answer1" : 'ДА',
        "answer2" : 'НЕТ',
      },
       "txt": "Келесі әлеуметтік санаттардың біріне жату:"
     },
     {
      "question" : "2. Question Text Example",
      "answers": {
        "answer1" : 'ДА',
        "answer2" : 'НЕТ',
      },
      "txt": ""
     },
     {
        "question" : "3. Question Text Example",
        "answers": {
          "answer1" : 'ДА',
          "answer2" : 'НЕТ',
        },
          "txt": ""
     },
    {
        "question" : "4. Question Text Example",
        "answers": {
          "answer1" : 'ДА',
          "answer2" : 'НЕТ',
        },
          "txt": ""
    }
    ]
  };
  
  let testHtml = '';
  let sliderTest = document.querySelector('.test__slider');
  let total = document.querySelector('.test__result span');
  let bar = document.querySelector('.test__bar .bar');
  let resultBtn = document.querySelector('.test__res');

   /*test*/
   function createItem(item,qInd) {
    console.log(item.txt)
    let txtTest = '';
    if(item.txt) {
      txtTest = `<div class="test__txt">${item.txt}</div>`;
    }
    let answerTest = '';
    let answerData = item.answers;
    for (key in answerData) {
      answerTest+= `<label for="answer-${qInd+"-"+key}" class="test__answer"><input value="${key}" type="radio" name="radio_${qInd}" id="answer-${qInd+"-"+key}"><span>${answerData[key]}</span></label>`;
    }

    let itemHtml = `
    <div class="test__item">
      <div class="test__wrap">
        <h3 class="test__question caption">${item.question}</h3>
          ${answerTest}
      </div>
      <div class="test__box">
          ${txtTest}
      </div>
    </div>`;
    testHtml += itemHtml;
  }

  function testSlider() {
    /*form question*/
    $('.test__slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      fade: true,
      arrows: true,
      // adaptiveHeight: true,
      nextArrow: '.test_next',
      prevArrow: '.test_prev', 
      dots: false,
    });
  }

  function initSlider() {
    if(sliderTest.classList.contains('slick-initialized')) {
      $('.test__slider').slick('unslick');
    }
    // resultTest.innerHTML = resultHtml;
    sliderTest.innerHTML = testHtml;
    testSlider();
    updateBtn();
    updateProgress();
  }

  function updateBtn() {
    /*form button*/
    let slide = document.querySelectorAll('.test__item');
    let btnPrev = document.querySelector('.test_prev');
    let btnNext = document.querySelector('.test_next');
    let btnResut = document.querySelector('.test__res');
    let slideLast = slide[slide.length - 1] ;
    if(slideLast) {
      slideLast.classList.add('slide_last');
    }
    if (btnPrev && btnNext) {
      btnNext.style.display = 'flex';
      btnResut.style.display = 'none';
      $('.test__slider').on('afterChange', function() {
        if (slideLast.classList.contains('slick-active')) {
          btnNext.style.display = 'none';
          btnResut.style.display = 'block';
        } else {
          btnNext.style.display = 'flex';
          btnResut.style.display = 'none';
        }
        $('.test__slider').slick('setPosition');
      });
    }
  }

  function updateProgress(){
    let totalInt = document.querySelectorAll('.test__answer input');
    let allSlide = $('.test__slider').find('.test__item').length;
    progressBarUpdate(0);
    if(totalInt){
      totalInt.forEach( elem => {
        elem.addEventListener('change', ()=>{
          let totalCheck = document.querySelectorAll('.test__answer input:checked');
          let ids = [];
          totalCheck.forEach( check => {
            let valCheck = check.getAttribute('value');
            ids.push(valCheck)
          });
          if(totalCheck.length == allSlide) {
            resultBtn.removeAttribute('disabled');
          } else {
            resultBtn.setAttribute('disabled','disabled');
          }
        });
      });
    }
  }

  function setTest(data) {
    testHtml = '';
    resultHtml = '';
    data.questions.forEach((qElem, i) => {
      createItem(qElem,i);
    });
    initSlider();
  }

  if(sliderTest) {
    $('.test__slider').each(function(){
      let $slickElement = $(this);
      $slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
        progressBarUpdate(currentSlide);
      });
    });
    setTest(data);
  }


  function getResultTest(){
    // numResult.innerHTML = num;
    // for (level in levelsTest) {
    //   if(levelsTest[level].min<=num && levelsTest[level].max>=num) {
    //     let actLevel = document.querySelector('.result__test[data-id="' + level + '"]')
    //     actLevel.classList.add('active');
    //   }
    // }
    let totalCheck = document.querySelectorAll('.test__answer input:checked');
    totalCheck.forEach(check => {
      check.checked = false;
    });
    $('.test__slider').slick('setPosition');
    $('.test__slider').slick('slickGoTo', 0);
  }

  if(resultBtn){
    resultBtn.addEventListener('click', () => {
      getResultTest();
    });
  };
