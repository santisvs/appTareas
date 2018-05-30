/*! Fichero de configuración del framework express*/
'use estrict'

/*!
 * require es lo mismo que import o include
 */
var express = require('express');
/*! Middleware BoyParser. Programa que se ejecuta entre peticiones y node*/
var bodyParser = require('body-parser');


var app = express();
var tarea = require('./routes/tarea');
var usuario = require('./routes/usuario');

/*! Configurar body-parser*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* Configurar middleware para evitar CORS */
app.use((req, res, next) => {
	/* Cualquiera puede hacer peticiones a nuestra API*/
	res.header('Access-Control-Allow-Origin', '*');
	/* Cabeceras que podemos recibir y enviar */
	res.header('Access-Control-Allow-Header', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	/* Método para salir de este app.use*/
	next();
});

app.use('/webservice', tarea);
app.use('/webservice', usuario);

/*! Exportar el modulo para poder importarlo en otros modulos*/
module.exports = app;