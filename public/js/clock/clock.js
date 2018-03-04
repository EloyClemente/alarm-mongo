
var container_clock_date = document.getElementById('container_clock_date')
var container_clock      = document.createElement('div')
var paragraph_clock      = document.createElement('p')

container_clock.appendChild(paragraph_clock)


// ID
//...................................
container_clock.id = 'container_clock'


// STYLES
//........................................................
container_clock_date.classList.add('container-clock-date')
container_clock.classList.add('container-clock')
paragraph_clock.classList.add('paragraph-clock')


// PONER ESTE ID AL DIV DEL HTML
//...............................................
container_clock_date.appendChild(container_clock)
//...............................................



const Clock = {

	create: function()
	{	
		hour   = Time.hour()   < 10 ? "0" + Time.hour()   : Time.hour()
		minute = Time.minute() < 10 ? "0" + Time.minute() : Time.minute()
		second = Time.second() < 10 ? "0" + Time.second() : Time.second()
	
		paragraph_clock.innerHTML = hour + ":" + minute + ":" + second
	}
}
Clock.create()


// setInterval(function(){ Clock.create() }, 1000)

// El reloj es movido desde timer.js
// El script crea un reloj responsive completo.
// Tiene algunos estilos para un formato básico.
// Basta con crear en el index.html un div 
// con id container_clock_date.
// El reloj se insertará en él automáticamente.
//.............................................