/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/

/* EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado
 */

function mostrar()
{
   var respuesta;
   var razaIngresada;
   var nombreIngresado;
   var edadIngresada;
   var pesoIngresado;
   var precioConsultaIngresado;
   var importeTotalVacunas;
   var porcentaje;
   var importeTotalConDescuento;
   var acumuladorShapei;
   var acumuladorGalgo;
   var acumuladorPastor;
   var flgaPerroMasViejo;
   var nombrePerroMasVejo;
   var razaPerroMasViejo;
   var edadPerroMasViejo;
   var contadorPerrosTotal;
   var contadorSharpei;
   var contadorGalgo;
   var contadorPastor;
   var mensajeRazaMayorCantidad;
   var mensajeDescuento;
   var mensajePerroMasviejo;
   var octavio;

   respuesta=true;
   flgaPerroMasViejo=true;
   porcentaje=0;
   contadorPerrosTotal=0;
   acumuladorShapei=0;
   acumuladorGalgo=0;
   acumuladorPastor=0;
   contadorSharpei=0;
   contadorGalgo=0;
   contadorPastor=0;

   while(respuesta==true)
   {
      do
      {
         razaIngresada=prompt("Cual de estas 3 razas es su mascota? Sharpei, Galgo, Pastor");
         razaIngresada=razaIngresada.toLowerCase();
      }while(razaIngresada!="sharpei" && razaIngresada!="galgo" && razaIngresada!="pastor");

      do
      {
         nombreIngresado=prompt("Ingrese el nombre de su mascota:");
      }while(isNaN(nombreIngresado)==false);

      do
      {
         edadIngresada=prompt("Cual es la edad de su mascotas? entre 1 y 25");
         edadIngresada= parseInt(edadIngresada);
      }while(edadIngresada<1 || edadIngresada>25 || isNaN(edadIngresada)==true);
      
      do
      {
         pesoIngresado=prompt("Ingrese el peso de su mascota:");
         pesoIngresado=parseFloat(pesoIngresado);
      }while(pesoIngresado<1 || isNaN(pesoIngresado)==true);
      do
      {
         precioConsultaIngresado=prompt("Ingrese el precio de la cunsulta. Entre 500 y 1500");
         precioConsultaIngresado=parseInt(precioConsultaIngresado);
      }while(precioConsultaIngresado<500||precioConsultaIngresado>1500 || isNaN(precioConsultaIngresado)==true);

      contadorPerrosTotal++;

      if(edadIngresada>edadPerroMasViejo || flgaPerroMasViejo==true) 
      {
         edadPerroMasViejo= edadIngresada;
         razaPerroMasViejo= razaIngresada;
         nombrePerroMasVejo= nombreIngresado;
         mensajePerroMasviejo= "El nombre del perro mas viejo es: "+nombrePerroMasVejo+" su edad: "+edadPerroMasViejo+" y su raza: "+razaPerroMasViejo;
         flgaPerroMasViejo=false;
      }               

      switch(razaIngresada)
      {
         case "sharpei":
            contadorSharpei++;
            acumuladorShapei= contadorSharpei +acumuladorShapei;
         break;
         case "galgo":
            contadorGalgo++;
            acumuladorGalgo= contadorGalgo + acumuladorGalgo;
         break;
         default:
            contadorPastor++;
            acumuladorPastor= contadorPastor + acumuladorPastor;
         break;
      }

      

      respuesta=confirm("Desea ingresar otro canino?");
   }
   importeTotalVacunas= precioConsultaIngresado * contadorPerrosTotal;

   switch(contadorPerrosTotal)
   {
      case 1:
         porcentaje=0
      break;
      case 2:
      case 3:
         porcentaje= 20;
      break;
      default:
         porcentaje= 30;
      break;
      
   }
   if(porcentaje!=0)
   {
      importeTotalConDescuento= importeTotalVacunas - importeTotalVacunas * porcentaje /100;
      mensajeDescuento= " El Impotrte con el descuneto del "+porcentaje+"% es: "+importeTotalConDescuento;
   }
   else
   {
      mensajeDescuento= "No se hay descunto";
   }
      
   if(acumuladorShapei>= acumuladorGalgo && acumuladorShapei > acumuladorPastor)
   {
      mensajeRazaMayorCantidad= "La raza con mayor cantidad es: Sharpei con: "+acumuladorShapei;
   }
   else
   {
      if(acumuladorGalgo>acumuladorPastor)
      {
         mensajeRazaMayorCantidad= "La raza con mayor cantidad es: Galgo con: "+acumuladorGalgo;
      }
      else
      {
         mensajeRazaMayorCantidad= "La raza con mayor cantidad es: Pastor con: "+acumuladorPastor;
      }
   }

   document.write("El importe a pagar sin descuento es :"+importeTotalVacunas+"$"+"<br>"+mensajeDescuento+"<br>"+mensajeRazaMayorCantidad+"<br>"+mensajePerroMasviejo);


}



