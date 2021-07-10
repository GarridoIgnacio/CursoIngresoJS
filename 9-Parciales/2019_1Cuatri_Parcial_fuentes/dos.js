    Nombro: Ignacio
  Apellido: Garrido
Divivición: G
    e-mail: nacho.gdo@gmail.com

//A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".

function mostrar()
{
  var NombreUno;
  var NombreDos;
  var PesoUno;
  var PesoDos;
  var Unidad;
  var SumaPesos;
  var PromedioPesos;
  var mensaje;

  NombreUno = prompt("Ingrese el primer nombre");
  PesoUno = prompt("Ingrese su peso");
  PesoUno = parseFloat(PesoUno);
  Unidad = prompt("Ingrese Kilos O Libras");
  
  NombreDos = prompt("Ingrese el segundo nombre");
  PesoDos = prompt("Ingrese su peso");
  PesoDos = parseFloat(PesoDos);

  SumaPesos = PesoUno+PesoDos;
  PromedioPesos = SumaPesos/2;

  mensaje = "Ustdes se llaman "+NombreUno+" y "+NombreDos+" pesan "+PesoUno+" y "+PesoDos+" "+Unidad+", que sumados som: "+SumaPesos+" "+Unidad+" y el promedio de sus pesos es: "+PromedioPesos+" "+Unidad;

  alert(mensaje);






}
