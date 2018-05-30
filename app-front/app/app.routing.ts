import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './components/pagina-inicial.component';
import { TareasListComponent } from './components/tareas-list.component';
import { UsuarioPresentComponent } from './components/user-present.component';


const appRoutes: Routes = [
	{path: '', component: PaginaInicialComponent},
	{path: '**', component: PaginaInicialComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);