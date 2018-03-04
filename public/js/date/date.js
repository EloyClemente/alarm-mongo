
var container_clock_date = document.getElementById('container_clock_date')
var container_date       = document.createElement('div')
var paragraph_date       = document.createElement('p')

container_date.appendChild(paragraph_date)


// PONER ESTE ID AL DIV DEL HTML
//...............................................
container_clock_date.appendChild(container_date)
//...............................................



var Fecha = {

	weekName:  [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
	monthName: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],

	create: function()
	{
		paragraph_date.innerHTML = this.weekName[ Time.week() ] + "\u0009" + Time.day() + "\u0009" + this.monthName[ Time.month() ] + "\u0009" + Time.year()
	}
}
Fecha.create()




function updateDate() // Llamada desde timer.js
{ 
	if( Time.hour() == 0 && Time.minute() == 0 && Time.second() == 0 ) // Actualizar fecha a las 00:00:00
	{
		Fecha.create()
	}
}




// STYLES
//........................................................
container_clock_date.classList.add('container-clock-date')
container_date.classList.add('container-date')
paragraph_date.classList.add('paragraph-date')



// La fecha es movida desde timer.js
// El script crea una fecha responsive completa.
// Tiene algunos estilos para un formato básico.
// Basta con crear en el index.html un div 
// con id container_clock_date.
// La fecha se insertará en él automáticamente.
//.............................................