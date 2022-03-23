document.addEventListener('DOMContentLoaded', function () {

	const Titulo_tarea = document.getElementById('title');
	const Descripcion_tarea = document.getElementById('description');
	const boton_add = document.getElementById('add');
	const Tabla = document.getElementById('table');
	const alert = document.getElementById('alert');

	boton_add.onclick = add_todo;

	function add_todo () {
		
		console.log('title: ', Titulo_tarea.value);
		console.log('description: ', Descripcion_tarea.value);
		
		if (Titulo_tarea.value === '' ||  Descripcion_tarea.value === '') {
			console.error('faltan parametros en titulo y descripcion')
			alert.classList.remove('d-none')
			alert.innerText = 'faltan parametros en titulo y descripcion'
		}else{
			Titulo_tarea.value = ""
			Descripcion_tarea.value = ""
			alert.classList.add('d-none')
			alert.innerText = ''
		}
	};
});