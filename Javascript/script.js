var userName = prompt("rafraichissement  ?")

var body= document.querySelector("body");
var isBlue = false;

setInterval (function() {
    if(isBlue){
        body.bgColor= "white";}
        else {
        body.bgColor="white" ;}
        isBlue= !isBlue;
    
},userName);