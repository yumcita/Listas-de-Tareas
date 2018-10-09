

var guardar = document.getElementById("guardar");

var tareas = new Array;

var cont = 0;

guardar.addEventListener("click", function(){

    var info = document.getElementById("info").value;

	   tareas.push(info);

	    localStorage.setItem("info", JSON.stringify(tareas));

      var ver = document.getElementById('ver');

      var tareasParse = JSON.parse(localStorage.getItem("info"));

      for(i = 0; i<tareasParse.length; i++){


        var parrafo = document.createElement('p');

        parrafo.setAttribute('class', 'mt-3');

        var mensaje = document.createTextNode(tareasParse[i]);

        parrafo.appendChild(mensaje);

        var eliminar = document.createElement('button');

        var mensaje = document.createTextNode('Eliminar');

        eliminar.setAttribute('value', tareasParse[i]);

        eliminar.setAttribute('class', 'btn btn-danger mt-3');

        eliminar.appendChild(mensaje);

        eliminar.addEventListener("click", function(){

          eliminar_tarea = tareas.indexOf(eliminar.value);

          var tarea_nueva = tareas.splice(eliminar_tarea, 1);

          localStorage.setItem("info", JSON.stringify(tarea_nueva));

          parrafo.parentNode.removeChild(parrafo);

          eliminar.parentNode.removeChild(eliminar);


        });


  }

      ver.appendChild(parrafo);

      ver.appendChild(eliminar);


  });
