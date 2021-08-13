/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra al oeste del país";
		break;
		case "Mar del plata":
			mensaje = "Se encuentra al este del país";
		break;
		case "Cataratas":
			mensaje = "Se encuentra al norte del país";
		break;
		case "Ushuaia":
			mensaje = "Se encuentra al sur del país";
		break;
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN