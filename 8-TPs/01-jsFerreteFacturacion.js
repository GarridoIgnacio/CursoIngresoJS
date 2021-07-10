/*  Nombro: Ignacio
  Apellido: Garrido
  Divivición: G
  e-mail: nacho.gdo@gmail.com


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{

    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Suma;

    PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt(PrecioUno);

    PrecioDos = document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt(PrecioDos);

    PrecioTres = document.getElementById("txtIdPrecioTres").value;
    PrecioTres = parseInt(PrecioTres);

    Suma = PrecioUno + PrecioDos + PrecioTres;

    mensaje = "La suma dio: "+Suma;

    alert(mensaje);


}
function Promedio () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var resultado;

    PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt(PrecioUno);

    PrecioDos = document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt(PrecioDos);

    PrecioTres = document.getElementById("txtIdPrecioTres").value;
    PrecioTres = parseInt(PrecioTres);

    resultado = (PrecioUno + PrecioDos + PrecioTres)/3;

    mensaje = "Su promedio es: "+resultado;

    alert(mensaje);
    




}
function PrecioFinal () 
{
	var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var suma;
    var IVA;
    var resultado;

    PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt(PrecioUno);

    PrecioDos = document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt(PrecioDos);

    PrecioTres = document.getElementById("txtIdPrecioTres").value;
    PrecioTres = parseInt(PrecioTres);

    suma = PrecioUno + PrecioDos + PrecioTres;
    IVA = (suma * 21)/100;
    resultado = suma + IVA;

    mensaje = "El total más IVA es: "+resultado;

    alert(mensaje);

}