/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador; // cantidad de numeros 
	var acumulador; // la suma de todos los numeros ingresados
	var respuesta; // respuesta de usuario para saber si quiere seguir 
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="";
	
	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador= contador + 1;
		respuesta = prompt("Desea ingresar un numero");
		respuesta = respuesta.toLowerCase();

  	} while(respuesta=="si");
	
	/*while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador= contador + 1;
		respuesta = prompt("Descea ingresar un numero");
		respuesta = respuesta.toLowerCase();
		console.log(contador+" "+acumulador+" "+numeroIngresado);
	}*/


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*
		respuesta="";
  	
	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador= contador + 1;
		respuesta = prompt("Descea ingresar un numero");
		respuesta = respuesta.toLowerCase();
		console.log(contador+" "+acumulador+" "+numeroIngresado); 

  	} while(respuesta=="si");
*/