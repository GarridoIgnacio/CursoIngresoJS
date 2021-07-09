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
  var calculo;
    

  importe = document.getElementById("txtIdImporte").value;
  importe = parseInt(importe);

  porcentaje = prompt("Ingrese el porcentaje")
  
  calculo = (importe / 100)*porcentaje;

  resutado = importe - calculo;

  document.getElementById("txtIdResultado").value = resutado;
  

}
