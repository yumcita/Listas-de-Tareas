var agregar = document.getElementById('agregar');

var tareas = new Array;

agregar.addEventListener("click", Agregar, false);



function Agregar(){

	var descripcion = document.getElementById("descripcion").value;

	tareas.push(descripcion);

	localStorage.setItem("descripcion", JSON.stringify(tareas));

	mostrar();

}

function mostrar(){

	var mostrar = document.getElementById('mostrar');

	var tareas_str = localStorage.getItem("descripcion");

	var tareas = JSON.parse(tareas_str);

	for(i = 0; i<tareas.length; i++){


		var p = document.createElement('p');

		var cont = document.createTextNode(tareas[i]);

		p.setAttribute('class', 'mt-4 mb-4');

		p.appendChild(cont);

		var button = document.createElement('button');

		cont = document.createTextNode('Eliminar');

		button.setAttribute('value', tareas[i]);

		button.setAttribute('class', 'btn btn-danger');

		button.appendChild(cont);

	}

button.addEventListener("click", elimina, false);

function elimina(){

	tarea_eliminar = tareas.indexOf(button.value);

	var n_tarea = tareas.splice(tarea_eliminar, 1);

	localStorage.setItem("descripcion", JSON.stringify(n_tarea));

}

	mostrar.appendChild(p);

	mostrar.appendChild(button);

}
