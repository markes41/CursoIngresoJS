function mostrar()
{
var edad;
edad = document.getElementById("edad").value;
    if(edad < 1){
        alert("Edad incorrecta.")
    }else{
        if(edad > 17){
            msg = "Es adulto.";
        }else{
            if(edad < 13){
                msg = "Es un niño.";
            }else{
                msg = "Es adolescente.";
            }
        }
    }
    alert(msg);
    
}
    