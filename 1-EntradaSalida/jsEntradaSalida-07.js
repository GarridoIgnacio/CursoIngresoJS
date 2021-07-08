/*  Nombro: Ignacio
  Apellido: Garrido
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado;
	
	/*numero1 = parseInt(document.getElementById("txtIdNumeroUno").value); // pasamos la variable de string a numnero (de texto a numero)
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value); */

	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);

	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

    resultado = numero1 + numero2;
	
	alert("La suma dio "+resultado);	
}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	/*numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);*/

	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);

	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);
	
	resultado = numero1 - numero2;

	alert("La resta dio "+resultado);


}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	/*numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);*/
   
    numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);

	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resultado = numero1 * numero2;

	alert("La multiplicación dio "+resultado);

	
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	/*numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);*/

	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);

	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);
	
	resultado = numero1 / numero2;

	alert("La divición dio "+resultado);


}

