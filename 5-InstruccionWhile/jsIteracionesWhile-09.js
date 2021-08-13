/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador;
	//iniciar variables
	
	banderaDelPrimero= 0;
	respuesta=true;
	contador = 0;
	
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese el número:");
		numeroIngresado=parseFloat(numeroIngresado);
		
		if(banderaDelPrimero == 0)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado > numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				}
			}
		}	
		respuesta=confirm("desea continuar?");
		console.log("NumMaximo: "+numeroMaximo);
		console.log("NumMinimo: "+numeroMinimo);
		contador = contador + 1;
		console.log("Contador: "+contador);
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN

/*
	esta forma es la mas optima !!

	if(numeroIngresado<numeroMinimo || banderaDelPrimero==0)
	{
		numeroMinimo=numeroIngresado;
	}
	if(numeroIngresado>numeroMaximo || banderaDelPrimero==0)
	{
		numeroMaximo=numeroIngresado;
		banderaDelPrimero=1;
	}

*/