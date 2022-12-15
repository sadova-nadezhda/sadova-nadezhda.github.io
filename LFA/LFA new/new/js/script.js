/*team slider*/
$('.team__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.5" cy="38.4946" r="37.5" fill="white"/><path d="M18.5858 40.4088C17.8047 39.6278 17.8047 38.3615 18.5858 37.5804L31.3137 24.8525C32.0948 24.0714 33.3611 24.0714 34.1421 24.8525C34.9232 25.6335 34.9232 26.8999 34.1421 27.6809L22.8284 38.9946L34.1421 50.3083C34.9232 51.0894 34.9232 52.3557 34.1421 53.1368C33.3611 53.9178 32.0948 53.9178 31.3137 53.1368L18.5858 40.4088ZM55 40.9946L20 40.9946V36.9946L55 36.9946V40.9946Z" fill="#283071"/></svg></button>',
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.5" cy="38.4946" r="37.5" fill="#FFDF5C"/><path d="M56.4142 40.4088C57.1953 39.6278 57.1953 38.3615 56.4142 37.5804L43.6863 24.8525C42.9052 24.0714 41.6389 24.0714 40.8579 24.8525C40.0768 25.6335 40.0768 26.8999 40.8579 27.6809L52.1716 38.9946L40.8579 50.3083C40.0768 51.0894 40.0768 52.3557 40.8579 53.1368C41.6389 53.9178 42.9052 53.9178 43.6863 53.1368L56.4142 40.4088ZM20 40.9946L55 40.9946V36.9946L20 36.9946V40.9946Z" fill="#283071"/></svg></button>',
  dots: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ] 
});

/*form question*/
$('.test__slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  fade: true,
  arrows: true,
  nextArrow: '.test_next',
  prevArrow: '.test_prev', 
  dots: false,
});

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
  $('.test__slider').on('afterChange', function() {
    if (!(slideLast.classList.contains('slick-active'))) {
      btnNext.style.display = 'flex';
      btnResut.style.display = 'none';
    } else {
      btnNext.style.display = 'none';
      btnResut.style.display = 'block';
    }
    $('.test__slider').slick('setPosition');
  });
}

/*tween js*/
$('html').mousemove(function(e){
		
  var wx = $(window).width();
  var wy = $(window).height();
  
  var x = e.pageX - this.offsetLeft;
  var y = e.pageY - this.offsetTop;
  
  var newx = x - wx/2;
  var newy = y - wy/2;
  
  
  $('.icon').each(function(){
    var speed = $(this).attr('data-speed');
    if($(this).attr('data-revert')) speed *= -1;
    TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
    
  });
  
});
