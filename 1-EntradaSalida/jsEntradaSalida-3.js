/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    nombre = document.getElementById("elNombre").value;//solo se quiere el valor, no el objeto entero
    //document.getElementById("elNombre").value = "Pepe" Para asignarle un valor de entrada.
    alert(nombre);

}
// = operador de asignaciòn

