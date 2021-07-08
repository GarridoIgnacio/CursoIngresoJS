/* Nombro: Ignacio
  Apellido: Garrido
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// variables que voy a usar
	var num1;
	var num2;
	var resultado;
   
	/* UNA MANERA
	//traigo los datos del imput del html para guardalso en la variable osea lo que se escribe en el cuadro de texto
	num1 = document.getElementById("txtIdNumeroUno").value;
    num2 = document.getElementById("txtIdNumeroDos").value;
 
	//con el parseInt convierto los datos tomados de txt a num, filtra del 1 al 9, numeros enteros para numors con decimales se usa "parseFloat"
    num1 = parseInt(num1);
	num2 = parseInt(num2);*/

	// OTRA forma es..

    num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// sumo las dos variables ahora numericas y guardo en el resulato en la variable resultado
	resultado = num1 + num2;
	
	// con later muestro en ventana ermergente el resultado de la suma 
	alert("La suma es " + resultado);

}

