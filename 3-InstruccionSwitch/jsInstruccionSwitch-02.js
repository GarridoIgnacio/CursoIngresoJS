/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;                     

	switch (mesDelAnio)                       // se ejecuta el "case:"" hasta un "break;" en casi de olvidar uno seguira tomomando todos los "case:" hasta llegar a un "break;"  
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
		break;
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
		default:
			mensaje = "No debería aparecer este mensaje";
		break;

	}
	
	alert(mensaje);




}//FIN DE LA FUNCIÓN