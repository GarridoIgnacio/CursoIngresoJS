/*Nombro: Ignacio
  Apellido: Garrido
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    
	var nombre;
    var edad;
	
	//nombre = txtIdNombre.value;
	nombre = document.getElementById("txtIdNombre").value;
	//edad = txtIdEdad.value;
	edad = document.getElementById("txtIdEdad").value;
	
	//alert("Uested se llama " + nombre + " y tiene " + edad + " años");  
	
	alert(`USted se llama ${nombre} y tiene ${edad} años`);

    /*son dos varintes para el mismo resultado para para lograr el `` totar 
	   La tecla " AltGr " y la tecla de corchetes */

}

