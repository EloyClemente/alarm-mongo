
var Time = {

	today: function()
	{
		return new Date()
	},

	year: function()
	{
		return this.today().getFullYear()
	},

	month: function()
	{
		return this.today().getMonth()
	},

	week: function()
	{
		return this.today().getDay()
	},

	day: function()
	{
		return this.today().getDate()
	},

	hour: function()
	{
		return this.today().getHours()
	},

	minute: function()
	{
		return this.today().getMinutes()
	},

	second: function()
	{
		return this.today().getSeconds()
	},
}

