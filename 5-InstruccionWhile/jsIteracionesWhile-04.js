/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var mensaje;

	numeroIngresado = prompt("ingrese un número entre 0 y 9."); //1
	numeroIngresado = parseInt(numeroIngresado);

	//while(numeroIngresado > -1 && numeroIngresado < 10 )
	while(numeroIngresado < 0 || numeroIngresado > 9 ) //2
	{
		numeroIngresado= prompt("Error, nomero no valido. Vuelva a intentar.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	console.log("Es: "+numeroIngresado);

	mensaje = "El dato obtenido y validado es: "+numeroIngresado;
	document.getElementById("txtIdNumero").value = mensaje;
	
}//FIN DE LA FUNCIÓN

//