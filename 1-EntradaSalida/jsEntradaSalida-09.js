/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
	var resultado;
    var porcentaje;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	porcentaje = (sueldo / 100)*10;
	resultado = sueldo + porcentaje;

	document.getElementById("txtIdResultado").value = resultado;
	
}
