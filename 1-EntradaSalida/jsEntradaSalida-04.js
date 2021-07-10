/* Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	// reservo espacio en memoria para guardar el nombre del usuario
    var nombre;

    // guardo en la variable nombre el texto que escribio el usuario dentro del la ventana prompt
	nombre = prompt ("Igrese su Nombre");

	// copio el nombre que tengo guardado en la variable "nombre" que tengo dentro de la caja de texto embebida en la pagina html
	document.getElementById("txtIdNombre").value = nombre;

}

