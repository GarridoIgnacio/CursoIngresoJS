/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="";

	do{
		numeroIngresado=prompt("Ingrese un número por favor:");
		numeroIngresado=parseFloat(numeroIngresado);
		if(numeroIngresado < 0)
		{
			multiplicacionNegativos= numeroIngresado * multiplicacionNegativos;
		}
		else
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
		}
		contador = contador +1;
		respuesta=prompt("Desea ingresar otro número");
		respuesta=respuesta.toLowerCase();
		console.log("Suma: "+sumaPositivos);
		console.log("Multiplicación: "+multiplicacionNegativos);
		console.log("Conatdor: "+contador); 
	}while(respuesta=="si");

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN