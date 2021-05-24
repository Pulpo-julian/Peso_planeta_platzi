document.getElementsByClassName("marte-boton")[0].addEventListener("click", () => {
    var num = document.getElementsByClassName("entrada")[0].value;
    num = (num * gMarte)/gTierra ;
    num = num.toFixed(2);
    num = parseFloat(num);
    caja[0].innerHTML =  "Pesas " + num + " kg en Marte";     
})

document.getElementsByClassName("jupiter-boton")[0].addEventListener("click", () => {
    var num = parseFloat(document.getElementsByClassName("entrada")[0].value);
    num =(num * gJupiter)/gTierra;
    num = num.toFixed(2);
    num = parseFloat(num);
    caja[1].innerHTML =  "Pesas " + num + " kg en Jupiter";     
    
})

var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;
var caja = document.getElementsByClassName("resultado");