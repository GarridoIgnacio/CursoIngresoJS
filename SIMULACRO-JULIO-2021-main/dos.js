// Ignacio
// Garrido
/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

/* EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.

B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.

C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.

Nombre.length < 3 && nombre.length > 10
*/

function mostrar()
{
  
    var respuesta;
    var nombreCarta;
    var tipoDeCarta;
    var rarezaDeCarta;
    var precioDecarta;
    var flagCartaMayorPrecio;
    var precioMayor;
    var nombreMayorPrecio;
    var rarezaMayorPrecio;
    var contadorCartastrampa;
    var contadorRara;
    var contadorSuperRara;
    var contadorMonstruoUltraRaro;
    var acumualdorPrecioMonstruo;
    var acumualdorCartaTrampa;
    var acumualdorRara;
    var acumualdorSuperRara;
    var promedioPrecioMonstuo;
    var mensajePreciMayor;

    respuesta=true;
    flagCartaMayorPrecio=true;
    contadorCartastrampa=0;
    contadorRara=0;
    contadorSuperRara=0;
    acumualdorCartaTrampa=0;
    acumualdorRara=0;
    acumualdorSuperRara=0;
    acumualdorPrecioMonstruo=0;
    contadorMonstruoUltraRaro=0;

    while(respuesta==true)
    {
      do
      {
        nombreCarta=prompt("Ingrese el nombre de la carta:");
      }while(nombreCarta.length < 3 || nombreCarta.length > 10 || isNaN(nombreCarta)==false);
      do
      {
        tipoDeCarta=prompt("Ingrese el tipo de carta sinedo: Monstruo, Magica, Trampa");
        tipoDeCarta=tipoDeCarta.toLowerCase();
      }while(tipoDeCarta!="monstruo" && tipoDeCarta!="magica"&& tipoDeCarta!="trampa");
      do
      {
        rarezaDeCarta=prompt("Ingrese el tipo de rareza sinedo:Rara, Super rara, Ultra rara ");
        rarezaDeCarta=rarezaDeCarta.toLowerCase();
      }while(rarezaDeCarta!="rara" && rarezaDeCarta!="super rara" && rarezaDeCarta!="ultra rara");
      do
      {
        precioDecarta=prompt("Ingrese el precio de la carta:");
        precioDecarta=parseFloat(precioDecarta);
      }while(precioDecarta<1 || isNaN(precioDecarta)==true);

      if(precioDecarta>precioMayor || flagCartaMayorPrecio==true)
      {
        precioMayor=precioDecarta;
        nombreMayorPrecio= nombreCarta;
        rarezaMayorPrecio=rarezaDeCarta;
        mensajePreciMayor="La carata con Mayor precio es: "+precioMayor+"$ su nombre es: "+nombreMayorPrecio+" y su rareza es: "+rarezaMayorPrecio;
        flagCartaMayorPrecio=false;
      }
      switch(tipoDeCarta)
      {
        case "trampa":
          contadorCartastrampa++;
            switch(rarezaDeCarta)
            {
              case "rara":
                contadorRara++;
              break;
              case "super rara":
                contadorSuperRara++;
              break;
            }
        break;
        case "monstruo":
            if(rarezaDeCarta=="ultra rara" && precioDecarta<500)
            {
              contadorMonstruoUltraRaro++;
              acumualdorPrecioMonstruo= precioDecarta + acumualdorPrecioMonstruo;
            }
        break;
      }
      
      respuesta=confirm("Desea agregar otra carta?");
    }
    promedioPrecioMonstuo= acumualdorPrecioMonstruo / contadorMonstruoUltraRaro;

  document.write(mensajePreciMayor+"<br>"+"La cantidad de cartas tipo Trampa es: "+contadorCartastrampa+" rareza Rara: "+contadorRara+" rareza Super rara: "+contadorSuperRara
  +"<br>"+ "El promedio del precio de las cartas tipo Mounstro con rareza Ultra rara es: "+promedioPrecioMonstuo);



}

/* var tipo;
  var cantidadBolsas;
  var precio;
  var porcentaje;
  var precioBruto;
  var acumuladorBolsas;
  var acumuladorYerba;
  var acumuladorAzucar;
  var acumuladorCafe;
  var precioMinimo;
  var tipoMinimoM;
  var respuesta;
  var mayorCantidadBolsas;
  var flagPrecioMinimo;
  var mensajeMinimo;


  respuesta=true;
  porcentaje= 0;
  acumuladorYerba=0;
  acumuladorAzucar=0;
  acumuladorCafe=0;
  acumuladorBolsas=0;
  flagPrecioMinimo=true;

  while(respuesta==true)
  {
    do
    {
      tipo=prompt("Ingrese el producto que desea comprar: Yerba, Azucar o Cafe:");
      tipo=tipo.toLowerCase();
    }while(tipo!="yerba" && tipo!="azucar" && tipo!="cafe");
    do
    {
      cantidadBolsas=prompt("Cunatas bolsas desa de este producto?");
      cantidadBolsas=parseInt(cantidadBolsas);
    }while(cantidadBolsas<0 || isNaN(cantidadBolsas)==true);
    do
    {
      precio=prompt("Ingrese el precio de una bolsa:");
      precio= parseInt(precio);
    }while(precio<0 || isNaN(precio)==true);
    
    acumuladorBolsas= cantidadBolsas +acumuladorBolsas;
    precioBruto= precio * cantidadBolsas;
    mensaje= "El precio sin descuento es: "+precioBruto;
    
    if(precio<precioMinimo || flagPrecioMinimo==true)
    {
        precioMinimo= precio;
        tipoMinimoM= tipo;
        mensajeMinimo = "El precio minimo es: "+precioMinimo+" El producto es: "+tipoMinimoM;
        flagPrecioMinimo=false;
    }

    switch(tipo)
    {
      case "yerba":
        acumuladorYerba = cantidadBolsas +acumuladorYerba;
      break;
      case "azucar":
        acumuladorAzucar= cantidadBolsas + acumuladorAzucar;
      break;
      default:
        acumuladorCafe= cantidadBolsas+ acumuladorCafe;
      break;
    }
  
    
    respuesta=confirm("Desea continuar?");
  }

  if(acumuladorBolsas== 5 || acumuladorBolsas == 10)
  {
    switch(acumuladorBolsas)
    {
      case 5:
        porcentaje=10;
      break;
      case 10:
        porcentaje=15;
      break;
    }
    precioBruto= precioBruto - precioBruto * porcentaje/100;
    mensaje= "el precio con descunto del "+porcentaje+"% es: "+ precioBruto
  }
  if(acumuladorYerba >= acumuladorAzucar && acumuladorYerba >= acumuladorCafe)
  {
    mayorCantidadBolsas= acumuladorYerba;
    mensajeMayor= "El porducto con mayor bolsas es: Yerba "+acumuladorYerba;
  }
  else
  {
    if(acumuladorAzucar>acumuladorCafe)
    {
      mayorCantidadBolsas= acumuladorAzucar;
      mensajeMayor= "El porducto con mayor bolsas es: Azucar "+acumuladorAzucar;
    }
    else
    {
      mayorCantidadBolsas=acumuladorCafe;
      mensajeMayor= "El porducto con mayor bolsas es: Cafe "+acumuladorCafe;
    }
    
  }
  
  document.write("<br>"+mensaje);
  document.write("<br>"+mensajeMayor);
  document.write("<br>"+mensajeMinimo); */