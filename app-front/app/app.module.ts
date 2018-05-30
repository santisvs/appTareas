import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	from '@angular/forms';
import { HttpModule, JsonpModule }	from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { PaginaInicialComponent }  from './components/pagina-inicial.component';
import { TareasListComponent }  from './components/tareas-list.component';
import { UsuarioPresentComponent }  from './components/user-present.component';
import { PowerLinkComponent }  from './components/power-link.component';

/* */
@NgModule({
/* Importar modulos del framework */
  imports:      [ 
  					BrowserModule, 
  					FormsModule,
  					HttpModule,
            routing
  ],
/* Directivas, componentes y pipes que vamos a utilizar */
  declarations: [ 
  					AppComponent,
            PaginaInicialComponent,
  					TareasListComponent,
            UsuarioPresentComponent,
            PowerLinkComponent
  ],
/* Incluimos el servicio de rutas*/
  providers:    [appRoutingProviders],
/* Componente inicial de la aplicación a cargar */
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }