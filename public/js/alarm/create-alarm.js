
var container_clock = document.getElementById('container_clock') // localizar reloj


// Crear capas
//..................................................
let container_alarm  = document.createElement('div') // Crear container para la alarma
let button_alarm     = document.createElement('div') // Crear botón para mostrar la alarma
let capa_formulario  = document.createElement('div') // Capa para el formulario de la alarma
let container_inputs = document.createElement('div') // Container para los input y dos puntos
var input_hours      = document.createElement('input') // Input horas
var input_minutes    = document.createElement('input') // Input minutos
let dos_puntos       = document.createElement('p') // Dos puntos
var submit_alarm     = document.createElement('p') // Botón guardar



// Insertar capas
//.............................................
container_clock.appendChild(container_alarm) // Insertar container en el reloj
container_clock.appendChild(button_alarm) // Insertar botón en el reloj
container_alarm.appendChild(capa_formulario) // Insertar capa para el formulario
capa_formulario.appendChild(container_inputs) // Container para los input y dos puntos
container_inputs.appendChild(input_hours) // Input horas
container_inputs.appendChild(dos_puntos) // Dos puntos
container_inputs.appendChild(input_minutes) // Input minutos
capa_formulario.appendChild(submit_alarm) // Botón guardar



// Styles
//.................................................
button_alarm.classList.add('button-alarm')
container_alarm.classList.add('container-alarm')
capa_formulario.classList.add('alarma-formulario')
container_inputs.classList.add('container-inputs')
input_hours.classList.add('input-alarma')
input_minutes.classList.add('input-alarma')
submit_alarm.classList.add('submit-alarm')
//................................................



// ID
//.................................
button_alarm.id  = 'button_alarm'
input_hours.id   = 'input_hours'
input_minutes.id = 'input_minutes'
submit_alarm.id  = 'submit_alarm'



// Values
//............................
input_hours.value      = "00"
input_minutes.value    = "00"
dos_puntos.innerHTML   = ":"
submit_alarm.innerHTML = "Guardar"



// Limitación de caracteres
//.........................
input_hours.maxLength   = 2
input_minutes.maxLength = 2



// Seleccionar el texto de los campos on focus
//...........................................................................
input_hours.addEventListener('focus', function(){ input_hours.select() })
input_minutes.addEventListener('focus', function(){ input_minutes.select() })