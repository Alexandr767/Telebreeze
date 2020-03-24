var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'package.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();