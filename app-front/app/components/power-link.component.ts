import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'power-link',
    templateUrl: 'app/views/power-link.html'
})

export class PowerLinkComponent { 
	/*Atributos del componente*/
	public power: boolean;
	
	/*Constructor del componente*/
	constructor(){
		this.power = false;
	}

	/* Definición de métodos para este componente*/
	public clickPower(){
		if(this.power){
			this.power = false;
		} else {
			this.power = true;
		}
		return this.power;
	}
	
}