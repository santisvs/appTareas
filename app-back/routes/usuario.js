'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');
var usuario = express.Router();

usuario.get('/usuario/:id', UsuarioController.getUsuario);
usuario.get('/usuarios', UsuarioController.getUsuarios);
usuario.post('/usuario', UsuarioController.saveUsuario);
usuario.put('/usuario/:id', UsuarioController.updateUsuario);
usuario.delete('/usuario/:id', UsuarioController.deleteUsuario);

module.exports = usuario;
