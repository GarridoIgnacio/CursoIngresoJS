/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("ok");*/

    var nombre;
	
	nombre = document.getElementById("txtIdNombre").value;          //estaandar de js
	
	//nombre = txtIdNombre.value;                   //funciona en algunos navegadores  ambas dan el mismo resultado

	alert(nombre);

	document.getElementById("txtIdNombre").value = "";
    
    

}


