
var submit_alarm  = document.getElementById('submit_alarm')



// Obtener datos de los campos de texto
//.....................................
function getData()
{
	let data_1 = input_hours.value
	let data_2 = input_minutes.value

	clearInputs() 


	ajaxPost(data_1, data_2) // Llamada a ajax post
}
submit_alarm.addEventListener('click', getData)





// Vaciar inputs
//....................
function clearInputs()
{
	input_hours.value   = "00"
	input_minutes.value = "00"
}