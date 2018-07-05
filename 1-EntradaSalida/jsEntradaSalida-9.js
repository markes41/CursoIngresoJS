/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var n1 = document.getElementById("sueldo").value;
    var aumento2 = parseInt(n1) * 0.1; // es lo mismo que var aumento2 = parseInt(n1) * 10 / 100;
    var aumentoFinal = parseInt(n1) + parseInt(aumento2);

    document.getElementById("resultado").value = aumentoFinal;
	
}
