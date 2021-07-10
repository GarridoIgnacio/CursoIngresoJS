/* Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// variables que voy a usar
	var NuemroUno;
	var NumeroDos;
	var resultado;
   
	/* UNA MANERA
	//traigo los datos del imput del html para guardalso en la variable osea lo que se escribe en el cuadro de texto
	num1 = document.getElementById("txtIdNumeroUno").value;
    num2 = document.getElementById("txtIdNumeroDos").value;
 
	//con el parseInt convierto los datos tomados de txt a num, filtra del 1 al 9, numeros enteros para numors con decimales se usa "parseFloat"
    num1 = parseInt(num1);
	num2 = parseInt(num2);

	// OTRA forma es..

    /*num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// sumo las dos variables ahora numericas y guardo en el resulato en la variable resultado
	resultado = num1 + num2;
	
	// con alter muestro en ventana ermergente el resultado de la suma 
	alert("La suma es " + resultado);*/

	// Froma Correcta y Ordenada del codigo.

    NuemroUno = document.getElementById("txtIdNumeroUno").value;
	NuemroUno = parseInt(NuemroUno);
	
	NumeroDos = document.getElementById("txtIdNumeroDos").value;
	NumeroDos = parseInt(NumeroDos);

	resultado = NuemroUno+ NumeroDos;

	mensaje = "la suma es: "+resultado;

	alert(mensaje);


}

