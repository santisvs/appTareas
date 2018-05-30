
'use estrict'

var Usuario = require('../models/usuario');

function getUsuario(req, res){
	var usuarioId = req.params.id;

	Usuario.findById(usuarioId, function(err, usuario){
		if(err){
			res.status(500).send({message: 'Error no se encuentra el usuario.'});
		} else {
			if(!usuario){
				res.status(404).send({message: 'No existe usuario.'});
			} else {
				res.status(200).send({usuario});
			}
		}
	})
}

function getUsuarios(req, res){
	Usuario.find({}).sort('-_id').exec((err, usuarios) => {
		if(err){
			res.status(500).send({message: 'Error seleccionar la lista de usuarios.'});
		} else {
			if(!usuarios){
				res.status(404).send({message: 'No existen usuarios.'});
			} else {
				res.status(200).send({usuarios});
			}
		}
	});
}

function saveUsuario(req, res){
	var usuario = new Usuario();

	var params = req.body;
	usuario.nombre = params.nombre;
	usuario.apellido = params.apellido;

	usuario.save((err, usuarioStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el usuario'});
		}else{
			res.status(200).send({usuario: usuarioStored});
		}
	});

}

function updateUsuario(req, res){
	var usuarioId = req.params.id;
	var update = req.body;

	Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al actualizar el usuario'});
		}else{
			res.status(200).send({usuario: usuarioUpdated});
		}
	});
}

function deleteUsuario(req, res){
	var usuarioId = req.params.id;

	Usuario.findById(usuarioId, function(err, usuario){
		if(err){
			res.status(500).send({message: 'Error no se encuentra el usuario.'});
		}
		
		if(!usuario){
			res.status(404).send({message: 'No existe usuario.'});
		} else {
			usuario.remove(err => {
				if(err){
					res.status(500).send({message: 'El usuario no se ha podido eliminar.'});
				} else {
					res.status(200).send({message: 'Usuario eliminado.'});
				}
			});
		}
	});
}

module.exports = {
	getUsuario,
	getUsuarios,
	saveUsuario,
	updateUsuario,
	deleteUsuario
}