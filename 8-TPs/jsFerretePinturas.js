/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit = document.getElementById("Temperatura").value;

    var centigrados1 = fahrenheit - 32;
    var centigrados2 = centigrados1 * 5 / 9;

    alert(+fahrenheit+" fahrenheit son "+centigrados2+"°.")
}

function CentigradosFahrenheit () 
{
    var centigrados = document.getElementById("Temperatura").value;

    var fahrenheit = centigrados * 1.8 + 32;

    alert(+centigrados+ "° son "+fahrenheit+" Fahrenheit.")

    //
}
