
console.log('=== Typy danych ====') ;

let liczba_uzytkownikow = 3.14
let wynik = (liczba_uzytkownikow*2)
console.log(Math.floor(wynik))

console.log('=== Obliczanie pierwiastka ====') ;

console.log(Math.sqrt(169))

console.log('=== Metody dla stringow ====') ;

let kod_pocztowy = "90-210"
//<a href=https://www.youtube.com/watch?v=iY-IFU9LFkY>90210</a>

console.log(kod_pocztowy.indexOf("-"))

console.log('=== zadanie 1 ====') ;

//zmienna number:
let a = 2
//zmienna string:
let myName = "Radomir"
//zmnienna boolean:
let lubiePlacki = true
let zCukrem = false
// zmienna null:
let dzienBezKawy = null
//zmienna undefined:
let kiedyZrobieTozadanie;

//zmienna object:
let osoba = new Object 
    osoba.name = "Dobromir",
    osoba.age = 18
//zmienna symbol:
let sym1 = Symbol("R");

//wypisanie zmiennych
console.log("Number = " + a)
console.log("String = "+ myName)
console.log("Boolean = " + lubiePlacki)
console.log("Null = "+ dzienBezKawy)
console.log("Zrobie to zadanie w:" + " " + kiedyZrobieTozadanie)
console.log("Object = " + osoba)
console.log(sym1)
//Dodawanie zmiennych
console.log("Number + string " + "= " + typeof(a + myName))
console.log("Number + boolean " + "= " + typeof(a + lubiePlacki))
console.log("Number + string " + "= " + typeof(a + dzienBezKawy))
console.log("Number + null " + "= " + typeof(a + kiedyZrobieTozadanie))
console.log("Number + object " + "= " + typeof(a + osoba))
console.log("Number + symbol " + "= " + typeof(a + sym1)) = error Cannot convert a Symbol value to a number
console.log("boolean + string " + "= " + typeof(lubiePlacki + myName))
console.log("null + undefined " + "= " + typeof(dzienBezKawy + kiedyZrobieTozadanie))

console.log('=== zadanie 2 ====') ;

let zmienna1 = 4.23
let zmienna2 = 2.13
console.log(zmienna1 / zmienna2)
let result = (zmienna1 / zmienna2)
console.log(Math.floor(result))
console.log(Math.ceil(result))

console.log('=== zadanie 3 ====') ;

console.log(Math.random() * (100 - 5) + 5)

console.log('=== zadanie 4 ====') ;

var widthBox = "23px"
var widthPanel = "2px"
console.log(widthBox + widthPanel)

console.log('=== zadanie 5 ====') ;

let mail = "email@email.pl"

console.log(mail.indexOf("@"))