/*Injectable permite incluir esta clase dentro de otra*/
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
/*Mapear las respuestas de los servicios REST*/
import 'rxjs/add/operator/map';
/*Recoge las respuestas de AJAX*/
import {Observable} from 'rxjs/Observable';
import {Tarea} from '../models/tarea';

/* Definir clase para que sea inyectable */
@Injectable()
export class TareaService{
	public url: string;

	constructor(private _http: Http){
		this.url = 'http://localhost:3678/webservice/';
	}

	getTareas(){
		return this._http.get(this.url+'tareas').map(res => res.json());
	}
}