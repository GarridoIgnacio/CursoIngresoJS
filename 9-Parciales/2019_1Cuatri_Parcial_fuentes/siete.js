/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250),
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
Curso de ingreso UTN FRA
*/

function mostrar()
{
    var alturaJugadores;
    var sexoJugadores;
    var sumaAlturas;
    var contador;
    var alturaMinima;
    var banderaDelprimero;
    var sexoAlturaMinima;
    var cantidadMujeres;
    var promedioAlturas;
    var mensajeSexo;
    
    sumaAlturas=0;
    contador=0;
    banderaDelprimero=0;
    cantidadMujeres=0;

    while(contador<5)
    {
        do
        {
            numeroJugador = contador +1;
            alturaJugadores= prompt("Ingrese la altura del jugador "+numeroJugador+" en cm:");
            alturaJugadores= parseFloat(alturaJugadores);
            sumaAlturas= alturaJugadores + sumaAlturas;
            console.log("SumaH: "+sumaAlturas);
        }while(alturaJugadores<0 || alturaJugadores>251);
        
        do
        {
            sexoJugadores= prompt("Ingrese el sexo del jugador (F o M):");
            sexoJugadores= sexoJugadores.toLowerCase();
            console.log("Sexo: "+sexoJugadores);
            if(sexoJugadores=="f")
            {
                mensajeSexo= "Femenino";
            }
            else
            {
                mensajeSexo= "Masculino";
            }
        }while(sexoJugadores!="f" && sexoJugadores!="m");
        
        if(alturaJugadores < alturaMinima || banderaDelprimero==0)
        {
            alturaMinima=alturaJugadores;
            sexoAlturaMinima= mensajeSexo;
            banderaDelprimero=1;
        }
        console.log("Hminima: "+alturaMinima);
        console.log("HminS: "+sexoAlturaMinima);
        if(sexoJugadores=="f" && alturaJugadores>189)
        {
            cantidadMujeres++
        }
        console.log("CantM190: "+cantidadMujeres);


        contador++
        console.log("Contador: "+contador);
    }
    promedioAlturas= sumaAlturas / 5;
    document.write("  La suma de las alturas es: "+sumaAlturas+" cm");
    document.write("  El promedio de los cinco jugadores/as es: "+promedioAlturas+" cm");
    document.write("  La altura minima es: "+alturaMinima+" cm");
    document.write("  El sexo de la altura minima es: "+sexoAlturaMinima);
    document.write("   La cantidad de mujeres mayores a 190cm es: "+cantidadMujeres);

}
    
