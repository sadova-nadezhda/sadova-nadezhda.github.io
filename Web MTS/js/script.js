//burger menu
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.page__header');
var page = document.querySelector('.page__container');
let clsBtn = document.querySelector('.header__close');
link.addEventListener('click', function () {
  // link.classList.toggle('active');
  menu.classList.add('opened');
}, false);
clsBtn.addEventListener('click', function () {
  menu.classList.remove('opened');
});


/*menu*/
const buttons = document.querySelectorAll('.item__caption');
if (buttons) {
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('open');
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('open');
      }
    });
  });
});
}


/*slider*/
$('.js-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1450,
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

$('.trust__cards').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="12" transform="matrix(-1 0 0 1 12 12)" fill="white" fill-opacity="0.1"/><path d="M10 5L17 12L10 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1"/><path d="M14 5L7 12L14 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4
      }
  },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3
      }
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 2,
      arrows: false,
      dots: true
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true
    }
  }
]
});

let flag = true;
$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slider-mb').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrows: false,
      adaptiveHeight: true,
      variableWidth: true,
      dots: true
    });
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slider-mb').slick('unslick');
  }
}).resize();


/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
  duplicated: true
})


/*table*/
document.addEventListener('DOMContentLoaded', function () {
  let btnRgt = document.querySelector('.table__btn-right');
  let btnLft = document.querySelector('.table__btn-left');
  let tableCnt = document.querySelector('.auctions__table__content');
  if (tableCnt) {
    btnRgt.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft += tableCnt.clientWidth;
      tableCnt.scrollLeft += 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft > 20) {
        btnLft.classList.add('show');
      }
      if (tableCnt.scrollLeft > 1320) {
        btnRgt.classList.remove('show');
      }
      // console.log(tableCnt.scrollLeft)
      }, 20);
    };
    btnLft.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft -= tableCnt.clientWidth;
      tableCnt.scrollLeft -= 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft < 1320) {
        btnRgt.classList.add('show');
      }
      if (tableCnt.scrollLeft < 20) {
        btnLft.classList.remove('show');
      }
      }, 20);
    };
  }
