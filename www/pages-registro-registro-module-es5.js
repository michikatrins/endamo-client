(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registro/registro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registro/registro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\n  \n      <ion-slide>\n   \n          <ion-grid fixed>\n  \n            <ion-row>\n            <ion-col>\n                <h3>Seleccione Avatar</h3>\n            </ion-col>\n            </ion-row>\n  \n            <ion-row>\n            <ion-col>\n                <ion-slides [options]=\"avatarSlide\">\n                <ion-slide *ngFor=\"let avatar of avatars\">\n                    <img class=\"pick-avatar\" \n                            src=\"{{avatar.img}}\"\n                            [ngClass]=\"{'pick-avatar-seleccionado': avatar.seleccionado}\"\n                            (click)=\"seleccionarAvatar(avatar)\"><img>\n                </ion-slide>\n                </ion-slides>\n            </ion-col>\n            </ion-row>\n        \n            <form (ngSubmit)=\"registrar_usuario(fRegistroUsuario)\" #fRegistroUsuario=\"ngForm\">\n                <ion-row>\n                    <ion-col>\n                        \n                        <ion-list>\n                            \n                            <ion-item color=\"transparent\">\n                            <ion-label>Email    </ion-label>\n                            <ion-input  name=\"email\" \n                                        type=\"email\"\n                                        [(ngModel)] = \"registerUser.email\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                            <ion-item color=\"transparent\">\n                            <ion-label>Nombre   </ion-label>\n                            <ion-input  name=\"nombre\"\n                                        type=\"text\"\n                                        [(ngModel)] = \"registerUser.username\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                            <ion-item color=\"transparent\">\n                            <ion-label>Password     </ion-label>\n                            <ion-input  name=\"password\"\n                                        type=\"password\"\n                                        [(ngModel)] = \"registerUser.password\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"dark\"\n                                shape=\"round\">\n                        Crear Usuario\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            \n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n  \n      \n      <ion-slide>\n\n        <ion-grid fixed>\n  \n        \n            <form (ngSubmit)=\"registrar_empresa(fRegistroEmpresa)\" #fRegistroEmpresa=\"ngForm\">\n                <ion-row>\n                    <ion-col>\n                        \n                        <ion-list>\n                            \n                            <ion-item color=\"transparent\">\n                            <ion-label>Email    </ion-label>\n                            <ion-input  name=\"email\" \n                                        type=\"email\"\n                                        [(ngModel)] = \"registerEmpresa.email\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                            <ion-item color=\"transparent\">\n                            <ion-label>Nombre   </ion-label>\n                            <ion-input  name=\"nombre\"\n                                        type=\"text\"\n                                        [(ngModel)] = \"registerEmpresa.username\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                            <ion-item color=\"transparent\">\n                            <ion-label>Password     </ion-label>\n                            <ion-input  name=\"password\"\n                                        type=\"password\"\n                                        [(ngModel)] = \"registerEmpresa.password\"\n                                        required></ion-input>\n                            </ion-item>\n                            <ion-item color=\"transparent\">\n                                <ion-button routerLink=\"/cargamasiva\"\n                                            color=\"dark\"\n                                            expand=\"full\"\n                                            shape=\"round\">\n                                    Carga masiva\n                                </ion-button>\n                            </ion-item>\n  \n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"dark\"\n                                shape=\"round\">\n                        Crear Empresa\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            \n            </form>\n        </ion-grid>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <ion-grid fixed>\n  \n            <ion-row>\n            <ion-col>\n                <h3>¡Bienvenido!</h3>\n            </ion-col>\n            </ion-row>\n  \n            <ion-row>\n                <ion-col class=\"center\">\n                    <img class=\"pick-avatar-seleccionado\" \n                    src=\"/assets/avatars/av-2.png\">\n                </ion-col>\n            </ion-row>\n\n            <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n                <ion-row>\n                    <ion-col>\n                        \n                        <ion-list>\n                            \n                            <ion-item color=\"transparent\">\n                            <ion-label>Email     </ion-label>\n                            <ion-input  name=\"name\" \n                                        type=\"email\"\n                                        [(ngModel)] = \"loginUser.email\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                            <ion-item color=\"transparent\">\n                            <ion-label>Password     </ion-label>\n                            <ion-input  name=\"password\"\n                                        type=\"password\"\n                                        [(ngModel)] = \"loginUser.password\"\n                                        required></ion-input>\n                            </ion-item>\n  \n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"dark\"\n                                shape=\"round\">\n                        Iniciar Sesion\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            \n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n    </ion-slides>\n  \n  </ion-content>\n  \n  \n  <ion-footer no-border>\n    <ion-toolbar >\n      \n      <ion-row>\n  \n        <ion-col>\n            <ion-button shape=\"round\"\n                        expand=\"full\"\n                        size=\"small\"\n                        color=\"primary\"\n                        (click)=\"mostrarLogin()\">\n              Ingresar\n            </ion-button>\n        </ion-col>\n  \n        <ion-col>\n          <ion-button shape=\"round\"\n                      expand=\"full\"\n                      size=\"small\"\n                      color=\"primary\"\n                      (click)=\"mostrarRegistro()\">\n            {{textButton}}\n          </ion-button>\n        </ion-col>\n  \n      </ion-row>\n  \n  \n  \n    </ion-toolbar >\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/registro/registro-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/pages/registro/registro.page.ts");




