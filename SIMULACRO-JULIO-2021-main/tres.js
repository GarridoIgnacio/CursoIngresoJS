/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)

Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para
obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor
a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No
Binario
*/

/*function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperatura;
	var mayrorTemperatura;
	var flagTemperaturaMayor;
	var nombreMayorTemp;
	var vacunaMayotTemp;
	var respuesta;
	var contadorMujeresSputnik
	var contadorNoBinario;
	var contadorAstrazecaMayortemp;
	var contadorHombresSputnik;
	var acumuladorHombresSputnik;
	var promedioHombresSputnik;
	var contadorAstrazecaGeneral;
	var porcentajeAstra;
	var contadorSputnikGeneral;
	var contadprOtrasGeneral;
	var	mayorVacunaAplicada;
	var	mensajeMayorvacuna;
	var mensajeMujeres;
	var mensajeNoBiniario;
	var mensajeAstraMayorTemp;
	var mensajeSputnikHombres;
	var mensajeProcentajeAztra;
	var sumaedadSputnik;
	var sumaedadAstrazenca;
	var sumaedadOtras;
	var promedioEdadAstrazeneca;
	var promedioEdadSputnik;
	var promedioEdadOtras;
	var mensajeEdadespromedio;
	var porcentajeFemenino;
	var porcentajeMasculino;
	var porcentajeNoBinario;
	var cantidadF;
	var cantidadM;
	var cantidadNB;
	var mensajeProcentajeGeneros;
	
	contadorSputnikGeneral=0;
	contadprOtrasGeneral=0;
	contadorAstrazecaGeneral=0;
	contadorHombresSputnik=0;
	acumuladorHombresSputnik=0;
	contadorAstrazecaMayortemp=0;
	contadorNoBinario=0;
	contadorMujeresSputnik=0;
	contadorTotal=0;
	respuesta=true;
	flagTemperaturaMayor= true;
	sumaedadSputnik=0;
	sumaedadAstrazenca=0;
	sumaedadOtras=0;
	cantidadF=0;
	cantidadM=0;
	cantidadNB=0;

	while(respuesta==true)
	{
		do
		{
			nombre=prompt("Ingrese su nomnbre:");
		}while(isNaN(nombre)==false);
		do
		{
			edad=prompt("ingrese su edad:");
			edad= parseInt(edad);
		}while(edad<0 || edad>110 || isNaN(edad)==true);
		do
		{
			genero=prompt("Ingrese su genero");
			genero= genero.toUpperCase();
		}while(genero!="F" && genero!="M" && genero!="NB");
		do
		{
			vacuna= prompt("Que vacuna se aplico? (SputnikV, AstraZeneca, Otra)");
			vacuna= vacuna.toLowerCase();
		}while(vacuna!="sputnikv" && vacuna!="astrazeneca" && vacuna!="otra");
		do
		{
			temperatura= prompt("Indique su temperatura corporal durante la primera noche:");
			temperatura= parseInt(temperatura);
		}while(temperatura<30 || temperatura>50 || isNaN(temperatura)==true);
		console.log("UltimaTemp: "+temperatura);

		if(temperatura>mayrorTemperatura || flagTemperaturaMayor==true)
		{
			mayrorTemperatura= temperatura;
			nombreMayorTemp= nombre;
			vacunaMayotTemp= vacuna;
			mensajeMayorTemp= "La persona con mayor temperatura es: "+nombre+" con: "+temperatura+" la vacuna es: "+vacuna;
			flagTemperaturaMayor=false;
		}
		console.log("TempMayor: "+nombreMayorTemp+"  "+vacunaMayotTemp+"  "+"  "+mayrorTemperatura)
		
		if(genero=="F")
		{
			cantidadF++;
		}
		else
		{
			if(genero=="M")
			{
				cantidadM++;
			}
			else
			{
				cantidadNB++;
			}
		}
		
		switch(vacuna)
		{
			case "sputnikv":
				contadorSputnikGeneral++;
				sumaedadSputnik= edad +sumaedadSputnik;
				if(genero=="F")
				{
					contadorMujeresSputnik++;
				}
				else
				{
					if(genero=="M" && temperatura<37)
					{
						contadorHombresSputnik++
						acumuladorHombresSputnik= edad +acumuladorHombresSputnik;
					}
				}
			break;
			case "astrazeneca":
				contadorAstrazecaGeneral++;
				sumaedadAstrazenca= edad +sumaedadAstrazenca;
				if(vacuna=="astrazeneca" && temperatura>38)
				{
					contadorAstrazecaMayortemp++;
				}
			case "otra":
				contadprOtrasGeneral++;
				sumaedadOtras= edad +sumaedadOtras;
				if(genero=="NB")
				{
					contadorNoBinario++;
				}
			break;
		}
		

		contadorTotal++;
		respuesta=confirm("desea continuar?");
		console.log("personas Ingresedas: "+contadorTotal);
	}
	
	promedioHombresSputnik= acumuladorHombresSputnik /contadorHombresSputnik;
	porcentajeAstra= contadorAstrazecaGeneral / contadorTotal;
	porcentajeAstra= porcentajeAstra *100;
	
	promedioEdadSputnik= sumaedadSputnik / contadorSputnikGeneral;
	
	promedioEdadAstrazeneca= sumaedadAstrazenca / contadorAstrazecaGeneral;
	promedioEdadOtras= sumaedadOtras / contadprOtrasGeneral;
	
	porcentajeFemenino = cantidadF / contadorTotal;
	porcentajeFemenino = porcentajeFemenino *100;
	porcentajeMasculino = cantidadM / contadorTotal;
	porcentajeMasculino= porcentajeMasculino *100;
	porcentajeNoBinario= cantidadNB / contadorTotal;
	porcentajeNoBinario= porcentajeNoBinario * 100;

	if(contadorSputnikGeneral >= contadorAstrazecaGeneral && contadorSputnikGeneral >= contadprOtrasGeneral)
	{
		mayorVacunaAplicada = contadorSputnikGeneral;
		mensajeMayorvacuna = "Mayor vacuna aplicada: SputnikV con: "+mayorVacunaAplicada+" vacunas unidades"; 
	}
	else
	{
		if(contadorAstrazecaGeneral > contadprOtrasGeneral)
		{
			mayorVacunaAplicada = contadorAstrazecaGeneral;
			mensajeMayorvacuna = "Mayor vacuna aplicada: AstraZeneca con: "+mayorVacunaAplicada+" vacunas unidades"; 
		}
		else
		{
			mayorVacunaAplicada= contadprOtrasGeneral;
			mensajeMayorvacuna = "Mayor vacuna aplicada: Otras con: "+mayorVacunaAplicada+" vacunas unidades"; 
		}
	}

	mensajeMujeres = "La cantidad de mujeres vacunadas con SputnikV es: "+contadorMujeresSputnik;
	mensajeNoBiniario = "La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra es: "+contadorNoBinario;
	mensajeAstraMayorTemp = "La cantidad de personas con AstraZeneca y temperatura mayor a 38 es: "+contadorAstrazecaMayortemp;
	if(isNaN(promedioHombresSputnik)==false)
	{
		mensajeSputnikHombres = "El promedio de edad de los hombres con SputnikV y sin fiebre es: "+promedioHombresSputnik;
	}
	else
	{
		mensajeSputnikHombres= "El promedio de edad de los hombres con SputnikV y sin fiebre es:  Dato No Ingresado";
	}
	mensajeProcentajeAztra ="Porcentaje de personas que se aplicaron Aztrazeneca : "+porcentajeAstra;
	if(isNaN(promedioEdadSputnik)==false && isNaN(promedioEdadAstrazeneca)==false && isNaN(promedioEdadOtras)==false)
	{	
		mensajeEdadespromedio= "El prodeio de edad de SputnikV: "+promedioEdadSputnik+" El promedio edad AstraZeneca: "+promedioEdadAstrazeneca+" El promedio edad Otras: "+promedioEdadOtras; 
	}
	else
	{
		if(isNaN(promedioEdadSputnik)==true)
		{
			mensajeEdadespromedio= "El prodeio de edad de SputnikV: DATO NO INHRESADO. El promedio edad AstraZeneca: "+promedioEdadAstrazeneca+" El promedio edad Otras: "+promedioEdadOtras;
		}
		else
		{

		}
	}
	mensajeProcentajeGeneros= "Los porcentajes de genero: "+porcentajeFemenino+"% Muejres "+porcentajeMasculino+"% Hombres "+porcentajeNoBinario+"% No Binario";

	document.write("<br>"+mensajeMayorTemp);
	document.write("<br>"+mensajeMujeres);
	document.write("<br>"+mensajeNoBiniario);
	document.write("<br>"+mensajeAstraMayorTemp);
	document.write("<br>"+mensajeSputnikHombres);
	document.write("<br>"+mensajeProcentajeAztra);
	document.write("<br>"+mensajeEdadespromedio);
	document.write("<br>"+mensajeProcentajeGeneros);
	document.write("<br>"+mensajeMayorvacuna);
}*/

/* EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el ingreso con la mayor cantidad de cajas.
b) de las galletitas dulces, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada tipo
[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]
 */

function mostrar()
{

	var marcaGalletas;
	var tipoGalletas;
	var cantidadDeCajas;
	var cantidadKilosPorCaja;
	var nombreProveedor;
	var origenGelletas;
	var flagMayorCantidadCajas;
	var tipoMayorCantidadCajas;
	var flagMenorKilosporDulce;
	var acmuladorDeCajastotal;
	var acmuladorDulce;
	var acmuladorConSal;
	var acmuladorSinSal;
	var i;
	var cantidadDeCajasMayor;
	var mensajeMeyorCnatiadCajas;
	var cantidadMenordeKgDulce;
	var mensajeMenosKgDulce;
	var porcentajaDulce;
	var porcentajaConSal;
	var porcentajaSinSal;

	flagMayorCantidadCajas=true;
	flagMenorKilosporDulce=true;
	acmuladorDeCajastotal=0;
	acmuladorDulce=0;
	acmuladorConSal=0;
	acmuladorSinSal=0;

	for(i=0;i<10;i++)
	{
		do{
			marcaGalletas=prompt("Ingrese la amrca del producto:");
		}while(marcaGalletas.length<3 || marcaGalletas.length>10 || isNaN(marcaGalletas)==false);
		do{
			tipoGalletas=prompt("Ingrese el tipo de galletitas (Dulces, Con Sal o Sin Sal)");
			tipoGalletas=tipoGalletas.toLowerCase();
		}while(tipoGalletas!="dulces" && tipoGalletas!="con sal" && tipoGalletas!="sin sal");
		do{
			cantidadDeCajas=prompt("Ingrese la cantidad de cajas:");
			cantidadDeCajas=parseInt(cantidadDeCajas);
		}while(cantidadDeCajas<0 || isNaN(cantidadDeCajas)==true);
		do{
			cantidadKilosPorCaja=prompt("Igrese el peso en kg de una caja:")
			cantidadKilosPorCaja=parseFloat(cantidadKilosPorCaja);
		}while(cantidadKilosPorCaja<0 || isNaN(cantidadKilosPorCaja)==true);
		do{
			nombreProveedor=prompt("Ingrese el nombre del proveerdor:");
		}while(nombreProveedor.length<3 || nombreProveedor>11 || isNaN(nombreProveedor)==false);
		do{
			origenGelletas=prompt("ingrese el origen (Nacional, Mercosur, Resto del mundo) : ");
			origenGelletas=origenGelletas.toLowerCase();
		}while(origenGelletas!="nacional"&&origenGelletas!="mercosur"&&origenGelletas!="resto del mundo");

		if(cantidadDeCajas>cantidadDeCajasMayor || flagMayorCantidadCajas==true)
		{
			cantidadDeCajasMayor= cantidadDeCajas;
			tipoMayorCantidadCajas=tipoGalletas;
			mensajeMeyorCnatiadCajas="El ingreso con mayor cantiada de cajas fue: "+cantidadDeCajasMayor+" El tipo de galletas: "+tipoGalletas;
			flagMayorCantidadCajas=false;
		}
		switch(tipoGalletas)
		{
			case "dulces":
				acmuladorDulce= cantidadDeCajas+acmuladorDulce;

				if(cantidadKilosPorCaja<cantidadMenordeKgDulce || flagMenorKilosporDulce==true)
				{
					cantidadMenordeKgDulce= cantidadKilosPorCaja;
					mensajeMenosKgDulce= "La que menos kg tiende de las cajas Dulces es: "+cantidadMenordeKgDulce;	
				}
			break;
			case "con sal":
				acmuladorConSal= cantidadDeCajas + acmuladorConSal;
				break;
			default:
				acmuladorSinSal= cantidadDeCajas + acmuladorSinSal;
				break;
		}
		
		acmuladorDeCajastotal= cantidadDeCajas + acmuladorDeCajastotal;
	}

	porcentajaDulce= acmuladorDulce / acmuladorDeCajastotal *100;
	porcentajaSinSal= acmuladorSinSal / acmuladorDeCajastotal *100;
	porcentajaConSal= acmuladorConSal / acmuladorDeCajastotal *100;

	document.write(mensajeMeyorCnatiadCajas+"<br>"+mensajeMenosKgDulce+"<br>"+"Los porcentajes son: Dulce: "+porcentajaDulce+" Con Sal: "+porcentajaConSal+" Sin Sal: "+porcentajaSinSal);
	

	
}