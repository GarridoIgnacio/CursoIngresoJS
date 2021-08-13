/*Nombro: Ignacio
Apellido: Garrido
Divivición: G
e-mail: nacho.gdo@gmail.com */

/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var respuesta;
	var tipoProducto;
	var precioIngresado;
	var cantidadUnidades;
	var marcaProducto;
	var fabricanteProducto;
	var flagJabonMasCaro;
	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var promedioPorcompra;
	var i;
	var mensajeMayorCantidad;
	var precioPorCantidad;

	respuesta=true;
	flagJabonMasCaro=true;
	cantidadJabonMasCaro=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;

	for(i=0;i<5;i++)
	{
		do
		{
			tipoProducto=prompt("Ingrese el producto (Barbijo , Jabon o Alcohol)");
			tipoProducto=tipoProducto.toLowerCase();
		}while(tipoProducto!="barbijo" && tipoProducto!="jabon" && tipoProducto!="alcohol");
		do
		{
			precioIngresado=prompt("Ingrese un valor entre 100 y 300");
			precioIngresado=parseFloat(precioIngresado);
		}while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300);
		do
		{
			cantidadUnidades=prompt("Cuantas unidades desea?");
			cantidadUnidades=parseInt(cantidadUnidades);
		}while(isNaN(precioIngresado)==true || cantidadUnidades<1 || cantidadUnidades>1000);
		do
		{
			marcaProducto= prompt("Cual marca desea comprar?");
		}while(isNaN(marcaProducto)==false);
		do
		{
			fabricanteProducto=prompt("Ingrese el fabrincate del producto:");
		}while(isNaN(fabricanteProducto)==false);

		precioPorCantidad= precioIngresado * cantidadUnidades;
		
		switch (tipoProducto)
		{
			case "jabon":	
				contadorJabon++;
				acumuladorJabon= cantidadUnidades + acumuladorJabon;
				if(precioIngresado>precioJabonMasCaro ||flagJabonMasCaro==true)
				{
					precioJabonMasCaro=precioIngresado;
					fabricanteJabonMasCaro=fabricanteProducto;
					cantidadJabonMasCaro= cantidadUnidades + cantidadJabonMasCaro;
					flagJabonMasCaro=false;
				}
			break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo= cantidadUnidades + acumuladorBarbijo;	
			break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol= cantidadUnidades + acumuladorAlcohol;
			break;

		}


		respuesta=confirm("Desea continuar?");
	}

	if(acumuladorJabon>=acumuladorBarbijo && acumuladorJabon>= acumuladorAlcohol)
	{
		mensajeMayorCantidad= "El producto con mayor cantidad es: Jabón con: "+acumuladorJabon+" unidades";
		promedioPorcompra= acumuladorJabon / contadorJabon;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorAlcohol)
		{
			mensajeMayorCantidad= "El producto con mayor cantidad es: Barbijo con: "+acumuladorBarbijo+" unidades";
			promedioPorcompra= acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			mensajeMayorCantidad= "El producto con mayor cantidad es: Alcohol con: "+acumuladorAlcohol+" unidades";
			promedioPorcompra= acumuladorAlcohol / contadorAlcohol;
		}
	}

	document.write("El mas caro de los jabones: "+precioJabonMasCaro+" del fabricante: "+fabricanteJabonMasCaro+" con la cantidad :"+cantidadJabonMasCaro+"unidades."
	+"<br>"+mensajeMayorCantidad+" y su promedio es: "+promedioPorcompra+"<br>"+"Se compraron "+acumuladorBarbijo+" unidades de Barbijos."
	+"<br>"+"El precio a pagar total es: " +precioPorCantidad);




}



