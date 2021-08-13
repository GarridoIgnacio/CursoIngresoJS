/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	//numeroIngresado =prompt("ingrese el primer numero");
	//numeroIngresado=parseFloat(numeroIngresado);
	
	while(contador < 5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseFloat(numeroIngresado);
		acumulador = numeroIngresado + acumulador;	
		contador = contador +1;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN