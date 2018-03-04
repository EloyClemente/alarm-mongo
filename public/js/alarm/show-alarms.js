
container_alarm.style.height = "0px" 
var hover = false


// Para el botón bell
//........................
function adjustLayerBell()
{
	let alarmas = container_alarm.getElementsByClassName('capa-alarma-guardada')


	if(container_alarm.style.height == "0px")
	{
		container_alarm.style.height = (40 * alarmas.length) + 49 + "px" 
	}
	else
	{
		container_alarm.style.height = "0px" 
	}
}
button_alarm.addEventListener('click', adjustLayerBell)





// Para el get y el post
//......................
function adjustLayer()
{
	let alarmas = container_alarm.getElementsByClassName('capa-alarma-guardada')
	container_alarm.style.height = (40 * alarmas.length) + 49 + "px" 
}






// Detectar si se está clicando dentro o fuera de la capa
//.........................................................................
container_clock.addEventListener('mouseover', function(){  hover = true })
container_clock.addEventListener('mouseleave', function(){ hover = false })
container_alarm.addEventListener('mouseover', function(){  hover = true })
container_alarm.addEventListener('mouseleave', function(){ hover = false })
//.........................................................................

// Ocultar alarmas
//..................
function hideAlarm()
{
	 if(hover == false){ container_alarm.style.height = "0px" }
}
window.addEventListener('mousedown', hideAlarm)


