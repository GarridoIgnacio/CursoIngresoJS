/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

    if( edad < 13 )
	{
        alert("Usted es un niño");

	}
	
	else
	{

		if ( edad < 17 )
		{
			alert("Usted es un adolecente");

		}
		else
		{
			alert("Usted es un adulto");

		}
	}
	

}//FIN DE LA FUNCIÓN