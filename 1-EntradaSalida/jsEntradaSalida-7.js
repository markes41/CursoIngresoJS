/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1) + parseInt(n2);

    alert("El resultado es = " +resultado);
}

function restar()
{
	var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1) - parseInt(n2);

    alert("El resultado es = " +resultado);
}

function multiplicar()
{ 
	var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1) * parseInt(n2);

    alert("El resultado es = " +resultado);
}

function dividir()
{
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1) / parseInt(n2);

    alert("El resultado es = " +resultado);
}

