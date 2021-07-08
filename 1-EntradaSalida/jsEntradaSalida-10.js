/*  Nombro: Ignacio
  Apellido: Garrido
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

  importe = document.getElementById("txtIdImporte").value;
  importe = parseInt(importe);
  
  porcentaje = (importe / 100)*25;

  resutado = importe - porcentaje;

  txtIdResultado.value = resutado;
  

}
