/*Injectable permite incluir esta clase dentro de otra*/
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
/*Mapear las respuestas de los servicios REST*/
import 'rxjs/add/operator/map';
/*Recoge las respuestas de AJAX*/
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../models/usuario';

/* Definir clase para que sea inyectable */
@Injectable()
export class UsuarioService{
	public url: string;

	constructor(private _http: Http){
		this.url = 'http://localhost:3678/webservice/';
	}

	getUsuario(id : string){
		return this._http.get(this.url+'usuario/'+id).map(res => res.json());
	}
}