// /*Chart*/
  const canvas = document.querySelector('.chart');
  if(canvas) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, canvas.width, 0, canvas.height);
    gradient.addColorStop(1, 'rgba(64, 163, 255, 0.5)');
    gradient.addColorStop(0, 'rgba(64, 163, 255, 0)');
    // let labelsArray = ['01.04.2022', '01.05.2022', '01.06.2022', '01.07.2022', '01.08.2022'];
    // let DataArray = [3, 6, 2, 7, 4];

    function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let obj = {
      labels: ['01.04.2022', '01.05.2022', '01.06.2022', '01.07.2022', '01.08.2022', '01.09.2022'],
      datasets: [
        {
          label: 'Уголь',
          data: [11400, 11900, 12400, 12000, 12600, 12800],
        },
        {
          label: 'Цемент',
          data: [11400, 11500, 11800, 12200, 12200, 12700],
        },
        {
          label: 'ГСМ',
          data: [11800, 11400, 11800, 12000, 12400, 12200],
        },
        {
          label: 'Картофель',
          data: [11400, 11700, 11800, 12200, 12400, 12000],
        },
        {
          label: 'Сахар',
          data: [11400, 11600, 11800, 12000, 12200, 12700],
        },
        {
          label: 'Пшеница',
          data: [11400, 11600, 11800, 12000, 12200, 12600],
        }
      ]
    };
    
    let params = {
      borderColor: '#40A3FF',
      borderWidth: 2,
      pointBackgroundColor: '#1A2738',
      pointBorderColor: '#40A3FF',
      pointBorderWidth: 2,
      backgroundColor: gradient,
      cubicInterpolationMode: 'monotone',
      fill: true,
      hidden: true // true
    };

    obj.datasets.forEach(item => {
      Object.keys(params).forEach((key,i) => {
        item[key] = Object.values(params)[i];
      });
      console.log(item)
    });
  
    obj.datasets[0].hidden = false;

    var chart = new Chart(ctx,
      {
        type: 'line',
        data: obj,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x:{
                grid: {
                  display: false,
                  color: 'rgba(255, 255, 255, 0.2)'
                },
                ticks: {
                  color: '#fff',
                  padding: 10,
                  font: {
                    size: 10
                  }
                }
            },
            y: {
                grid: {
                  display: true,
                  color: 'rgba(255, 255, 255, 0.2)'
                },
                position: 'right',
                min: 11400,
                max: 12800,
                ticks: {
                  color: '#fff',
                  padding: 10,
                  font: {
                    size: 10
                  }
                }
            }
          },
          radius: 6,
          plugins: {
            legend: {
              align: 'end',
              cursor:"pointer",
              padding: {
                bottom: 60
              },
              // onClick: (e) => e.stopPropagation(),
              onHover: function(event, legendItem) {
                document.querySelector("canvas").style.cursor = 'pointer';
              },
              onClick: function(e, legendItem) {
                var index = legendItem.datasetIndex;
                var ci = this.chart;
                var metaInd = ci.getDatasetMeta(index);
                let price = document.querySelector('.chart-price');
                let arrayPrice = metaInd._dataset.data;
                let lastElemPrice = arrayPrice.slice(-1);

                ci.data.datasets.forEach(function(e, i) {
                  var meta = ci.getDatasetMeta(i);
                  meta.hidden = true;
                  meta._dataset.hidden = true;
                });
                if (metaInd.hidden == true){
                  metaInd.hidden = false;
                  metaInd._dataset.hidden = false;
                  price.innerHTML = numberWithSpaces(lastElemPrice) + ' ₸';
                }
                ci.update();
              },
              tooltips: {
                custom: function(tooltip) {
                  if (!tooltip.opacity) {
                    document.querySelector("canvas").style.cursor = 'default';
                    return;
                  }
                }
              },
              labels: {
                display: false,
                color: '#fff',
                boxWidth: 0,
                font: {
                  size: 12
                },
                generateLabels: (chart) => {
                  const datasets = chart.data.datasets;
                  const {
                    labels: {
                      usePointStyle,
                      pointStyle,
                      textAlign,
                      color
                    }
                  } = chart.legend.options;


                  total_result = chart._getSortedDatasetMetas().map((meta, i) => {
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    if(meta._dataset.hidden){
                      
                      return {
                        text: datasets[meta.index].label,
                        fontColor: '#fff', 
                        datasetIndex: meta.index
                      };
                    } else {
                      return {
                        text: datasets[meta.index].label,
                        fontColor: '#40FFB5',
                        datasetIndex: meta.index
                      };
                    }
                  }, this);

                  return total_result;
                }
              }
            }
          },
          layout: {
            padding: 20
          }
        },
        plugins: [ 
      {
        afterInit(chart) {
          chart.legend._update = chart.legend.update;
          chart.legend.update = function (...args) {
            this._update(...args);
            const padding = { ...(this.options.padding || {}) };
            this.height += Math.max(0, ~~padding.bottom);
            this.width += Math.max(0, ~~padding.right);
          };
        },
      },
    ]
      }
    );


    
    let date = document.querySelector('.chart-date');
    let price = document.querySelector('.chart-price');
    let arrayDate = chart.data.labels;
    let lastElemDate = arrayDate.slice(-1);
    date.innerHTML = lastElemDate;
    chart.data.datasets.forEach(function(elem, i) {
      if(elem.hidden == false) {
        let arrayPrice = elem.data;
        let lastElemPrice = arrayPrice.slice(-1);
        price.innerHTML = numberWithSpaces(lastElemPrice) + ' ₸';
      }
    });

  }
}, false);

/*hide-show*/
$(function() {
  $(".btn-hide").click(function() {
    $(".hidden").css("display", "none");
    $(".btn-hide").css("display", "none");
    $(".btn-display").css("display", "block");
  });
  $(".btn-display").click(function() {
    $(".hidden").css("display", "block");
    $(".btn-hide").css("display", "block");
    $(".btn-display").css("display", "none");
  });
});


/*form*/
function submitForm() {
  $('#form_loader').show()
}
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup").show();
}
function PopUpHide(){
  $("#popup").hide();
}
$('#popup').on("click", function(event){
  var target = event.target;
  if ($(target).hasClass('popup')){
    PopUpHide()
  }
});

let product = document.querySelector('.info-product');
if(product){
  product.addEventListener('change', () => {
  let optionPrd = document.querySelector('.info-product option:checked');
  let prdType = document.querySelectorAll('.product-type')
  prdType.forEach(item => {
    if(item.getAttribute("data-type") == optionPrd.getAttribute("value")) {
      item.style.display = "table-row";
    }
    else {
      item.style.display = "none";
    }
    if(optionPrd.getAttribute("value")== '0') {
      item.style.display = "table-row";
    }
  })


  });
}
