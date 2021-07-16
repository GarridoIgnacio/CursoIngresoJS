/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var Nota;
	
	Nota = Math.floor(Math.random() * 11);

	alert("Su nota es " + Nota);

	if(Nota > 8 && Nota < 11)
	{
		alert("EXELENTE");

	}
	else
	{
		if(Nota > 3 && Nota < 9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede!!");
		}
		

	}



}//FIN DE LA FUNCIÓN