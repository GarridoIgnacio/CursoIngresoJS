/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

function mostrar()
{

	var repetciones
	var i; 
	
	repetciones = prompt("ingrese el número de repeticiones");
	repetciones=parseInt(repetciones);
	
	for(i=0; i < repetciones;i++)
	{
		alert("Hola UTN FRA");
		console.log("i: "+i);

	}
	

}//FIN DE LA FUNCIÓN