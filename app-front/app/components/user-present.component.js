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
var usuario_service_1 = require("../services/usuario.service");
var UsuarioPresentComponent = /** @class */ (function () {
    /*Constructor del componente*/
    function UsuarioPresentComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    UsuarioPresentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('UsuarioPresentComponent cargado');
        this._usuarioService.getUsuario("5afada63503a2229b48fca1e").subscribe(function (result) {
            console.log(result);
            _this.usuario = result.usuario;
            if (!_this.usuario) {
                _this.errorMessage = "No existe usuario";
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    UsuarioPresentComponent = __decorate([
        core_1.Component({
            selector: 'user-present',
            templateUrl: 'app/views/user-present.html',
            providers: [usuario_service_1.UsuarioService]
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
    ], UsuarioPresentComponent);
    return UsuarioPresentComponent;
}());
exports.UsuarioPresentComponent = UsuarioPresentComponent;
//# sourceMappingURL=user-present.component.js.map