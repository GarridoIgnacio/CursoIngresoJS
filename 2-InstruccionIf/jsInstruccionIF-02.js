/* Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{
	//tomo la edad  
	var edad;
    
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18){
		
		alert("Es mayor de edad")
	}
	

}//FIN DE LA FUNCIÓN