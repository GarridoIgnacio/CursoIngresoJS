/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var CantidadLamp;   
    var PrecioTotal;
    var Porcentaje;
    var Descuento;
    var CalculoProcentaje;
    var Fabricante;
    var Aumento;

    Porcentaje = 0;
    CantidadLamp = document.getElementById("txtIdCantidad").value;
    CantidadLamp = parseInt(CantidadLamp);
    Fabricante = document.getElementById("Marca").value;

    PrecioTotal = CantidadLamp * 35;

    if(CantidadLamp > 5) //A
    {
        Porcentaje = 50;   
        
    }
    else
    {
        if(CantidadLamp == 5 ) //B
        {
            if(Fabricante == "ArgentinaLuz")
            {
                Porcentaje = 40;
            }
            else
            {
                Porcentaje = 30;
            }
            

        }
        else
        {
            if(CantidadLamp == 4) //C
            {
                if(Fabricante =="ArgentinaLuz" || Fabricante == "FelipeLamparas")
                {
                    Porcentaje = 25;
                }
                else
                {
                    Porcentaje = 20;
                }
            }
            else
            {
                if(CantidadLamp == 3) //D
                {
                    if(Fabricante =="ArgentinaLuz" )
                    {
                        Porcentaje = 15;
                    }
                    else
                    {
                        if(Fabricante == "FelipeLamparas")
                        {
                            Porcentaje = 10;
                        }
                        else
                        {
                            Porcentaje = 5;
                        }
                    }
                    
                
                }   
            }

        }

    }

    
    CalculoProcentaje = PrecioTotal * Porcentaje /100 ;
    Descuento = PrecioTotal - CalculoProcentaje;
    
    if(Descuento > 120) //E
    {
        Aumento = Descuento *10 /100;
        Descuento = Descuento + Aumento;

        alert("Usted pago 10% de IIBB, siendo " +  Aumento + "$ el impuesto que se pagó");
        
    }

    document.getElementById("txtIdprecioDescuento").value = Descuento;
   
}