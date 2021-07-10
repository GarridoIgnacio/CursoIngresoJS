/* Nombre: Ignacio
 Apellido: Garrido
Divivición: G 
   E-mail: nacho.gdo@gmail.com

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo;
   var ancho;
   var perimetro;
   var alambre;

   largo = document.getElementById("txtIdLargo").value;
   largo = parseInt(largo);

   ancho = document.getElementById("txtIdAncho").value;
   ancho = parseInt(ancho);

   perimetro = (largo + ancho)*2;

   alambre = perimetro * 3;

   mensaje = "Los metros requerido de alambre son: " + alambre + "m";

   alert(mensaje);

}
function Circulo () 
{ 
   var radio;
   var perimetro;
   var alambre;

   radio = document.getElementById("txtIdRadio").value;
   radio = parseInt(radio);

   perimetro = 2 * 3.14 * radio;

   alambre = perimetro * 3;

   mensaje = "Los metros requerido de alambre son: " + alambre +"m";

   alert(mensaje);

}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;
    

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho =parseInt(ancho);

    superficie = largo * ancho;

    cemento = superficie * 2;

    cal = superficie * 3;

    mensaje = "Las bolsas necesarias por m2 son: " + cemento + " de cemento y " + cal + " de cal";
    
    alert(mensaje);

    
}