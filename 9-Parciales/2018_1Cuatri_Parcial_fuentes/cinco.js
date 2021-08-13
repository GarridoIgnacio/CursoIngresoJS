/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Mostrar información
Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
    var planetaIngresado;
    var mensaje;

    planetaIngresado = prompt("Ingrese un planeta del sistema solar");

    switch(planetaIngresado)
    {
        case "mercurio":
        case "venus":
        case "marte":
            mensaje = "Aca hace calor";    
        break;
        case "tierra":
            mensaje = "Aca vivimos";
        break;
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Aca hace frío";
        break;
        default:
           mensaje= "El dato ingresado no es valido";
        break; 
    }
    alert(mensaje);



}
