/*  Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo;
	var resultado;
  var Calculo;
	var porcentaje;

	/*sueldo = parseInt(document.getElementById("txtIdSueldo").value);*/

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	
  porcentaje = prompt("Ingrese el porsebtaje");
	Calculo = (sueldo / 100)*porcentaje;
	resultado = sueldo + Calculo;

	mensaje = sueldo + " con un aumento de " + porcentaje + "% es: " + resultado; 

	txtIdResultado.value = mensaje;
	
}
