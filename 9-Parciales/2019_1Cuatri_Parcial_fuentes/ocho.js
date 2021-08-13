/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar()
{
    var numeroIngresado;
    var letraIngresada;
    var sumaNegativos;
    var sumaPositivos;
    var promedioPositivos;
    var numeroMaximo;
    var numeroMinimo;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var contadorPositivos;
    var respuesta;
    var flagPrimero;
    var mensajeMinimo;
    var mensajeNegativos;
    var mensajeMaximo;
    var mensajePares;
    var mensajeImpares;
    var mensajeCeros;
    var mensajePositivos;

    sumaNegativos= 0;
    sumaPositivos= 0;
    cantidadCeros= 0;
    cantidadImpares= 0;
    cantidadPares= 0;
    contadorPositivos= 0;
    respuesta = true;
    flagPrimero= true;

    while(respuesta==true)
    {
        do
        {
            letraIngresada=prompt("Ingrese una letra, de la A-Z: ");
            letraIngresada= letraIngresada.toLocaleLowerCase();
        }while( isNaN(letraIngresada) == false );
        do
        {
            numeroIngresado=prompt("Ingrese un número, de -100 a 100: ");
            numeroIngresado= parseInt(numeroIngresado);
        }while(numeroIngresado<-100 || numeroIngresado>100 || isNaN(numeroIngresado));
        
        if(numeroIngresado<numeroMinimo || flagPrimero==true)
        {
            numeroMinimo= numeroIngresado;
            mensajeMinimo = "El número mininmo es: "+letraIngresada+", "+numeroIngresado;
        }
        if(numeroIngresado > numeroMaximo || flagPrimero==true)
        {
            numeroMaximo= numeroIngresado;
            mensajeMaximo= "El número maximo es: "+letraIngresada+", "+numeroMaximo;
            flagPrimero=false;
        }
        if(numeroIngresado < 0)
        {
            sumaNegativos = numeroIngresado + sumaNegativos;
            mensajeNegativos = "La suma de números negativos es: "+sumaNegativos
        }
        else
        {
            if(numeroIngresado > 0)
            {
                sumaPositivos= numeroIngresado+sumaPositivos;
                contadorPositivos= contadorPositivos +1;
            }
        }   

        if(numeroIngresado % 2==0)
        {
            cantidadPares= cantidadPares+1;
            mensajePares= "La cantidad de números pares es: "+cantidadPares;
        }
        else
        {
            cantidadImpares= cantidadImpares +1;
            mensajeImpares= "La cantidad de números impares es: "+cantidadImpares; 
        }
        switch(numeroIngresado)
        {
            case 0:
                cantidadCeros= cantidadCeros +1;
                mensajeCeros= "La cantidad de ceros es: "+cantidadCeros;
            break;
        }
        respuesta= confirm("Desea ingresar otro número");
    }

    promedioPositivos= sumaPositivos / contadorPositivos;
    mensajePositivos="El promedio de los números positivos es: "+ promedioPositivos; 
    
    document.write("<br>"+mensajePares);
    document.write("<br>"+mensajeImpares);
    document.write("<br>"+mensajeCeros);
    document.write("<br>"+mensajePositivos);
    document.write("<br>"+mensajeNegativos);
    document.write("<br>"+mensajeMinimo);
    document.write("<br>"+mensajeMaximo);
}
