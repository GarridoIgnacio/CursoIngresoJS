/* Nombre: Ignacio
 Apellido: Garrido
   E-mail: nacho.gdo@gmail.com

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var Fahrenheit;
    var Celsius;

   // Fahrenheit = document.getElementById("txtIdTemperatura").value;
   Fahrenheit = txtIdTemperatura.value;
   Fahrenheit = parseInt(Fahrenheit);

    Celsius =  (Fahrenheit - 32)* 5/9;

    mensaje = (Fahrenheit + " Fahrenheit son: " + Celsius + " Centígrados")

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    var Fahrenheit;
    var Celsius;  
	
    //Celsius =  document.getElementById("txtIdTemperatura").value; 
    Celsius = txtIdTemperatura.value;
    Celsius = parseInt(Celsius);

    Fahrenheit = (Celsius * 9/5) + 32;

    mensaje = (Celsius +" Centígrados son: " + Fahrenheit + " Fahrenheit");

    alert(mensaje);
}
