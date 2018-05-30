"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tarea_service_1 = require("../services/tarea.service");
var TareasListComponent = /** @class */ (function () {
    /*Constructor del componente*/
    function TareasListComponent(_tareaService) {
        this._tareaService = _tareaService;
        this.titulo = 'Lista de tareas';
    }
    TareasListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('TareasListComponente cargado');
        this._tareaService.getTareas().subscribe(function (result) {
            console.log(result);
            _this.tareas = result.tareas;
            if (!_this.tareas) {
                _this.errorMessage = "No existen tareas";
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    TareasListComponent = __decorate([
        core_1.Component({
            selector: 'tareas-list',
            templateUrl: 'app/views/tareas-list.html',
            providers: [tarea_service_1.TareaService]
        }),
        __metadata("design:paramtypes", [tarea_service_1.TareaService])
    ], TareasListComponent);
    return TareasListComponent;
}());
exports.TareasListComponent = TareasListComponent;
//# sourceMappingURL=tareas-list.component.js.map