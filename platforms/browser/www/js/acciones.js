
var agregar = document.getElementById('agregar');

var eliminar = document.getElementById('eliminar');

var tareas = new Array;

agregar.addEventListener("click", Agregar, false);

eliminar.addEventListener("click", Eliminar, false);

function Agregar(){

	var descripcion = document.getElementById("descripcion").value;

	tareas.push(descripcion);

	localStorage.setItem("descripcion", JSON.stringify(tareas));

	var mostrar = document.getElementById('mostrar');

 	mostrar.innerHTML = localStorage.getItem("descripcion");	

}

function Eliminar(){


	
}
 