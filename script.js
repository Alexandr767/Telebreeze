let xhr = new XMLHttpRequest(); //Запрашиваем json
xhr.open('GET', 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/test.json');
xhr.responseType = 'json';
xhr.send(); 
var number = 0;



xhr.onload = function() {   // выгружаем данные json и создаем конструктор
  let site = xhr.response;
  showPage(site);
  sidebar(site);
  console.log(site.menu[0]); 
 
}; 



var numberside = 0; // начало функции для загрузки контента на основные страницы.

function showPage(jsonObj) {
  var Show = jsonObj['menu'];

  var myH1 = document.createElement('h1');
  myH1.textContent = Show[number].content.header;
  document.getElementById('text_right').append(myH1);

  var myP1 = document.createElement('p');
  myP1.textContent = Show[number].content.short_text;
  document.getElementById('text_right').append(myP1);

  var myP2 = document.createElement('p');
  myP2.textContent = Show[number].content.full_text;
  document.getElementById('text_right').append(myP2);
  myP2.className = "Hide_text";
  myP2.style.display = "none";

  var IMG = document.createElement('img');
  IMG.src = Show[number].content.image_url;
  document.getElementById('image').append(IMG);

  var BTN = document.createElement('button');
  BTN.textContent = Show[number].content.full_text_btn_title;
  document.getElementById('text_right').append(BTN);
  BTN.className = "main_button";

  BTN.onclick = alertion;

  function alertion(){
    myP2.style.display = "block";
    myP1.style.display = "none";
    BTN.style.display = "none";

   
  }
 
  
  
}

          
function sidebar(jsonObj){        // загрузка заголовков и подзаголовков для кнопок скрытого меню.
  var Show = jsonObj['menu'];
      
  for (var i = 0; i < Show.length; i++) {
    console.log(i);
    number=i;

    var myPara1 = document.createElement('p');     // загружаем из json подзаголовок и создаем элемент в html
    myPara1.textContent = Show[number].menu_subtitle;
    document.getElementById(number).append(myPara1);
    myPara1.className = "flex-container_element_2";

    var myH2 = document.createElement('h2');       // загружаем из json заголовок и создаем элемент в html
    myH2.textContent = Show[number].menu_title;
    document.getElementById(number).prepend(myH2);
    myH2.className = "flex-container_element_1";
  }
}