var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
var RegistroPageRoutingModule = /** @class */ (function () {
    function RegistroPageRoutingModule() {
    }
    RegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistroPageRoutingModule);
    return RegistroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/pages/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/pages/registro/registro.page.ts");







var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide, .mainSlide {\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#032fb4), color-stop(#1fa8a8), to(white));\n  background-image: linear-gradient(to bottom right, #032fb4, #1fa8a8, white);\n}\n\nion-item {\n  background-color: transparent;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-toolbar {\n  background-color: black;\n}\n\nion-col.center {\n  text-align: center;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlIQUFBO0VBQUEsMkVBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUNBQUE7RUFBQSwrQkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLCAubWFpblNsaWRle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigzLCA0NywgMTgwKSwgcmdiKDMxLCAxNjgsIDE2OCkgLCB3aGl0ZSk7ICBcbn1cblxuaW9uLWl0ZW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG4ucGljay1hdmF0YXIge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjsgXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSIsIi5tYWluU2xpZGUsIC5tYWluU2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDMyZmI0LCAjMWZhOGE4LCB3aGl0ZSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb2wuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5waWNrLWF2YXRhciB7XG4gIHdpZHRoOiA4MHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/registro/registro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");





var RegistroPage = /** @class */ (function () {
    function RegistroPage(activeRoute, service, toastController, route) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.toastController = toastController;
        this.route = route;
        this.id = null;
        this.avatars = [
            {
                img: '/assets/avatars/av-1.png',
                seleccionado: true
            },
            {
                img: '/assets/avatars/av-2.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-3.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-4.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-5.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-6.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-7.png',
                seleccionado: false
            },
            {
                img: '/assets/avatars/av-8.png',
                seleccionado: false
            },
        ];
        this.avatarSlide = {
            slidesPerView: 3.5
        };
        this.isUserSlide = false;
        this.textButton = 'Registrar Empresa';
        this.loginUser = {
            email: '',
            password: ''
        };
        this.registerUser = {
            nombre: '',
            email: '',
            username: '',
            password: '',
            avatar: '/assets/avatars/av-1.png'
        };
        this.registerEmpresa = {
            username: '',
            email: '',
            password: ''
        };
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.slides.slideTo(this.id);
        this.slides.lockSwipes(true);
    };
    /*Métodos de navegación*/
    RegistroPage.prototype.seleccionarAvatar = function (avatar) {
        this.avatars.forEach(function (av) { return av.seleccionado = false; });
        avatar.seleccionado = true;
        this.registerUser.avatar = avatar.img;
    };
    RegistroPage.prototype.mostrarLogin = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    };
    RegistroPage.prototype.mostrarRegistro = function () {
        this.slides.lockSwipes(false);
        if (this.isUserSlide) {
            this.slides.slideTo(0);
            this.textButton = 'Registrar Empresa';
        }
        else {
            this.slides.slideTo(1);
            this.textButton = 'Registrar Usuario';
        }
        this.isUserSlide = !this.isUserSlide;
        this.slides.lockSwipes(true);
    };
    RegistroPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: '¡Datos Erroneos! Intenta nuevamente.',
                            color: 'danger',
                            position: 'top',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*Métodos para consumir servicios e interactuar*/
    RegistroPage.prototype.registrar_usuario = function (fRegistroUsuario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fRegistroUsuario.invalid) return [3 /*break*/, 1];
                        this.presentToast();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service.registro_cliente(this.registerUser)];
                    case 2:
                        valido = _a.sent();
                        if (valido)
                            this.route.navigate(['/home-cliente']);
                        else
                            this.presentToast();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.registrar_empresa = function (fRegistroEmpresa) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fRegistroEmpresa.invalid) return [3 /*break*/, 1];
                        this.presentToast();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service.registro_empresa(this.registerEmpresa)];
                    case 2:
                        valido = _a.sent();
                        if (valido)
                            this.route.navigate(['/home-empresa']);
                        else
                            this.presentToast();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.login = function (fLogin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fLogin.invalid) return [3 /*break*/, 1];
                        this.presentToast();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service.login(this.loginUser)];
                    case 2:
                        valido = _a.sent();
                        if (valido["auth"]) {
                            if (valido["user"])
                                this.route.navigate(['/home-cliente']);
                            else
                                this.route.navigate(['/lista_productos']);
                        }
                        else
                            this.presentToast();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], RegistroPage.prototype, "slides", void 0);
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/pages/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module-es5.js.map