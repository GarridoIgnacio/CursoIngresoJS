/* Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	//tomo el mes
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;
	//mensaje = "Este mes es aburrido";

	switch(mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!";
		break;
		case "Marzo":
			mensaje = "a clases!!!";
		break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!";
		break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
		break;
		default:
			mensaje= "Este mes es aburrido";
		break;
	}
	
	/*if (mes == "Enero")
	{
		mensaje = "Que comiences bien el año!!!";
	}
	else
	{
		if(mes == "Marzo")
		{
			mensaje = "a clases!!!";
		}
		else 
		{
			if(mes == "Julio")
			{
				mensaje = "se vienen las vacaciones!!!";
			}
			if ( mes == "Diciembre")
			{
				mensaje = "Felices fiesta!!!.";
			}
		}
	}*/

	alert(mensaje);

}//FIN DE LA FUNCIÓN