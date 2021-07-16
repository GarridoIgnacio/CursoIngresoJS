/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

//Al ingresar una edad solo debemos informar si la persona NO es adolescente

function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
   
	// condicionq uee s verdadera para los valores de edad que estan por debajo o por encima del rango[13,17]
	// (Pregunto si estoy fuera del rango)
	if ( edad <13 || edad >17 ) {

		alert("Usted no es adolecente");
	} 

	//(Pregunto si no estoy dentro del rango) 
	/*
	if( !(edad >= 13 && edad <= 17) ){

		alert("NO es adolecente")
	} */

}//FIN DE LA FUNCIÓN