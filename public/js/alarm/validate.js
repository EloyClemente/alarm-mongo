
 input_hours.addEventListener('blur', rectificar)
 input_minutes.addEventListener('blur', rectificar)



// Rectificar campos de texto
//............................
 function rectificar()
 {
 	 if(input_hours.value.length == 0)
 	 {
 	 	input_hours.value = "00"
 	 }
 	 if(input_minutes.value.length == 0)
 	 {
 	 	input_minutes.value = "00"
 	 }
 	 if(input_hours.value.length == 1)
 	 {
 	 	input_hours.value = 0 + input_hours.value
 	 }
 	 if(input_minutes.value.length == 1)
 	 {
 	 	input_minutes.value = 0 + input_minutes.value
 	 }
 }


