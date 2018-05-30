// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
// Exportamos el componente AppComponent
export class AppComponent { 
	/*Atributos del componente*/
	public titulo: string;
	public descripcion: string;
	public responsable: string;

	/*COnstructor del componente*/
	constructor(){
		this.titulo = 'Aplicación de tareas';
		this.descripcion = 'Esto es una prueba';
		this.responsable = 'Santi';
	}
}