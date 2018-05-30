/*!
 * FICHERO DE CARGA INICIAL
 */
 /*!
 * use estrict
 *
 * Para poder utilizar las ultimas versiones de ES siempre te lo permitan los navegadores
 */
'use estrict'

/*! Cargamos toda la configuración de express */
var mongoose = require('mongoose');
var app = require('./app');
/*! Creamos variable port */
var port = process.env.PORT || 3678;

/*! Ejecutamos conexion con BD */
mongoose.connect('mongodb://localhost:27017/app_tareas', (err, res) =>{
	
	if(err){
		throw err;
	}else{
		console.log('Conexion a MongoDB correcta');
		/*! Si conexion es correcta => Creacion de servidor */
		app.listen(port, function(){
			console.log(`API REST FUNCIONANDO en http://localhost:${port}`);
		});
	}
});

