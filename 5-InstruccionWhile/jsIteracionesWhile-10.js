/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
							//Despúes de while / do
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadDePositivos;
	var cantidadDeNegativos;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPositivoyNegativo;
	var cantidadDeCeros;
	var cantidadPar;

	sumaPositivos=0;
	sumaNegativos=0;
	cantidadDePositivos=0;
	cantidadDeNegativos=0;
	cantidadDeCeros=0;
	cantidadPar= 0;

	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseFloat(numeroIngresado);
		if(numeroIngresado % 2== 0)
		{
			cantidadPar = cantidadPar +1;
			console.log("Par: "+cantidadPar);
		}
		else
		{
			if(numeroIngresado >0)
			{
				sumaPositivos= numeroIngresado+sumaPositivos;
				cantidadDePositivos++;
				promedioPositivo = sumaPositivos / cantidadDePositivos;
			}
			else
			{
				if(numeroIngresado<=-1)
				{
					sumaNegativos= numeroIngresado+sumaNegativos;
					cantidadDeNegativos++;
					promedioNegativo = sumaNegativos / cantidadDeNegativos;
				}
				else
				{
					cantidadDeCeros++;
				}
			}

		}
		/*console.log("Suma+: "+sumaPositivos);
		console.log("Suma-: "+sumaNegativos);
		console.log("Cantidad De Ceros: "+cantidadDeCeros);*/
		respuesta=confirm("desea continuar?");
		

	}//fin del while
	
	diferenciaPositivoyNegativo = sumaNegativos + sumaPositivos;

	//console.log("Promedio+: "+promedioPositivo);
	//console.log("Promedio-: "+promedioNegativo);

	document.write("La suma de positivos es :"+sumaPositivos+" ");
	document.write("La suma de negativos es :"+sumaNegativos+" ");
	document.write("El promedio de positivos es :"+promedioPositivo+" ");
	document.write("El promedio de negativos es :"+promedioNegativo+" ");
	document.write("La diferencia entre positivos y negativos es :"+diferenciaPositivoyNegativo+" ");
	document.write("Canridad de ceros :"+cantidadDeCeros+" ");
	document.write("Canridad de números pares :"+cantidadPar+" ");

}//FIN DE LA FUNCIÓN