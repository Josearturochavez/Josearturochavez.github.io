document.addEventListener('DOMContentLoaded', function () {

	const Titulo_tarea = document.getElementById('title');
	const Descripcion_tarea = document.getElementById('description');
	const boton_add = document.getElementById('add');
	const Tabla = document.getElementById('table');
	const alert = document.getElementById('alert');
	let id = 0
	boton_add.onclick = add_todo;

	function rmbtodo (id) {
		document.getElementById(id).remove()
	}
	

	function add_todo () {
		
		console.log('title: ', Titulo_tarea.value);
		console.log('description: ', Descripcion_tarea.value);
		
		if (Titulo_tarea.value === '' ||  Descripcion_tarea.value === '') {
			console.error('faltan parametros en titulo y descripcion')
			alert.classList.remove('d-none')
			alert.innerText = 'faltan parametros en titulo y descripcion'
			return;
		}


		const columna = Tabla.insertRow();
		columna.setAttribute ("id", id++)
		columna.innerHTML = `
		<td>
			${Titulo_tarea.value}
		</td>
		<td>
			${Descripcion_tarea.value}
		</td>
		<td class="text-center">
                <input type="checkbox">
        </td>
		<td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
		`
		const rmbButton = document.createElement("button")
		rmbButton.classList.add("btn" , "btn-danger" , "mb-1" , "ml-1")
		const icono = document.createElement("i")
		icono.classList.add("fa" , "fa-trash")
		rmbButton.appendChild(icono)
		columna.children[3].appendChild(rmbButton)

		rmbButton.onclick = function (x){
			rmbtodo(columna.getAttribute("id"))
		}

		Titulo_tarea.value = ""
		Descripcion_tarea.value = ""
		alert.classList.add('d-none')
		alert.innerText = ''	
		
	};
});