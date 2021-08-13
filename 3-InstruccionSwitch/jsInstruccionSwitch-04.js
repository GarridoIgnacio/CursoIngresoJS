/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

function mostrar()
{
	//tomo el mes
	var mesDelAño; 
	var mensaje;
	
	mesDelAño = txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes es el mas corto con 28 días";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene una duración de 30 días";
		break;
		default:
			mensaje = "Este mes tiene una duració de 31 días";
		break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN