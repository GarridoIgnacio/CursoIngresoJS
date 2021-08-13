/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "En este destino hace frio";
		break;
		case "Ushuaia":
			mensaje = "En este destino hace frio";
		break;
		case "Mar del plata":
			mensaje = "En este destino hace calor";
		break;
		case "Cataratas":
			mensaje = "En este destino hace calor";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN