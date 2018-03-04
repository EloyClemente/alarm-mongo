

function printData(data, method)
{
	for(i in data)
	{
		insertData(data[i]._id, data[i].horas, data[i].minutos)
	}
}





function insertData(id, horas, minutos)
{
	// Crear capas
	//.............................................
	let capa_alarma     = document.createElement('div')
	let capa_numeros    = document.createElement('div')
	let parrafo_horas   = document.createElement('p')
	let parrafo_minutos = document.createElement('p')
	let dos_puntos      = document.createElement('p')
	let close_cross     = document.createElement('div')



	// Insertar capas
	//....................................
	capa_numeros.appendChild(parrafo_horas)
	capa_numeros.appendChild(dos_puntos)
	capa_numeros.appendChild(parrafo_minutos)
	capa_alarma.appendChild(capa_numeros)
	capa_alarma.appendChild(close_cross)
	container_alarm.appendChild(capa_alarma)



	// Styles
	//................................................
	capa_alarma.classList.add('capa-alarma-guardada')
	capa_numeros.classList.add('capa-numeros')
	close_cross.classList.add('close-cross')
	close_cross.classList.add('icon-close-cross')



	// Escribir datos
	//...............................
	parrafo_horas.innerHTML   = horas
	dos_puntos.innerHTML      = ":"
	parrafo_minutos.innerHTML = minutos



	// ID del registro
	// asignado al botón
	//..................
	close_cross.id = id



	// Asignar click
	// a los botones 
	// de borrado
	//...............
	asignarClick() // delete-button.js



	// Actualizar el
	// icono de alarma
	//.................
	iconBell() // icon-bell.js
}




