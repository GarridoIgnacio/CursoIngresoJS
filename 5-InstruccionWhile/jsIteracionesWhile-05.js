/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */


/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toUpperCase();

	while(sexoIngresado!="F" && sexoIngresado!="M" )
	{
		sexoIngresado = prompt("Dato novalido, reingrese por favor");
		console.warn(sexoIngresado)
	}


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN 