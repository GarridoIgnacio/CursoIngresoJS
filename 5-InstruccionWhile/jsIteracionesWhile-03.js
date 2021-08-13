/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while( claveIngresada != 750)
	{
		claveIngresada = prompt("Clave incorrecta, porfavor reingrese al clave.");
	}
	console.log("la clave es: "+claveIngresada);
	alert("Usted se ah logeado correctamente.");	
	
	
	
	
	
	
	/*var claveIngresada;
	claveIngresada = prompt("ingrese el número clave."); //1
	
	while( claveIngresada != 750) //2
	{
		claveIngresada = prompt("Ah ah aaah no dijiste la palabra magica ah ah aaah"); //3
	}
	console.log("la clave es: "+claveIngresada);
	alert("welcome to jurassic park"); */
}//FIN DE LA FUNCIÓN


