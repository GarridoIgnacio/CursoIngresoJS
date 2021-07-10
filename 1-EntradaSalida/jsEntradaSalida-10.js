/*  Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
  var porcentaje;
  var resutado;
  var calculo;
    
  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);

  porcentaje = prompt("Ingrese el porcentaje");
  
  calculo = importe * porcentaje/100;
  resutado = importe - calculo;

  mensaje = importe + " con " + porcentaje + "% de descueento es: "+ resutado;

  document.getElementById("txtIdResultado").value = mensaje;


}
