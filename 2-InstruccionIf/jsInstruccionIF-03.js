/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17)
	{

		alert("Usted es mayor de edad");

	}

    else {
		
		alert("Usted es menor de edad");
		
	}  

}//FIN DE LA FUNCIÓN