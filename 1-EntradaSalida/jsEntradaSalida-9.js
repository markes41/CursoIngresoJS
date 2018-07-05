/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var n1 = document.getElementById("sueldo").value;
    var aumento1 = 100;
    var porcentaje = 10;
    var aumento2 = parseInt(n1) * parseInt(porcentaje);
    var aumento3 = parseInt(aumento2) / parseInt(aumento1);
    var aumentoFinal = parseInt(n1) + parseInt(aumento3);

    document.getElementById("resultado").value = aumentoFinal;
	
}
