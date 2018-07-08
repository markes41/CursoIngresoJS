/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var Largo = document.getElementById("Largo").value;
var Ancho = document.getElementById("Ancho").value;
var Perimetro = Largo * 2 + Ancho * 2;
var Total = Perimetro * 3;

alert("Se deberán comprar "+Total+"mts de alambre.")
}
function Circulo () 
{
	var radio = document.getElementById("Radio").value;
    var Perimetro = 2 * 3.14 * parseInt(radio);
    //Math.PI -> Valor de PI (3,14)
    //2 x pi x r -> perimetro circulo
    alert("Se deberán comprar " +Perimetro+"mts de alambre.")
}
function Materiales () 
{
	var Largo = document.getElementById("Largo").value;
    var Ancho = document.getElementById("Ancho").value;
    var Superficie = Largo * Ancho;
    var BolsasCem = Superficie * 2;
    var BolsasCal = Superficie * 3; 

    alert("Se usarán "+BolsasCem+" de cemento y "+BolsasCal+" de cal.")

}