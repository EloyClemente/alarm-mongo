
const AlarmModel = require('../models/model-alarm')




module.exports = function(app)
{
	app.get('/get', (req, res) =>
	{
		AlarmModel.find({}, (err, alarmStored) =>
		{
			if(err) res.status(500).send({ message: 'Error al buscar los datos' })

			 res.status(200).send(alarmStored)
		})
	})





	app.post('/post', (req, res) =>
	{
		 const model   = new AlarmModel()
		 model.horas   = req.body.horas
		 model.minutos = req.body.minutos

		 model.save((err, alarmStored) =>
		 {
		 	if (err) res.status(500).send({ message: 'Error al guardar en mongo' })

		 	res.send({ datos: alarmStored })
		 })
	})





	app.delete('/delete', (req, res) =>
	{
		let ID = req.body.ID

		AlarmModel.findById(ID, function(err, registro)
		{
			registro.remove( err =>
			{
				if(err) throw err
				res.send({ datos: registro }) // Para evitar error en ajax
			})
		})
	})
}