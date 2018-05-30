
CONFIGURAR ALIAS CYGWIN

C:\cygwin64\home\santiagovallejo\.bash_profile

LIBRERIA BODYPARSER

$ npm install body-parser --save

Permite recibir cualquier parametro por http, la trata y los convierte a un objeto JASON el cual podamos manipular. Te ahorras el parseado de datos.

DEMONIO NODEMON

$ npm install -D nodemon

Permite reconocer los cambios para no estar actualizando la página cada vez que realizamos un cambio. Comprueba continuamente los cambios realizados y lanza automáticamente el script de servidor. Incluyendo los fallos posibles. Lo instalaremos como dependencia única para desarrollo (-D).

COnfiguramos el arranque de Nodemon en el fichero package.json

SISTEMA MVC
Controllers
Models
Routes

Creamos los controladores con las funciones de controlador
Exportamos el modulo de controladores
Importamos los controladores en routes
Creamos el routes indicando la ruta e indicando la funcion que se debe ejecutar.
Exportamos el routes
Importamos routes en app.js
Usamos las routes en el api


PASOS PARA CREAR FUNCIONALIDAD
1/ Crear la funcion en el controller
2/ Incluir funcionalidad en el export module
3/ Incluir la ruta de la funcionalidad


EVITAR PROBLEMAS CON CORS Y CONFIGURAR LAS CABECERAS DE LA API


INSTALAR UN ORM PARA GESTIONAR MONGODB
npm install moongoose --save

ARRANCAR MONGO
ejecutar mongod.exe
ejecutar mongo.exe


use nombre para crear una tabla
db.nombre.insert();
db.nombre.find();

// Ver los registras de la tabla tarea
show dbs
use app_tareas
db.tareas.find()