/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=10;  //1
	
	while(contador > 1) //2
	{
		contador = contador -1; //3
		console.log(contador);
	}
	console.log("Termina en :"+contador);
}//FIN DE LA FUNCIÓN