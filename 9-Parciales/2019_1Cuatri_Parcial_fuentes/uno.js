    Nombro: Ignacio
  Apellido: Garrido
Divivición: G
    e-mail: nacho.gdo@gmail.com

//Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.

function mostrar()
{
 var base;
 var altura;
 var unidad;
 var perimetro;

 base = prompt("Ingrese el valor de la base");
 altura = prompt("Ingrese el valor de la altura");
 unidad = prompt("Ingrese la unidad de medida");

 perimetro = (base * altura)/2;

 mensaje = "El peririmetro con la "+base+unidad+" y la "+altura+unidad+" es: "+perimetro+unidad;

 alert(mensaje);

}
