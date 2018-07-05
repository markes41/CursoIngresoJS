/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1Suma = document.getElementById("numeroUno").value;
    var n2Suma = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1Suma) + parseInt(n2Suma);

    alert("El resultado es = " +resultado);
}

function restar()
{
	var n1Restar = document.getElementById("numeroUno").value;
    var n2Restar = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1Restar) - parseInt(n2Restar);

    alert("El resultado es = " +resultado);
}

function multiplicar()
{ 
	var n1Mult = document.getElementById("numeroUno").value;
    var n2Mult = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1Mult) * parseInt(n2Mult);

    alert("El resultado es = " +resultado);
}

function dividir()
{
    var n1Div = document.getElementById("numeroUno").value;
    var n2Div = document.getElementById("numeroDos").value;
    var resultado;

    resultado = parseInt(n1Div) / parseInt(n2Div);

    alert("El resultado es = " +resultado);
}

