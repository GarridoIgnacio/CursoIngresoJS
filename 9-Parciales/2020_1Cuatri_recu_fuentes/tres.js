/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var repetir;
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var flagTemperatura;
	var MaximaTemperatura;
	var nacionalidadMaxTemp;
	var contadorSolteros;
	var mensajeSolteros;
	var mensajeTemperatura;
	var contadorMujeres;
	var mensajeViudasSolteras;
	var contadorMayores;
	var mensajeMayores;
	var ContadorMUjeresCasadas;
	var sumaEdadCasadas;
	var promedioEdadCasadas;
	var mensajeMujeresCasadas;

	repetir=true;
	flagTemperatura=true;
	contadorSolteros=0;
	contadorMujeres= 0;
	contadorMayores= 0;
	ContadorMUjeresCasadas=0;
	sumaEdadCasadas=0;

	while(repetir==true)
	{
		do{
			nombre=prompt("Ingrese su nombre:");
			nombre=nombre.toLowerCase();
		}while(isNaN(nombre)==false);
		do
		{
			nacionalidad= prompt("Ingrese su nacionalidad");
			nacionalidad= nacionalidad.toLowerCase();
		}while(isNaN(nacionalidad)==false)
		do{
			edad=prompt("Ingrese su edad,Entre 1 y 99");
			edad=parseInt(edad);
		}while(edad<1 || edad>99 || isNaN(edad)==true);
		do{
			sexo= prompt("Ingrese su sexo, siendo F para Femenino y M para Masculino:");
			sexo= sexo.toLowerCase();
		}while(sexo!="f" && sexo!="m");
		do{
			estadoCivil=prompt("Ingre se estado civil: Soltero, Casado, Viudo");
			estadoCivil=estadoCivil.toLowerCase();
		}while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo");
		do{
			temperatura=prompt("Ingrese su temperatura en °C:");
			temperatura=parseInt(temperatura);
		}while(temperatura<20 || temperatura>60 || isNaN(temperatura)==true);

		if(temperatura>MaximaTemperatura || flagTemperatura==true)  // A
		{
			MaximaTemperatura = temperatura;
			nacionalidadMaxTemp= nacionalidad;
			mensajeTemperatura= "La nacionalidad del pasajero/a con temperatura mas alta es: "+nacionalidadMaxTemp+" con: "+MaximaTemperatura+" °C";
			flagTemperatura=false;
		}
		if(sexo=="f" && edad>17)
		{
			switch(estadoCivil)
			{
				case "soltero":
				case "viudo":
					contadorMujeres++;                //C
				break;
				default:
					ContadorMUjeresCasadas++;           //E
					sumaEdadCasadas = edad + sumaEdadCasadas;
				break;
			}
		}
		else
		{
			if(estadoCivil=="soltero" && edad>17)      // B
			{
				contadorSolteros++;
			}
		}
		if(edad>60 && temperatura>38)          //D
		{
			contadorMayores++;
		}
		
		repetir=confirm("desea ingresar otro pasajero?");
	}
	
	promedioEdadCasadas= sumaEdadCasadas / ContadorMUjeresCasadas; //E

	mensajeSolteros= "La cantidad de mayores de edad solteros es : "+contadorSolteros;
	mensajeViudasSolteras= "La cantidad de mujeres viudas o solteras es: "+contadorMujeres;
	mensajeMayores= "La cantidad de personas de la tercera edad con mas de 30°C es: "+contadorMayores;
	mensajeMujeresCasadas= "El promedio de edad entre las mujeres casadas es: "+promedioEdadCasadas;

	document.write("<br>"+mensajeTemperatura);
	document.write("<br>"+mensajeSolteros);
	document.write("<br>"+mensajeViudasSolteras);
	document.write("<br>"+mensajeMayores);
	document.write("<br>"+mensajeMujeresCasadas);
	

}
