function mostrar()
{ 
	var estacionIngresada 
	var destinoIgresado;
	var mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIgresado = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIgresado)
			{
				case "Bariloche":
					mensaje = "Se viaja a este destino";
				break;
				default:
					mensaje = "No se viaja a este destino";
				break;
			}
		break;
		case "Verano":
			switch(destinoIgresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja a este destino";
				break;
				default:
					mensaje = "No se viaja a este destino";
				break;
			}
		break;
		case "Otoño":
			switch(destinoIgresado)
			{
				default:
					mensaje = "Se viaja a este destino";
				break;
			}
		break;
		case "Primavera":
			switch(destinoIgresado)
			{
				case "Bariloche":
				    mensaje = "No se viaja a este destino";
				break;
				default:
					mensaje = "Se viaja a este destino";
				break;
			}
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN