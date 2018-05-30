
'use estrict'

/* Incluimos el objeto favorito para poder ustilizarlo */
var Tarea = require('../models/tarea');

function getTarea(req, res){
	var tareaId = req.params.id;

	Tarea.findById(tareaId, function(err, tarea){
		if(err){
			res.status(500).send({message: 'Error no se encuentra la tarea.'});
		} else {
			if(!tarea){
				res.status(404).send({message: 'No existe tarea.'});
			} else {
				res.status(200).send({tarea});
			}
		}
	})
}

function getTareas(req, res){
	/*find ordenado por id*/
	/*Tarea.find({}).sort('-_id').exec((err, tareas) => {*/

	/*find ordenado por titulo*/
	Tarea.find({}).sort('-_id').exec((err, tareas) => {
		if(err){
			res.status(500).send({message: 'Error seleccionar la lista de tareas.'});
		} else {
			if(!tareas){
				res.status(404).send({message: 'No existen tareas.'});
			} else {
				res.status(200).send({tareas});
			}
		}
	});
}

function saveTarea(req, res){
	var tarea = new Tarea();

	var params = req.body;
	tarea.titulo = params.titulo;
	tarea.descripcion = params.descripcion;
	tarea.url = params.url;
	tarea.responsable = params.responsable;

	tarea.save((err, tareaStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar la tarea'});
		}else{
			res.status(200).send({tarea: tareaStored});
		}
	});

}

function updateTarea(req, res){
	var tareaId = req.params.id;
	var update = req.body;

	Tarea.findByIdAndUpdate(tareaId, update, (err, tareaUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al actualizar la tarea'});
		}else{
			res.status(200).send({tarea: tareaUpdated});
		}
	});
}

function deleteTarea(req, res){
	var tareaId = req.params.id;

	Tarea.findById(tareaId, function(err, tarea){
		if(err){
			res.status(500).send({message: 'Error no se encuentra la tarea.'});
		}
		
		if(!tarea){
			res.status(404).send({message: 'No existe tarea.'});
		} else {
			tarea.remove(err => {
				if(err){
					res.status(500).send({message: 'La tarea no se ha podido eliminar.'});
				} else {
					res.status(200).send({message: 'Tarea eliminada.'});
				}
			});
		}
	});
}

module.exports = {
	getTarea,
	getTareas,
	saveTarea,
	updateTarea,
	deleteTarea
}