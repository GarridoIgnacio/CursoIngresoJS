/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//alert("ok");
    
	let nombre;
    let edad;
	
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	
	//alert("Uested se llama " + nombre + " y tiene " + edad + " años");  
	
	alert(`USted se llama ${nombre} y tiene ${edad} años`);

    /*son dos varintas para el mismo resiltado para para lograr el `` totar 
	   La tecla " AltGr " y la tecla de corchetes */




}

