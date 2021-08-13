/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;														// Definición de Variables
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var respuesta;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;					
	var nacionalidadIngresada;
	var mensajeEdad;
	var mensajeSueldo;
	var mensajeSexo;
	var mensajeEstado;
	var mensajeLegajo;
	var mensajeNacionalidad;

	respuesta="si";
		
	while(respuesta== "si")			// Inicio while		
	{
		do{																	// Punto "A" rango de edad
			edadIngresada=prompt("Ingrese su edad, no menor a 17 años: ");
			edadIngresada=parseInt(edadIngresada);								
			mensajeEdad="Edad: "+edadIngresada+" años";		

		}while(edadIngresada<18 || edadIngresada>90);
		console.log("Edad: "+edadIngresada);

		do{																	// Punto "B" Define un sexo
			sexoIngresado=prompt("Ingrese su sexo (F o M): ");
			sexoIngresado=sexoIngresado.toLowerCase();					
			if(sexoIngresado=="f")
			{
				mensajeSexo= "Sexo: Femenino";
			}
			else
			{
				mensajeSexo= "Sexo: Masculino";
			}

		}while(sexoIngresado!="m" && sexoIngresado!="f");
		console.log("Sexo: "+sexoIngresado);
		
		do{																	// Punto "C" Estado Civil
			estadoCivilIngresado=prompt("Ingrese su estado civil sinedo: 1 para soltero, 2 para casados, 3 para divorciados y 4 para viudos.");
			estadoCivilIngresado=parseInt(estadoCivilIngresado);
			switch(estadoCivilIngresado)
			{
				case 1:
					estadoCivilIngresado= "Soltero/a";                     
				break;
				case 2:
					estadoCivilIngresado= "Casado/a";
				break;
				case 3:
					estadoCivilIngresado= "Divorciado/a";
				break;
				case 4:
					estadoCivilIngresado= "Viudo/a";
				break;
			}
			mensajeEstado= "Estado civil: "+estadoCivilIngresado;

		}while(estadoCivilIngresado<1 || estadoCivilIngresado>4);
		console.log("Civil: "+estadoCivilIngresado);

		do{																		// Punto "D" Suledo Bruto
			sueldoBruto=prompt("Ingrese su sueldo Bruto,no menor a 8000:");
			sueldoBruto=parseInt(sueldoBruto);									
			mensajeSueldo="Sueldo Bruto: "+sueldoBruto+" $ (Pesos)";

		}while(sueldoBruto<8000);
		console.log("Bruto: "+sueldoBruto);

		do{																		// Punto "E" Número de Legajo
			numeroLegajo=prompt("Ingrese su numero de legajo: ");
			numeroLegajo=parseInt(numeroLegajo);
			mensajeLegajo= "N° legajo: "+numeroLegajo;

		}while(numeroLegajo<1000 || numeroLegajo>9999);
		console.log("Legajo: "+numeroLegajo);

		do{																		// Punto "F" Nacionalidad
			nacionalidadIngresada=prompt("Igrese su nacionalidadIngresada, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
			nacionalidadIngresada=nacionalidadIngresada.toLowerCase();
			switch(nacionalidadIngresada)
			{
				case "a":
					nacionalidad = "Argentino/a";
				break;
				case "e":
					nacionalidad = "Extranjero/a";
				break;
				case "n":
					nacionalidad= "Nacionalizado";
				break;
			}
			mensajeNacionalidad= "Nacionalidad: "+nacionalidad;

		} while(nacionalidadIngresada !="a" && nacionalidadIngresada !="e" && nacionalidadIngresada !="n");
		console.log("Nacional: "+nacionalidad);

		document.getElementById("txtIdEdad").value = mensajeEdad;			// Salida de Datos
		document.getElementById("txtIdSexo").value = mensajeSexo;
		document.getElementById("txtIdEstadoCivil").value = mensajeEstado;
		document.getElementById("txtIdSueldo").value = mensajeSueldo;
		document.getElementById("txtIdLegajo").value = mensajeLegajo;
		document.getElementById("txtIdNacionalidad").value = mensajeNacionalidad;

		respuesta=prompt("Desea ingresar otra a persona?");
		respuesta=respuesta.toLowerCase();
	}	// Fin while

}// Fin función Ingreso
