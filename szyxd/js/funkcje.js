/*function witaj(imie){
    document.write("Witaj " + imie)
}

function poleprostokata(a,b){
    return a*b;
}
var a = prompt("podaj a");
var b = prompt("podaj b");

console.log(poleprostokata(a, b));

var name = "Janusz";
witaj();*/

function poleObjetos(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wyniki = [pole, objetosc];
    return wyniki;
}

var a = prompt("podaj szerokosc");
var b = prompt("podaj dlugosc");
var c = prompt("podaj wysokosc");

var x = prompt("Podaj wartość");
var poleprostokata = poleObjetos(a,b,c)[x];
console.log(poleprostokata);
