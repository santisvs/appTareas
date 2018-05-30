'use strict'

var mongoose = require('mongoose');
/*! Definimos la variable esquema para permitirnos definir los objetos */
var Schema = mongoose.Schema;

/*! Esquema de Objeto Favorito */
var TareaSchema = Schema({
	titulo: String,
	descripcion: String,
	url: String,
	responsable: String
});

/*! Exportamos el esquema Favorito */
module.exports = mongoose.model('Tarea', TareaSchema);