/* 	var cantidadProductos;
	var precioProductos;
	var flagJabon;
	var sumaPreciosProductos;
	var productos;
	var marcaProducto;
	var fabricanteProducto;
	var maximoJabones;
	var fabricanteJabon;
	var cantidadJabon;
	var mensajeJabon;
	var mensajePrecioTotal;
	var sumaBarbijos;
	var sumaAlcohol;
	var sumaJabon;
	var contadorJabon;
	var contadorBarbijo;
	var contadorAlcohol;
	var promedioMaximo;
	var mensajeCantidadMaxima;
	var mensajeCantidadBarbijo;
	var i;

	flagJabon=true;
	flagMaximoProductos=true;
	sumaPreciosProductos=0;
	sumaJabon=0;
	cantidadBarbijo= 0;
	sumaAlcohol= 0;
	sumaBarbijos=0;
	contadorJabon=0;
	contadorBarbijo=0;
	contadorAlcohol=0;

	for(i=0;i<5;i++)
	{
		do{
			productos=prompt("Imgrese un producto:");
			productos=productos.toLocaleLowerCase();
		}while(productos!="jabón" && productos!="barbijo" && productos!="alcohol");
		
		do{
			precioProductos=prompt("Ingrese precio del producto");
			precioProductos=parseInt(precioProductos);
		}while(precioProductos<100 || precioProductos>300 && isNaN(precioProductos)==true);
		
		do{
			marcaProducto=prompt("Ingrese marca del producto");
		}while(isNaN(marcaProducto)==false);
		
		do{
			cantidadProductos=prompt("Ingrese la cantidad que desea de este producto:");
			cantidadProductos=parseInt(cantidadProductos);
		}while(cantidadProductos<1 || cantidadProductos>1000 || isNaN(cantidadProductos)==true);
		
		do{
			fabricanteProducto=prompt("Ingrese fabricante del producto");
		}while(isNaN(fabricanteProducto)==false);

		switch(productos)
		{
			case "jabón":
				contadorJabon++;
				sumaJabon= cantidadProductos + sumaJabon;	
				if(precioProductos>maximoJabones || flagJabon==true) //A
				{
					maximoJabones=precioProductos;
					fabricanteJabon=fabricanteProducto;
					cantidadJabon=cantidadProductos;
					mensajeJabon= "El mas caro de los jabones: "+maximoJabones+" fabricante: "+fabricanteJabon+" Cantidad de unidades: "+cantidadJabon;
					flagJabon=false;
				}
			break;
			case "barbijo":
				contadorBarbijo++;
				sumaBarbijos= cantidadProductos + sumaBarbijos; //C
			break;
			case "alcohol":
				contadorAlcohol++;
				sumaAlcohol= cantidadProductos + sumaAlcohol;
				console.log("Cont Bar: "+contadorBarbijo);
			break;	
		}
		console.log(productos+" "+" "+precioProductos+" "+cantidadProductos+" "+fabricanteProducto);
		console.log("Maximo jabon: "+mensajeJabon);

		sumaPreciosProductos=(precioProductos*cantidadProductos)+sumaPreciosProductos;
		mensajePrecioTotal= "El total es: "+sumaPreciosProductos;

	}
	if(sumaJabon>sumaBarbijos && sumaJabon>sumaAlcohol) //B
	{
		tipoProductoMaximo="Jabón";
		TotalCantidadProducto= sumaJabon;
		promedioMaximo= sumaJabon / contadorJabon;
	}
	else
	{
		if(sumaBarbijos>sumaJabon && sumaBarbijos>sumaAlcohol)
		{
			tipoProductoMaximo="Barbijo";
			TotalCantidadProducto= sumaBarbijos;
			promedioMaximo= sumaBarbijos / contadorBarbijo;
		}
		else
		{
			tipoProductoMaximo="Alcohol";
			TotalCantidadProducto= sumaAlcohol;
			promedioMaximo= sumaAlcohol / contadorAlcohol;
		}
	}
	mensajeCantidadMaxima = "Producto con mas unidades: "+tipoProductoMaximo+" Cantidad de unidades: "+TotalCantidadProducto+" Supromedio: "+promedioMaximo;
	mensajeCantidadBarbijo = "Se compraron "+sumaBarbijos+" en total.";

	document.write("<br>"+mensajePrecioTotal);
	document.write("<br>"+mensajeJabon);
	document.write("<br>"+mensajeCantidadMaxima);
	document.write("<br>"+mensajeCantidadBarbijo); */