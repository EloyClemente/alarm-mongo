
var audio = new Audio('../../sound/alarm-good.mp3')
var horas
var minutos



// localizar alarmas
//..................
function findAlarm()
{
	var capa_alarma_guardada = document.getElementsByClassName('capa-alarma-guardada')


	for (var i = 0; i < capa_alarma_guardada.length; i++)
	{
		horas   = capa_alarma_guardada[i].children[0].children[0].innerHTML
		minutos = capa_alarma_guardada[i].children[0].children[2].innerHTML

		if(horas == Time.hour() && minutos == Time.minute() && Time.second() == 0)
		{
			audio.play()
			audio.volume = 0.4
			iconBlink()
		}
	}
}
findAlarm()
 




// Detener alarma
//..................
function stopAlarm()
{
	if(audio.paused == false)
	{
		audio.load()
		iconBlink()
	}
}
window.addEventListener('mousedown', stopAlarm)	



			


