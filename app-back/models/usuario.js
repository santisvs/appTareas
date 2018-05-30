'use strict'

var mongoose = require('mongoose');
/*! Definimos la variable esquema para permitirnos definir los objetos */
var Schema = mongoose.Schema;

/*! Esquema de Objeto Favorito */
var UsuarioSchema = Schema({
	nombre: String,
	apellido: String
});

/*! Exportamos el esquema Favorito */
module.exports = mongoose.model('Usuario', UsuarioSchema);