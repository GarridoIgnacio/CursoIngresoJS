// Ignacio
// Garrido
/* Una cervecería necesita realizar un sistema de ventas online, donde se calculará las preferencias de 10 clientes. Los datos necesarios son:
-Nombre del cliente (no puede contener números)
-Edad (validar que sea mayor a 18 años)
-Tipo de cerveza: Roja – Honey – Negra
-Preferencia: (tirada – en botella)
-Precio por unidad
-Cantidad de unidades Calcular y mostrar en un document.write:
a) A la compra más grande realizada, se le otorgará un 10% de descuento, mostrando el nombre del cliente y su edad.
b) La mínima cantidad de botellas vendidas.
c) Cuantas cervezas honey en botella se compraron.
d) El cliente más viejo que compró cerveza roja.
e) El porcentaje de clientes que compraron cerveza roja, cerveza negra y cerveza honey. */

function mostrar()
{
    var nomnreIngresado;
    var edadIngresada;
    var tipoCervezaIngresado;
    var preferenciaIngresada;
    var precioPorUnidad;
    var cantidadIngresada;
    var precioTotal;
    var flagCompraMasGrande;
    var CantiadCompraMasGrande;
    var edadCompraMasGrande;
    var nombreCompraMasGrande;
    var porcentaje;
    var contadorHoney;
    var flagCompraMinima;
    var cantidadMinima;
    var contadortotal;
    var i;
    var precioCompraMasGrande;
    var porcentajeCompraMasGrande;
    var acumuladorBotellasHoney;
    var flagEdadMayor;
    var EdadMayor;
    var nombreEdadMayor;
    var contadorNegra;
    var contadorRoja;
    var porcentajeRoja;
    var porcentajeNegra;
    var porcentajeHoney;
    var acumuladorTotal;

    contadorHoney=0;
    porcentaje=0;
    contadorHoney=0;
    acumuladorBotellasHoney=0;
    contadortotal=0;
    flagEdadMayor=true
    flagCompraMinima=true
    flagCompraMasGrande=true
    contadorNegra=0;
    contadorRoja=0;
    acumuladorTotal=0;

    for(i=0;i<10;i++)
    {
        do
        {
            nomnreIngresado=prompt("Ingrese su nombre:");
        }while(isNaN(nomnreIngresado)==false);
        do{
            edadIngresada=prompt("Ingrese su edad");
            edadIngresada=parseInt(edadIngresada);
        }while(edadIngresada<18 || isNaN(edadIngresada)==true);
        do{
            tipoCervezaIngresado=prompt("Ingrese el tipo de cerveza: Roja, Honey o Negra");
            tipoCervezaIngresado=tipoCervezaIngresado.toLowerCase();
        }while(tipoCervezaIngresado!="roja"&&tipoCervezaIngresado!="honey"&&tipoCervezaIngresado!="negra");
        do{
            preferenciaIngresada=prompt("Ingrese su preferencia: Tirada o en Botella");
            preferenciaIngresada=preferenciaIngresada.toLowerCase();
        }while(preferenciaIngresada!="tirada" && preferenciaIngresada!="botella");
        do{
            precioPorUnidad=prompt("Ingrese el precio por unidad");
            precioPorUnidad=parseFloat(precioPorUnidad);
        }while(precioPorUnidad<50 || isNaN(precioPorUnidad)==true);
        do
        {
            cantidadIngresada=prompt("Ingrese la cantidad deseada:");
            cantidadIngresada=parseInt(cantidadIngresada);
        }while(cantidadIngresada<0 || isNaN(cantidadIngresada)==true);
        
        contadortotal++;
        console.log(" pureba" +contadortotal)
        acumuladorTotal= cantidadIngresada + acumuladorTotal;
        precioTotal = precioPorUnidad * cantidadIngresada;

        if(cantidadIngresada>CantiadCompraMasGrande || flagCompraMasGrande==true)
        {
            CantiadCompraMasGrande=cantidadIngresada;
            edadCompraMasGrande= edadIngresada;
            nombreCompraMasGrande= nomnreIngresado;
            precioCompraMasGrande= precioTotal;
            porcentaje=10;
            flagCompraMasGrande=false;
        }
        if(cantidadIngresada<cantidadMinima || flagCompraMinima==true)
        {
            cantidadMinima= cantidadIngresada;
        }
        switch(tipoCervezaIngresado)
        {
            case "roja":
                contadorRoja++;
                if(edadIngresada>EdadMayor || flagEdadMayor==true)
                {
                    EdadMayor=edadIngresada;
                    nombreEdadMayor= nomnreIngresado;
                    flagEdadMayor=false;
                }
            break;
            case "honey":
                contadorHoney++;
                if(preferenciaIngresada=="botella")
                {
                    acumuladorBotellasHoney= cantidadIngresada+acumuladorBotellasHoney;
                }
            break;
            case "negra":
                contadorNegra++;
            break;
        }


    
    }
    
    porcentajeCompraMasGrande= precioCompraMasGrande * porcentaje/100;

    porcentajeHoney= contadorHoney / contadortotal *100;
    porcentajeNegra= contadorNegra / contadortotal *100;
    porcentajeRoja= contadorRoja / contadortotal *100;

    document.write("La cantiadad total de Unidades es: "+acumuladorTotal+"<br>"+"La compra mas grande realziada es: "+CantiadCompraMasGrande+" El cliente es: "+nombreCompraMasGrande+" su edad: "+edadCompraMasGrande+" se le otraga un descuento de: "+porcentajeCompraMasGrande
    +"<br>"+ "la minima cantiadad de botellas vendidas: "+cantidadMinima+"<br>"+"Se compraron Cerevezas Honey en botellas: "+acumuladorBotellasHoney+"<br>"+"El cliente más viejo que compró cerveza roja: "+ nombreEdadMayor+" edad: "+EdadMayor
    +"<br>"+"Los porcentajes de cervezas son: Honey "+porcentajeHoney+" Negra "+sporcentajeNegra+" Roja"+porcentajeRoja);

}
