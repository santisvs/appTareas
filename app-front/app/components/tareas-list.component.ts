import {Component, OnInit} from '@angular/core';

import {TareaService} from '../services/tarea.service';
import {Tarea} from '../models/tarea';

@Component({
    selector: 'tareas-list',
    templateUrl: 'app/views/tareas-list.html',
    providers: [TareaService]
})

export class TareasListComponent implements OnInit { 
	/*Atributos del componente*/
	public titulo: string;
	public tareas: Tarea[];
	public errorMessage;
	/*Constructor del componente*/
	constructor(
		private _tareaService: TareaService
	){
		this.titulo = 'Lista de tareas';
	}

	ngOnInit(){
		console.log('TareasListComponente cargado');
		this._tareaService.getTareas().subscribe(
			result => {
				console.log(result);
				this.tareas = result.tareas;

				if(!this.tareas){
					this.errorMessage = "No existen tareas";
				}
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
	}

	/* Definición de métodos para este componente*/
	
}