function mostrar()
{
var precio;
var porcentaje;

precio = prompt("Ingrese un precio: ");
porcentaje = prompt("Ingrese un descuento: ");

var descuento = precio * porcentaje / 100;// precio = 1000, porcentaje = 10, descuento1 = 100 
var preciodescuento = precio - descuento;
var iva = precio*21/100;
var preciototal = parseInt(preciodescuento) + parseInt(iva);

alert("El descuento en dinero: "+descuento+", precio con descuento: "+preciodescuento+ " y el iva: "+iva);
document.getElementById("elPrecioFinal").value = preciototal;
}


//precio x descuento / 100