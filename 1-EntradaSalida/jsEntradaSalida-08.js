/*  Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	/*dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);*/

	dividendo = txtIdNumeroDividendo.value;
	dividendo = parseInt(dividendo);

	divisor = txtIdNumeroDivisor.value;
	divisor = parseInt(divisor);
	
	resto = dividendo % divisor; 
	
	alert("El resto es " + resto);


}
