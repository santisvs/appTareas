import {Component, OnInit} from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import {Usuario} from '../models/usuario';

@Component({
    selector: 'user-present',
    templateUrl: 'app/views/user-present.html',
    providers: [UsuarioService]
})

export class UsuarioPresentComponent implements OnInit { 
	/*Atributos del componente*/
	public usuario: Usuario;
	public errorMessage;
	/*Constructor del componente*/
	constructor(
		private _usuarioService: UsuarioService
	){}

	ngOnInit(){
		console.log('UsuarioPresentComponent cargado');
		this._usuarioService.getUsuario("5afada63503a2229b48fca1e").subscribe(
			result => {
				console.log(result);
				this.usuario = result.usuario;

				if(!this.usuario){
					this.errorMessage = "No existe usuario";
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