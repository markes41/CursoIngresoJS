/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var resultado;

    //primero = document.getElementById("numeroUno").value;
    //segundo = document.getElementById("numeroDos").value;
    resultado = parseInt(n1) + parseInt(n2);

    alert("La suma es= " +resultado);

}

