/* Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

function mostrar()
{
	//tomo la edad  

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
    
	// la condición 
	if( edad == 15 ) {
        
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN