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
 
    var cantidadLampara;
    var precio;
    var precioFinal;
    var porcentaje;
    var fabricante;
    var precioPorCantidad;
    var calculoIIBB;
    var mensaje;

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    cantidadLampara = parseInt(cantidadLampara);
    fabricante = document.getElementById("Marca").value;
    
    porcentaje = 0;
    precio = 35;
    precioPorCantidad = cantidadLampara * precio;
   
    switch(cantidadLampara)
    {
        case 1:
        case 2:
            porcentaje = 0
        break;
        case 3:
            if(fabricante=="ArgentinaLuz")
            {
                porcentaje=15;
            }
            else
            {
                if(fabricante=="FelipeLamparas")
                {
                    porcentaje=10;
                }
                else
                {
                    porcentaje=5;
                }
            }
        break;
        case 4:
            if(fabricante =="ArgentinaLuz" || fabricante == "FelipeLamparas") 
            {
                porcentaje=25;
            }
            else
            {
                porcentaje=20;
            }
        break;
        case 5:
            if(fabricante=="ArgentinaLuz")
            {
                porcentaje=40;
            }
            else
            {
                porcentaje=30;
            }
        break;
        default:
            porcentaje=50;
        break;
    }
    precioFinal = precioPorCantidad - precioPorCantidad * porcentaje /100;
    
    if(precioFinal > 119)
    {
        calculoIIBB = precioFinal * 10 /100;
        precioFinal = precioFinal + calculoIIBB;
        
        mensaje = "Usted pago 10% de IIBB, siendo: $"+calculoIIBB+" el impuesto agregado al precio final";
        alert(mensaje);
    
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal; 


   /* if(cantidadLampara == 3)                                                        
    {
        switch(fabricante)
        {
            case "ArgentinaLuz":
                porcentaje = 15;
            break;
            case "FelipeLamparas":
                porcentaje = 10;
            break;
            default:
                porcentaje = 5 ;
            break;
        }
    }
    else
    {
        if(cantidadLampara == 4)
        {
            switch(fabricante)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                break;
                default:
                    porcentaje = 20;
                break;
            }
        }
        else
        {   
            if(cantidadLampara == 5)
            {
                switch(fabricante)
                {
                    case "ArgentinaLuz":
                        porcentaje = 40;
                    break;
                    default:
                        porcentaje = 30;
                     break;
                }
            }
            else
            {
                if(cantidadLampara >= 6)
                {
                    porcentaje = 50;
                }
                
            }       
        }
    }
    
    precioFinal = precioPorCantidad - precioPorCantidad * porcentaje /100;
    
    if(precioFinal > 119)
    {
        calculoIIBB = precioFinal * 10 /100;
        precioFinal = precioFinal + calculoIIBB;
        
        mensaje = "Usted pago 10% de IIBB, siendo: $"+calculoIIBB+" el impuesto agregado al precio final";
        alert(mensaje);
    
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal; */

 
}


	/*
    var cantidadLampara;   
    var precioTotal;
    var porcentaje;
    var descuento;
    var calculoProcentaje;
    var fabricante;

    porcentaje = 0;
    cantidadLampara = document.getElementById("txtIdCantidad").value;
    cantidadLampara = parseInt(cantidadLampara);
    fabricante = document.getElementById("Marca").value;

   switch(cantidadLampara) 
        {
            case 1:
            case 2:
                porcentaje = 0;
            break;
            case 3:
                switch(fabricante)
                {
                    case "ArgentinaLuz":
                        porcentaje = 15;
                    break;
                    case "FelipeLamparas":
                        porcentaje = 10;
                    break;
                    default:
                        porcentaje = 5;
                    break;
                }
            break;
            case 4:
                switch(fabricante)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentaje = 25;
                    break;
                    default:
                        porcentaje = 20;
                    break;
                }
            break;
            case 5:
                switch(fabricante) 
                {
                    case "ArgentinaLuz":
                        porcentaje = 40;
                    break;
                    default:
                        porcentaje = 30;
                    break;
                }
            break;
            default: 
                porcentaje = 50;
            break;
        }
    
        precioTotal = cantidadLampara * 35;
        calculoProcentaje = precioTotal * porcentaje /100 ;
        descuento = precioTotal - calculoProcentaje; 
    
        if (descuento > 120)
        {
            aumento = descuento *10 /100;
            descuento = descuento + aumento;
    
            alert("Usted pago 10% de IIBB, siendo " +  aumento + "$ el impuesto que se pagó"); 
        }
    
        document.getElementById("txtIdprecioDescuento").value = descuento; */


    
    
    
    
    
    /* if(cantidadLamp > 5) //A
    {
        porcentaje = 50;   
        
    }
    else
    {
        if(cantidadLamp == 5 ) //B
        {
            if(fabricante == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
            

        }
        else
        {
            if(cantidadLamp == 4) //C
            {
                if(fabricante =="ArgentinaLuz" || fabricante == "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            }
            else
            {
                if(cantidadLamp == 3) //D
                {
                    if(fabricante =="ArgentinaLuz" )
                    {
                        porcentaje = 15;
                    }
                    else
                    {
                        if(fabricante == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }
                    
                
                }   
            }

        }

    }

    precioTotal = cantidadLamp * 35;
    calculoProcentaje = precioTotal * porcentaje /100 ;
    descuento = precioTotal - calculoProcentaje;
    
    if(descuento > 120) //E
    {
        aumento = descuento *10 /100;
        descuento = descuento + aumento;

        alert("Usted pago 10% de IIBB, siendo " +  aumento + "$ el impuesto que se pagó");
        
    }
    
       document.getElementById("txtIdprecioDescuento").value = descuento;
   */
