//burger menu
let link = document.querySelector('.nav_icon');
let menu = document.querySelector('.page__header');
let page = document.querySelector('.page__container');
let clsBtn = document.querySelector('.header__close');
if(menu) {
  link.addEventListener('click', function () {
    menu.classList.add('opened');
  }, false);
  clsBtn.addEventListener('click', function () {
    menu.classList.remove('opened');
  });
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('opened')) {
      menu.classList.remove('opened');
    }
  });
  page.addEventListener('click', e => {
    let target = e.target;
    if (!(target.classList.contains('page__header')) && !(target.classList.contains('nav_icon'))) {
        menu.classList.remove('opened');
    }
  });
}


/*menu*/
const buttons = document.querySelectorAll('.item__caption');
if (buttons){
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
function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

document.addEventListener('DOMContentLoaded', function () {
  let btnRgt = document.querySelector('.table__btn-right');
  let btnLft = document.querySelector('.table__btn-left');
  let tableCnt = document.querySelector('.tabulator-tableholder');
  let tbl = document.querySelector('.tabulator-table');
  let tableWh = tbl.offsetWidth - tableCnt.offsetWidth;

  if (tableCnt) {
    window.addEventListener('resize', ()=> {
      tableWh = tableCnt.offsetWidth;
    });
    function ScrollRg() {
      if (tableCnt.scrollLeft >= 20) {
        btnLft.classList.add('show');
      }
      if (tableCnt.scrollLeft >= tableWh) {
        btnRgt.classList.remove('show');
      }
    }
    function ScrollLf() {
      if (tableCnt.scrollLeft <= tableWh) {
        btnRgt.classList.add('show');
      }
      if (tableCnt.scrollLeft <= 20 ) {
        btnLft.classList.remove('show');
      }
    }
    btnRgt.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      tableCnt.scrollLeft += 10;
      if (timePassed > 1000) clearInterval(timer);
      ScrollRg();
      }, 20);
    };
    btnLft.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      tableCnt.scrollLeft -= 10;
      if (timePassed > 1000) clearInterval(timer);
      ScrollLf();
      }, 20);

    };
    tableCnt.addEventListener('scroll', () => {
      ScrollLf();
      ScrollRg();
    })
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

// var tableData1 = [
//   {id:1,alias:'https://tabulator.info/docs/5.4/format#formatter-link', name:"ТОО SAADAT Group в интересах своих клиентов государственных организаций объявляет о закупе ГСМ - с 24 октября 2022 г. ",  dob:"07.10.2022"},
//   {id:2, name:"ТОО SAADAT Group в интересах своих клиентов государственных организаций объявляет о закупе ГСМ - с 24 октября 2022 г. ", dob:"07.10.2022"},
//   {id:3, name:"ТОО «Mirai Qazaqstan» в интересах своих клиентов государственных организаций объявляет о закупе ГСМ - с 24 октября 2022 г.", dob:"07.10.2022"},
// ];
var tableData2 = [
  {id:1, standart:"СТАНД001019", rezim:"На понижение	", stat:"Завершен", lot:"Запасные части	", init:"AO AltynEx Company", add:"РК, 030713, Актюбинская область, Мугалжарский район, село Алтынды ИИК: KZ5884904KZ002286848 БИК: NURSKZKX Банк: Актюбинский филиал АО НУРБАНК", doc:"-", price:"2 711 043.00	",  dob:"07.10.2022"},
  {id:2, standart:"СТАНД001019", rezim:"На понижение	", stat:"Завершен", lot:"Запасные части	", init:"AO AltynEx Company", add:"РК, 030713, Актюбинская область, Мугалжарский район, село Алтынды ИИК: KZ5884904KZ002286848 БИК: NURSKZKX Банк: Актюбинский филиал АО НУРБАНК", doc:"-", price:"2711043.00	",  dob:"07.10.2022"},
  {id:3, standart:"СТАНД001019", rezim:"На понижение	", stat:"Завершен", lot:"Запасные части	", init:"AO AltynEx Company", add:"РК, 030713, Актюбинская область, Мугалжарский район, село Алтынды ИИК: KZ5884904KZ002286848 БИК: NURSKZKX Банк: Актюбинский филиал АО НУРБАНК", doc:"-", price:"2001533.00	",  dob:"07.10.2022"},
];

  tableData2.forEach(function(elem) {
    let price = elem.price;
    price = numberWithSpaces(price);
    elem.price = price;
  });

// var tableColumns1 = [
//   {title:"Name", field:"name", formatter:"link",formatterParams:{ urlField: 'alias'} },
//   {title:"Date", field:"dob", maxWidth: 200},
// ];
var tableColumns2 = [
  {formatter:"rownum", hozAlign:"center", maxWidth:40, minWidth:40},
  {title:"# Аукциона", field:"standart"},
  {title:"Режим Аукциона", field:"rezim"},
  {title:"Актуальный статус", field:"stat"},
  {title:"Наименование лота аукциона", field:"lot"},
  {title:"Инициатор аукциона", field:"init"},
  {title:"Фактический адрес и банковские реквизиты", field:"add"},
  {title:"Документы к аукциону (ТЗ, шаблон договора, прочее)", field:"doc"},
  {title:"Стартовая цена лота", field:"price" },
  {title:"Date", field:"dob", maxWidth: 200 },
];

// let sended = false;

// let tabulator = document.querySelector('#example-table');
// let tableType = document.querySelector('#example-table').getAttribute('data-type');
// if(tabulator && tableType) {
//   window.addEventListener('load', e => {
// let preloader = document.getElementById('preloader');
// preloader.classList.add('hide-preloader');
// preloader.classList.add('preloader-hidden');
//       if(!sended ){
//         sended = true;
//         $.ajax({
//           method: "POST",
//           url: '/api/v1/get_tables_data' ,
//           data: { type: tableType },
//           dataType: "json",
//         })
//         .done(function( data ) {
//           sended = false;
//         })
//         .fail(function( data ){
//           sended = false;
//           alert(data.responseText);
//         });
//       }
//   });

//   function tableDataFormat(data){
//     if( data.status == 1){
//       var table = new Tabulator("#example-table", {
//         data: data.data,
//         columns: data.columns,
//         columnDefaults:{
//           minWidth: 200,
//           resizable: false,
//           tooltip:true,
//         },
//         pagination:"local",
//         paginationSize: 10,
//         paginationSizeSelector:[10, 20, 50, 100],
//         paginationCounter:"rows",
//         layout:"fitColumns",
//         movableColumns: true,
//       });
//     }else {
//       alert(data.status_text)
//     }
//   }  
// }






var table2 = new Tabulator("#example-table", {
  data: tableData2,
  columns: tableColumns2,
  columnDefaults:{
    minWidth: 200,
    resizable: false
  },
  locale:true,
  langs:{
    "ru":{
        "data":{
            "loading":"Загрузка", 
            "error":"Ошибка", 
        },
        "pagination":{
          "page_size":"Кол-во строк", 
            "page_title":"Показать страницу",
            "first":"Первая", 
            "first_title":"Первая страница", 
            "last":"Последняя",
            "last_title":"Последняя страница",
            "prev":"Пред",
            "prev_title":"Предыдущая страница",
            "next":"След",
            "next_title":"Следующая Страница",
            "all":"Все",
            "counter":{
                "showing": "Показаны",
                "of": "из",
                "rows": "ряды",
                "pages": "страницы",
            }
        },
    }
  },
  pagination:"local",
  paginationSize: 3,
  paginationSizeSelector:[1, 3, 6, 9],
  paginationCounter:"rows",
  layout:"fitColumns",
  movableColumns: true,
});