/* 	var tipoDisco;
   var precio;
   var cantidadUnidades;
   var marca;
   var capacidad;
   var i;
   var precioMinimoSSD;
   var flagMinimoSSD;
   var acumuladorSSD;
   var marcaMinimoSSD;
   var flagMaximoHDD;
   var capacidadMaximoHDD;
   var acumuladorMaximoHDD;
   var precioMaximoHDD;
   var mensajeMinimoSSD;
   var mensajeMaximoHDD;
   var mensajeCantidadHDD

   flagMinimoSSD= true;
   acumuladorSSD= 0;
   flagMaximoHDD=true;
   acumuladorMaximoHDD=0;
   acumuladorHDD= 0;

   for(i=0;i<5;i++)
   {
      do
      {
         tipoDisco=prompt("Ingrese el tipo de disco rígido: ");
         tipoDisco=tipoDisco.toUpperCase();
      }while(tipoDisco!="HDD" && tipoDisco!="SSD" && tipoDisco!="SSDM2");
      do
      {
         precio=prompt("Ingrese un precio entre 5000 y 18000;");
         precio= parseInt(precio);
      }while(precio<5000 || precio>18000 || isNaN(precio)==true);
      do
      {
         cantidadUnidades=prompt("Ingrese la cantidad de unidades entre 1 y 50:");
         cantidadUnidades= parseInt(cantidadUnidades)
      }while(cantidadUnidades<1 || cantidadUnidades>50 || isNaN(cantidadUnidades)==true);
     do
     {
         marca= prompt("Ingrese la marca siendo: Seagate, Western Digital o Kingston:");
         marca= marca.toLowerCase();
     }while(marca!="seagate"&& marca!="western digital" && marca!="kingston"); 
     do
     {
         capacidad= prompt("Ingresar capacidad del disco entre, 250Gb 500Gb 1Tb o 2Tb");
         capacidad= capacidad.toLowerCase();
     }while(capacidad!="250gb" && capacidad!="500gb" && capacidad!="1tb" && capacidad!="2tb");
     switch(tipoDisco)
     {
      case "SSD":
         if(precio<precioMinimoSSD || flagMinimoSSD==true)
         {
            precioMinimoSSD= precio;
            acumuladorSSD= cantidadUnidades + acumuladorSSD;
            marcaMinimoSSD= marca;
            flagMinimoSSD=false;
         }
      break;
      case "HDD":
            acumuladorHDD= cantidadUnidades +acumuladorHDD;

         if(precio>precioMaximoHDD || flagMaximoHDD==true)
         {
            precioMaximoHDD= precio;
            capacidadMaximoHDD= capacidad;
            acumuladorMaximoHDD= cantidadUnidades + acumuladorMaximoHDD;
            flagMaximoHDD=false;
         }
      break;
     }

   }
   mensajeMinimoSSD= "El mas barato de los SSD es: "+precioMinimoSSD+" "+marcaMinimoSSD+" "+acumuladorSSD;
   mensajeMaximoHDD= "El mas caro de los HDD es: "+precioMaximoHDD+"  "+capacidadMaximoHDD+" "+ acumuladorMaximoHDD;
   mensajeCantidadHDD= " La cantidad de unidades de HDD es: "+acumuladorHDD;

   document.write("<br>"+mensajeMinimoSSD);
   document.write("<br>"+mensajeMaximoHDD);
   document.write("<br>"+mensajeCantidadHDD);
 */