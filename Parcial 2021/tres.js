// Ignacio
// Garrido
/* Enunciado:
Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos, junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
-Código del vendedor (v1 -v2 -v3)
-Producto elegido: Crema, Perfume, Maquillaje
-Total de la venta
No hay un límite total de ventas.
Una vez finalizada la carga de productos se debe calcular la comisión del vendedor.
-Si el vendedor superó la cantidad de ventas de $5000 le corresponde una comisión del %20. Sino del %10.
Se debe mostrar:
*El producto más comprado.
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas. (Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas). */

function mostrar()
{
	var codigoDelVendedor;
	var productoElegido;
	var totalDeVenta;
	var comisionBaja;
	var comisionAlta;
	var respuesta;

	respuesta=true;

	while(respuesta==true)
	{
		do{
			codigoDelVendedor=prompt("Ingrese el codigo de vendedor: v1 -v2 -v3");
			codigoDelVendedor=codigoDelVendedor.toLocaleLowerCase();
		}while(codigoDelVendedor)

		respuesta=confirm("Desea agregar otra compra?");
	}
	




}
