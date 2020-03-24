let xhr = new XMLHttpRequest();
// var header = document.querySelector('header');
// var section = document.querySelector('section');

xhr.open('GET', 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/package.json');

xhr.responseType = 'json';

xhr.send();
var number = 0;
// the response is {"message": "Hello, world!"}
xhr.onload = function() {
  let site = xhr.response;
  // let siteText = xhr.response; // get the string from the response
  //let sitetext = JSON.stringify(site);

  showPage(site);
  sidebar(site);
  console.log(site.menu[0]); // Hello, world!
 //populateHeader(site);
  //alert(sitetext);
}; 

// function populateHeader(jsonObj) {
//   var myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj["menu"];
//   header.appendChild(myH1);

//   var myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + jsonObj['id'] + ' // Formed: ' + jsonObj[header];
//   header.appendChild(myPara);
// }
var numberpage = 0;

function showPage(jsonObj) {
  var Show = jsonObj['menu'];
  
  // for (var i = 0; i < Show.length; i++) {
  // var myArticle = document.createElement('article');

  // var myH2 = document.createElement('h2');
  // myH2.textContent = Show[number].menu_title;
  // text_right.appendChild(myH2);

  // var myPara1 = document.createElement('p');
  // myPara1.textContent = Show[number].menu_subtitle;
  // text_right.appendChild(myPara1);

  // var myPara2 = document.createElement('p');
  // var myPara3 = document.createElement('p');
  // var myList = document.createElement('ul');

  
  // myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
  // myPara2.textContent = 'Age: ' + heroes[i].age;
  // myPara3.textContent = 'Superpowers:';
      
  // var superPowers = heroes[i].powers;
  // for (var j = 0; j < superPowers.length; j++) {
  //     var listItem = document.createElement('li');
  //     listItem.textContent = superPowers[j];
  //     myList.appendChild(listItem);
  // }

  // myArticle.appendChild(myH2);
  // myArticle.appendChild(myPara1);
  // myArticle.appendChild(myPara2);
  // myArticle.appendChild(myPara3);
  // myArticle.appendChild(myList);

  // section.appendChild(myArticle);
  // }
}
console.log(numberpage);
function sidebar(jsonObj){
  var Show = jsonObj['menu'];
      
  for (var i = 0; i < Show.length; i++) {
    console.log(i);

  

    var myH2 = document.createElement('h2');
    myH2.textContent = Show[number].menu_title;
    document.getElementById(number).append(myH2);

    var myPara1 = document.createElement('p');
    myPara1.textContent = Show[number].menu_subtitle;
    document.getElementById(number).append(myPara1);
  }
}

function slide(){

}