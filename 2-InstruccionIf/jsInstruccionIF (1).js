function mostrar()
{
    var edad = document.getElementById("edad").value;
    if(edad == 15){
        alert("niña bonita");
    }else{
        alert("Su edad no es de 15 años.");
    }




}//FIN DE LA FUNCIÓN

/*
if (condition) {

    true

} else {

    false

}
---------------operadores de condición-------------------------
dentro del if() va cualquier cosa que se pueda convertir en un booleano. Si es true ejecuta lo que está
dentro de las llaves, sino, sale.
== compara los valores sin importar el tipo de dato
=== antes de verificar el valor, verficia el tipo de dato y luego el valor
>=
!=
<=
<
>
----------------------------------------------------------------

---------------operadores logicos -------------------------
&& y -> se tinen q cumplir las 2
|| o -> con que se cumpla cualquiera de las 2 condiciones que une, entra al if
------------------------------------------------------
*/