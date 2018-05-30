"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pagina_inicial_component_1 = require("./components/pagina-inicial.component");
var appRoutes = [
    { path: '', component: pagina_inicial_component_1.PaginaInicialComponent },
    { path: '**', component: pagina_inicial_component_1.PaginaInicialComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map