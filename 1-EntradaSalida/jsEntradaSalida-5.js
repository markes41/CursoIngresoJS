/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
    var edad;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    alert("Tú nombre es " +nombre+ " y tenés "+edad+ " años.");

}

/*numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  resultado = numeroUno + numeroDos;
  alert("la suma es "+resultado);