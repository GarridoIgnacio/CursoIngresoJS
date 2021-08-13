// Ignacio
// Garrido
// div G
/* Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos. Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:
a) El más barato de Terror con su importe.
b) Del libro más caro el título.
c) El importe promedio del total
d) La cantidad de libros que sean de terror y cuesten menos de $700. */
function mostrar()
{
	var tituloIngresado;
	var generoIngresado;
	var importeIngresado;
	var flagTerrorMasBarato;
	var importeMasBaratoTerror;
	var tituloMasbaratoTerror;
	var flagLibroMasCaro;
	var importeLibroMascaro;
	var tituLibroMascaro;
	var acumuladorImporteTotal;
	var contadorLibrosTotal;
	var contadorLibrosTerror;
	var respuesta;
	var mensajeLibroMasCaro;
	var promedioTotal;
	var mensajeTerrorMasBarato;

	respuesta=true;
	flagLibroMasCaro=true;
	flagTerrorMasBarato=true;
	acumuladorImporteTotal=0;
	contadorLibrosTotal=0;
	contadorLibrosTerror=0;	

	while(respuesta==true)
	{
		do{
			tituloIngresado=prompt("Ingrese el titutlo del libro");
		}while(isNaN(tituloMasbaratoTerror)==false);
		do{
			generoIngresado=prompt("Ingrese el genero: ciencia ficcion, Drama o Terror");
			generoIngresado=generoIngresado.toLowerCase();
		}while(generoIngresado!="ciencia ficcion" && generoIngresado!="drama"&& generoIngresado!="terror");
		do{
			importeIngresado=prompt("Ingrese el importe del mismo:");
			importeIngresado= parseFloat(importeIngresado);
		}while(importeIngresado<1 || importeIngresado>30000);

		contadorLibrosTotal++;
		acumuladorImporteTotal= importeIngresado + acumuladorImporteTotal;
		
		if(importeIngresado>importeLibroMascaro || flagLibroMasCaro==true)
		{
			importeLibroMascaro=importeIngresado;
			tituLibroMascaro=tituloIngresado;
			mensajeLibroMasCaro="El libro mas caro es: "+tituLibroMascaro+" con el monto: "+importeLibroMascaro+"$";
			flagLibroMasCaro=false;
		}
		
		switch(generoIngresado)
		{
			case "terror":
				if(importeIngresado<importeMasBaratoTerror || flagTerrorMasBarato==true)
				{
					importeMasBaratoTerror= importeIngresado;
					tituloMasbaratoTerror= tituloIngresado;
					mensajeTerrorMasBarato= "El libro de terror mas Barato es: "+tituloMasbaratoTerror+" y su importe es: "+importeMasBaratoTerror;
					flagTerrorMasBarato=false;
				}
				if(importeIngresado<700)
				{
					contadorLibrosTerror++;
				}
			break;
		}
		respuesta=confirm("Desea ingresar otro libro?");
	}
	promedioTotal= acumuladorImporteTotal / contadorLibrosTotal;

	document.write(mensajeLibroMasCaro+"<br>"+mensajeTerrorMasBarato+"<br>"+"El importe promedio total: "+promedioTotal+"<br>"+"La contidad de libros de terror es: "+contadorLibrosTerror);

}
