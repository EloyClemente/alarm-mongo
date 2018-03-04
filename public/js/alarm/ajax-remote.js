
var ajaxRequest = new XMLHttpRequest()


// RESPUESTA DEL SERVIDOR
//...........................
function ajaxResponse(method)
{
	ajaxRequest.onreadystatechange = function()
	{	
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
		{
			let data = JSON.parse(ajaxRequest.responseText)

			 
			 // Imprimir las alarmas guardadas
			 //....................................
			if(method == 'GET' || method == 'POST')

				printData(data, method)


			// Actualizar tamaño de la capa alarmas
			//........................................
			if(method == 'POST' || method == 'DELETE')

				adjustLayer()
		}
	}
}





// LLAMADA AL SERVIDOR
//............................
function ajaxCalls(parametros)
{
	ajaxResponse(parametros.method) // Para reconocer el método de la llamada
	ajaxRequest.open(parametros.method, parametros.route, true)
	ajaxRequest.setRequestHeader(parametros.content, parametros.urlencoded)
	ajaxRequest.send(parametros.data)
}




// GET
//...................
function ajaxGetAll()
{
	let parametros = {

		method:    'GET',
		route:     'https://alarm-01.herokuapp.com/get',
		content:    null,
		urlencoded: null,
		data:       null,
	}

	ajaxCalls(parametros)
}
ajaxGetAll()







// POST
//.................
function ajaxPost(horas, minutos)
{
	let parametros = {

		method:     'POST',
		route:      'https://alarm-01.herokuapp.com/post',
		content:    'Content-Type',
		urlencoded: 'application/x-www-form-urlencoded',
		data:       'horas=' + horas + '&minutos=' + minutos,
	}

	ajaxCalls(parametros)

}
submit_alarm.addEventListener('click', ajaxPost) // Botón guardar







// DELETE
//...................
function ajaxDelete(id)
{
	let parametros = {

		method:     'DELETE',
		route:      'https://alarm-01.herokuapp.com/delete',
		content:    'Content-Type',
		urlencoded: 'application/x-www-form-urlencoded',
		data:       'ID=' + id,
	}

	ajaxCalls(parametros)
}