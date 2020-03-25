let xhr = new XMLHttpRequest(); //Запрашиваем json
xhr.open('GET', 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/package.json');
xhr.responseType = 'json';
xhr.send();
var number = 0;



xhr.onload = function() {   // выгружаем данные json и создаем конструктор
  let site = xhr.response;
  showPage(site);
  sidebar(site);
  console.log(site.menu[0]); 
 
}; 



var numberpage = 0; // начало функции для загрузки контента на основные страницы.

function showPage(jsonObj) {
  var Show = jsonObj['menu'];

}

          
function sidebar(jsonObj){        // загрузка заголовков и подзаголовков для кнопок скрытого меню.
  var Show = jsonObj['menu'];
      
  for (var i = 0; i < Show.length; i++) {
    console.log(i);
    number=i;
    var myH2 = document.createElement('h2');       // загружаем из json заголовок и создаем элемент в html
    myH2.textContent = Show[number].menu_title;
    document.getElementById(number).prepend(myH2);

    var myPara1 = document.createElement('p');     // загружаем из json подзаголовок и создаем элемент в html
    myPara1.textContent = Show[number].menu_subtitle;
    document.getElementById(number).prepend(myPara1);
  }
}

