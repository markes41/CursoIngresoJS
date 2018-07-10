function mostrar()
{
var edad = document.getElementById("edad").value;
var estadoCivil = document.getElementById("estadoCivil").value;


	if(edad > 17 && estadoCivil == "Soltero"){
        alert("Es soltero y no es menor.")
    }
    }

    /*var rand = math.floor/parseInt(Math.random() * (max - min)) + min;
                 cualquiera de los 2
                math.floor o parseInt

    el número máximo nunca lo va a tocar. 
    el número mínimo si lo va a tocar
    */