/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
  var numeroSecreto = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log(numeroSecreto);
  contadorIntentos = 0;

}
	

function verificar()
{
  var numero = document.getElementById("numero").value;
  contadorIntentos++;

  if(numero == numeroSecreto){
    alert("Acertó.")
  }else if(numero > numeroSecreto){
    alert("Se pasó.")
  }else{
    alert("Te falta.")

    document.getElementById("intentos").value = contadorIntentos;
  }
	
	
}

/*contador = variable + constante.
acumuladores = variable + variable
banderas = variable + booleana
++cont = primero suma dsp muestra
cont++ = primero muestra y dsp suma
cont += 1;*/