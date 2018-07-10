function mostrar()
{
var edad = document.getElementById("edad").value;

/*if(edad >= 13 && edad <= 17){
    alert("Sos adolescente.");
                                        INEFICIENTE
}  else{
    alert("No sos adolescente.");
}*/
if(edad < 13 || edad > 17){
    alert("No sos adolescente.");
}
}
/*

if(edad < 13 || edad > 17){               EFICIENTE
    alert("No sos adolescente.");
}
*/