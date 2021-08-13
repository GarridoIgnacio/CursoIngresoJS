/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{

  var tipoDeMaterial;
  var cantiadDeBolsas;
  var precioPorBolsa;
  var precioTotalPorBolsa;
  var porcentaje;
  var acumuladorArena;
  var acumuladorCal
  var acumuladorCemento;
  var flagTipoMasCaro;
  var precioMayor;
  var mensajePrecioMayor;
  var tipoMasCaro;
  var respuesta;
  var acumuladorBolsas;
  var precioConDescuento;
  var mensajeMayorCantidadDeBolsas;

  respuesta=true;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  precioTotalPorBolsa=0;
  acumuladorBolsas=0;
  flagTipoMasCaro=true;

  while(respuesta==true)
  {
    do{
      tipoDeMaterial=prompt("Ingrese el tipo de material (Arena, Cal, Cemento)");
      tipoDeMaterial=tipoDeMaterial.toLowerCase();
    }while(tipoDeMaterial!="arena"&&tipoDeMaterial!="cal"&&tipoDeMaterial!="cemento");
    do{
      cantiadDeBolsas= prompt("Ingrese la cantidad de bolsas qeu desea:");
      cantiadDeBolsas=parseInt(cantiadDeBolsas);
    }while(cantiadDeBolsas<0 || isNaN(cantiadDeBolsas)==true);
    do{
      precioPorBolsa= prompt("Ingrese el precio de una sola bolsa:")
      precioPorBolsa=parseFloat(precioPorBolsa);
    }while(precioPorBolsa<0 || isNaN(cantiadDeBolsas)==true);
    
    acumuladorBolsas= cantiadDeBolsas+acumuladorBolsas;
    precioTotalPorBolsa= precioPorBolsa + precioTotalPorBolsa;

    if(precioPorBolsa>precioMayor || flagTipoMasCaro==true)
    {
      precioMayor=precioPorBolsa;
      tipoMasCaro=tipoDeMaterial;
      mensajePrecioMayor="El tipo de material mas caro es: "+tipoMasCaro+" y el precio es: "+precioMayor+"$";
      flagTipoMasCaro==false;
    }

    switch(tipoDeMaterial)
    {
      case "arena":
        acumuladorArena= cantiadDeBolsas+acumuladorArena;  
      break;
      case "cal":
        acumuladorCal= cantiadDeBolsas+acumuladorCal;  
      break;
      default:
        acumuladorCemento=cantiadDeBolsas+acumuladorCemento;
        break;
    }

    respuesta=confirm("Desea ingresar otro porducto?");
  }

  if(acumuladorBolsas >10 && acumuladorBolsas<30)
  {
    porcentaje=15;
  }
  else
  {
    if(acumuladorBolsas>30)
    {
      porcentaje=25;
    }
    else
    {
      porcentaje=0;
    }
  }
  if(porcentaje!=0)
  {
    precioConDescuento= precioTotalPorBolsa -precioTotalPorBolsa *porcentaje/100;
  }
  if(acumuladorArena>=acumuladorCal && acumuladorArena>acumuladorCemento)
  {
    mensajeMayorCantidadDeBolsas="El material con mas cntiad de bolsas en la compra es: Arena con:"+acumuladorArena;
  }
  else
  {
    if(acumuladorCal>acumuladorCemento)
    {
      mensajeMayorCantidadDeBolsas="El material con mas cntiad de bolsas en la compra es: Cal con:"+acumuladorCal;
    }
    else
    {
      mensajeMayorCantidadDeBolsas="El material con mas cntiad de bolsas en la compra es: Cemento con:"+acumuladorCemento;
    }
  } 
 
  document.write("El precio burto total a pagar es: "+precioTotalPorBolsa+"<br>"+"El precio con descunto es: "+precioConDescuento+"<br>"+mensajeMayorCantidadDeBolsas+"<br>"+mensajePrecioMayor);


}









/*  var respuesta;
  var producto;
  var cantidadBolsas;
  var contadorBolsas;
  var precioBolsa;
  var porcentaje;
  var precioTotalPorBolsa;
  var precioTotalBruto;
  var acumuladorArena;
  var acumuladorCal;
  var acumuladorCemento;
  var precioMaximo;
  var tipoPrecioMaximo;
  var falgPrecioMaximo;
  var mensaje;
  var mensajeCantidadMayor;
  var mensajePrecioMaximo;


  respuesta= true;
  contadorBolsas= 0;
  porcentaje=0;
  precioTotalBruto=0;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  falgPrecioMaximo=true;

  while(respuesta==true)
  {
    do
    {
      producto=prompt("Que desea comprar Arena,Cal o Cemento?");
      producto=producto.toLocaleLowerCase();
    }while(producto!="arena" && producto!="cal" && producto!="cemento");
    do
    {
      cantidadBolsas=prompt("Cuantas bolsas desea?");
      cantidadBolsas=parseInt(cantidadBolsas);
    }while(cantidadBolsas<0 && isNaN(cantidadBolsas)==false);

    do
    {
      precioBolsa=prompt("Ingrese el precio de una bolsa:");
      precioBolsa=parseInt(precioBolsa);
    }while(precioBolsa<0 && isNaN(cantidadBolsas)==false);

    if(precioBolsa>precioMaximo || falgPrecioMaximo==true)                    //f
    {
      precioMaximo = precioBolsa;
      tipoPrecioMaximo= producto;
      mensajePrecioMaximo = "El tipo de producto con el precio mas alto es: "+ tipoPrecioMaximo +" con: "+precioMaximo;
      falgPrecioMaximo=false;
    }
    
    switch(producto)
    {
      case "arena":
        acumuladorArena = cantidadBolsas + acumuladorArena;
      break;
      case "cal":
        acumuladorCal= cantidadBolsas + acumuladorCal;
      break;
      default:
        acumuladorCemento = cantidadBolsas + acumuladorCemento;
      break;
      
    }

    contadorBolsas= cantidadBolsas+contadorBolsas;
    precioTotalPorBolsa= precioBolsa * cantidadBolsas;
    precioTotalBruto=precioTotalPorBolsa+precioTotalBruto;                     //A
      
    respuesta=confirm("Desea continuar?");
  }
  mensaje= "El importe a pagar sin descuento es: "+precioTotalBruto+"$";
  
  if(contadorBolsas==10 || contadorBolsas== 30)                                //B
  {  
    switch(contadorBolsas) 
    {
      case 10:
        porcentaje=15;
      break;
      case 30:
        porcentaje=25;
      break;
    }
    console.log("total: "+ precioTotalBruto);
    precioTotalBruto= precioTotalBruto - precioTotalBruto * porcentaje /100;
    console.log("descuento: "+ precioTotalBruto);
    mensaje="El importe con un "+porcentaje+"% de descuento es: "+precioTotalBruto+"$";
  }
  if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)  //D
  {
    mensajeCantidadMayor = "El tipo de producto con mas cantidad de bolsas es : Arena con: "+acumuladorArena;
  }
  else
  {
    if(acumuladorCal>acumuladorArena && acumuladorCal>acumuladorCemento)
    {
      mensajeCantidadMayor = "El tipo de producto con mas cantidad de bolsas es : Cal con: "+acumuladorCal;
    }
    else
    {
      mensajeCantidadMayor = "El tipo de producto con mas cantidad de bolsas es : Cemento con: "+acumuladorCemento;
    }
  }
  
 
  document.write("<br>"+mensaje);
  document.write("<br>"+mensajeCantidadMayor);
  document.write("<br>"+mensajePrecioMaximo);
  */