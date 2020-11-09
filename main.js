console.log('Hello World!');
//This is basicallt used to get the http://manure.com, which is the attribute//
var a=document.getElementById('demo');
var hrefValue=a.getAttribute('href');
alert(hrefValue);
//this is supposed to set at src attribute that didn't exist in the first place//
var img=document.getElementById('dent');
function setSrcAttribute(){img.setAttribute('src', 'images/star.png');}
//window.txt refers to the txt variable above//
var txt='MyName is Maureen';
function sayHello(){document. write(window.txt);}
//call sayHello() function using window object//
window.sayHello();