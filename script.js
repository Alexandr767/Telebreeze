let xhr = new XMLHttpRequest();
var header = document.querySelector('header');
var section = document.querySelector('section');

xhr.open('GET', 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/package.json');

xhr.responseType = 'json';

xhr.send();

// the response is {"message": "Hello, world!"}
xhr.onload = function() {
  let site = xhr.response;
  console.log(site.menu[0]); // Hello, world!
};