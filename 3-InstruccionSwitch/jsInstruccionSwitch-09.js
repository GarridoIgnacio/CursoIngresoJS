/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año
 y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada; 
	var destino;
	var tarifa;
	var porcentaje;
	var tarifaFinal;
	var mensaje;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	porcentaje = 0;
	tarifa = 15000;
		 	
	switch(estacionIngresada)
	{
		case "Invierno":
			
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					mensaje = "La tarifa con aumneto del 20%";
				break;
				case "Mar del plata":
					porcentaje = -20;
					mensaje ="La tarifa con descuento del 20%";
				break;
				default:
					porcentaje = -10;
					mensaje ="La tarifa con descuento del 10%";
				break;				
			}	
		break;
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = -20;
					mensaje = "La tarifa con descuento del 20%";				
				break;
				case "Mar del plata":
					porcentaje = 20;
					mensaje ="La tarifa con aumneto del 20%";
					
				break;
				default:
					porcentaje = 10;
					mensaje ="La tarifa con descuento del 10%";
				break;	
			}
		
		break;
		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = 10;
					mensaje = "La tarifa con aumento del 10%";
				break;
				case "Mar del plata":
					porcentaje = 10;
					mensaje ="La tarifa con aumento del 10%";
				break;
				default:
					porcentaje = 10;
					mensaje ="La tarifa con aumento del 10%";
				break;	
			}
		break;	
	}		
		tarifaFinal = tarifa + tarifa * porcentaje/100;	
		
		alert(mensaje+" es: $"+tarifaFinal);


}//FIN DE LA FUNCIÓN