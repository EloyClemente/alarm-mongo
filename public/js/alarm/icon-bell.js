
let entradas = container_alarm.getElementsByClassName('capa-alarma-guardada')


// Seleccionar icono al cargar
//............................
function iconBell()
{
	if(entradas.length == 0)
	{
		button_alarm.classList.remove('icon-bell-white')
		button_alarm.classList.add('icon-bell-off')
	}
	else
	{
		button_alarm.classList.remove('icon-bell-off')
		button_alarm.classList.add('icon-bell-white')
	}
}
iconBell()





// Parpadeo del icono
//...................
function iconBlink()
{
	button_alarm.classList.remove('icon-bell-off')
	button_alarm.classList.remove('icon-bell-black')
	button_alarm.classList.add('icon-bell-white')

	
	var blink = setTimeout(function()
	{
		button_alarm.classList.remove('icon-bell-white')
		button_alarm.classList.add('icon-bell-black')

		setTimeout(function()
		{
			iconBlink()
		}, 500)
	}, 500)


	if(audio.paused == true) // Si el audio está off
	{
		clearTimeout(blink) // Detener bucle
	}
}