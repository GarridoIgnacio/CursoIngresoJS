/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	var edad;
	var estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;

	if(edad >17 && estado == "Soltero" )
	{
		alert("Usted es soltero y no es menor")
	}



}//FIN DE LA FUNCIÓN