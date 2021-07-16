/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	// Una forma es :
	/*if (edad >=13 ){
		
		if(edad<=17){

		    alert("Es adolecente");
		
	    }
	}*/
    // Otra usando los operdadores "or" "and" y "note" según se requiera:
     
	// or es JS es ||  y and es &&  y ek note es !  

	if (edad > 12 && edad < 18 ) {

		alert("Es adolecente");
	} 

	
	/*if( !(edad <13 || edad >17) ){
		
		alert("Es adolecente")
	}
	*/


}//FIN DE LA FUNCIÓN