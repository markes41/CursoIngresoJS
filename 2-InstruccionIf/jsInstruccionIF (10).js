function mostrar()
{
	var rand = Math.floor(Math.random() * (11 - 1)) + 1;
	if(rand >= 9 && rand <= 10){
		alert("EXCELENTE");
	}else{
		if(rand >= 4 && rand < 8){
			alert("APROBADO");
		}else{
			alert("Vamos, la proxima se puede.");
		}
	}
	

}