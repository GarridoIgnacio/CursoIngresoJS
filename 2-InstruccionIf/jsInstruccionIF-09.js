/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	 
	var numero;
	//var maximo;
	//var minimo;

	/*maximo = 20;
	minimo = 0;*/

	//numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	numero = Math.floor(Math.random() * 20);
	
	if (numero > 0 && numero < 11 )
	{
	
		alert(numero);
	
	}
	


}//FIN DE LA FUNCIÓN