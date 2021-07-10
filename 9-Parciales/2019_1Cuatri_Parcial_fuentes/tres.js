    Nombro: Ignacio
  Apellido: Garrido
Divivición: G
    e-mail: nacho.gdo@gmail.com

//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

function mostrar()
{
 var Precio;
 var Descuento;
 var Porcentaje;
 var Moneda;
 var Mensaje;

 Precio = prompt("Por favor ingrese el precio");
 Precio = parseFloat(Precio);
 Moneda = prompt("Ingrese el tipo de moneda");

 Descuento = prompt("Ingrese el descunto");
 Descuento = parseFloat(Descuento);

 Porcentaje =  Precio-(Precio * Descuento/100);

 Mensaje = Precio+" "+Moneda+" con el "+Descuento+"% es:"+Porcentaje+" "+Moneda;

 document.getElementById("elPrecioFinal").value = Mensaje;


}
