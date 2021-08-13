/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Enunciado:
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/

function mostrar()
{
   var horaIngresada;
   var mensaje;
   
   horaIngresada = document.getElementById("laHora").value;
   horaIngresada = parseInt(horaIngresada);

    switch(horaIngresada)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje="Es de mañana";
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje="Es de tarde";
        break;
        case 20:
        case 21:
        case 22:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje="Es de noche";
            
            if(horaIngresada>19 && horaIngresada<24 )
            {
                mensaje="A dormir...";
            }
        break;
        break;
        default:
            mensaje="No es una hora valida";
    }
    alert(mensaje);

}
//console.warn()

// isNaN 