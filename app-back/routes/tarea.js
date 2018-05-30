'use strict'

var express = require('express');
var TareaController = require('../controllers/tarea');
var tarea = express.Router();

tarea.get('/tarea/:id', TareaController.getTarea);
tarea.get('/tareas', TareaController.getTareas);
tarea.post('/tarea', TareaController.saveTarea);
tarea.put('/tarea/:id', TareaController.updateTarea);
tarea.delete('/tarea/:id', TareaController.deleteTarea);

module.exports = tarea;
