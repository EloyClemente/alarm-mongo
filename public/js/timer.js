


setInterval(function()
{
	updateDate()
	Clock.create()

	if(Time.second() == 0)
	{
		findAlarm()
	}	
}, 1000)