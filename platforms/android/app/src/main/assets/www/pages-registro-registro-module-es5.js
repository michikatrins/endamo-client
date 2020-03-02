(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registro/registro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registro/registro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\r\n  \r\n      <ion-slide>\r\n   \r\n          <ion-grid fixed>\r\n  \r\n            <ion-row>\r\n            <ion-col>\r\n                <h3>Seleccione Avatar</h3>\r\n            </ion-col>\r\n            </ion-row>\r\n  \r\n            <ion-row>\r\n            <ion-col>\r\n                <ion-slides [options]=\"avatarSlide\">\r\n                <ion-slide *ngFor=\"let avatar of avatars\">\r\n                    <img class=\"pick-avatar\" \r\n                            src=\"{{avatar.img}}\"\r\n                            [ngClass]=\"{'pick-avatar-seleccionado': avatar.seleccionado}\"\r\n                            (click)=\"seleccionarAvatar(avatar)\"><img>\r\n                </ion-slide>\r\n                </ion-slides>\r\n            </ion-col>\r\n            </ion-row>\r\n        \r\n            <form (ngSubmit)=\"registrar_usuario(fRegistroUsuario)\" #fRegistroUsuario=\"ngForm\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        \r\n                        <ion-list>\r\n                            \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Email    </ion-label>\r\n                            <ion-input  name=\"email\" \r\n                                        type=\"email\"\r\n                                        [(ngModel)] = \"registerUser.email\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Nombre   </ion-label>\r\n                            <ion-input  name=\"nombre\"\r\n                                        type=\"text\"\r\n                                        [(ngModel)] = \"registerUser.name\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Password     </ion-label>\r\n                            <ion-input  name=\"password\"\r\n                                        type=\"password\"\r\n                                        [(ngModel)] = \"registerUser.password\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row>\r\n                <ion-col>\r\n                    <ion-button type=\"submit\"\r\n                                color=\"dark\"\r\n                                shape=\"round\">\r\n                        Crear Usuario\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            \r\n            </form>\r\n        </ion-grid>\r\n  \r\n      </ion-slide>\r\n  \r\n      \r\n      <ion-slide>\r\n\r\n        <ion-grid fixed>\r\n  \r\n        \r\n            <form (ngSubmit)=\"registrar_empresa(fRegistroEmpresa)\" #fRegistroEmpresa=\"ngForm\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        \r\n                        <ion-list>\r\n                            \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Email    </ion-label>\r\n                            <ion-input  name=\"email\" \r\n                                        type=\"email\"\r\n                                        [(ngModel)] = \"registerEmpresa.email\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Nombre   </ion-label>\r\n                            <ion-input  name=\"nombre\"\r\n                                        type=\"text\"\r\n                                        [(ngModel)] = \"registerEmpresa.name\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Password     </ion-label>\r\n                            <ion-input  name=\"password\"\r\n                                        type=\"password\"\r\n                                        [(ngModel)] = \"registerEmpresa.password\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <button routerLink=\"/cargamasiva\">\r\n                                    Ir a Carga Masiva\r\n                                </button>\r\n                            </ion-item>\r\n  \r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row>\r\n                <ion-col>\r\n                    <ion-button type=\"submit\"\r\n                                color=\"dark\"\r\n                                shape=\"round\">\r\n                        Crear Empresa\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            \r\n            </form>\r\n        </ion-grid>\r\n\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n\r\n        <ion-grid fixed>\r\n  \r\n            <ion-row>\r\n            <ion-col>\r\n                <h3>¡Bienvenido!</h3>\r\n            </ion-col>\r\n            </ion-row>\r\n  \r\n            <ion-row>\r\n                <ion-col class=\"center\">\r\n                    <img class=\"pick-avatar-seleccionado\" \r\n                    src=\"/assets/avatars/av-2.png\">\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        \r\n                        <ion-list>\r\n                            \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Email     </ion-label>\r\n                            <ion-input  name=\"email\" \r\n                                        type=\"email\"\r\n                                        [(ngModel)] = \"loginUser.email\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                            <ion-item color=\"transparent\">\r\n                            <ion-label>Password     </ion-label>\r\n                            <ion-input  name=\"password\"\r\n                                        type=\"password\"\r\n                                        [(ngModel)] = \"loginUser.password\"\r\n                                        required></ion-input>\r\n                            </ion-item>\r\n  \r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row>\r\n                <ion-col>\r\n                    <ion-button type=\"submit\"\r\n                                color=\"dark\"\r\n                                shape=\"round\">\r\n                        Iniciar Sesion\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            \r\n            </form>\r\n        </ion-grid>\r\n  \r\n      </ion-slide>\r\n    </ion-slides>\r\n  \r\n  </ion-content>\r\n  \r\n  \r\n  <ion-footer no-border>\r\n    <ion-toolbar >\r\n      \r\n      <ion-row>\r\n  \r\n        <ion-col>\r\n            <ion-button shape=\"round\"\r\n                        expand=\"full\"\r\n                        size=\"small\"\r\n                        color=\"primary\"\r\n                        (click)=\"mostrarLogin()\">\r\n              Ingresar\r\n            </ion-button>\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <ion-button shape=\"round\"\r\n                      expand=\"full\"\r\n                      size=\"small\"\r\n                      color=\"primary\"\r\n                      (click)=\"mostrarRegistro()\">\r\n            {{textButton}}\r\n          </ion-button>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n  \r\n  \r\n  \r\n    </ion-toolbar >\r\n</ion-footer>"

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

module.exports = ".mainSlide, .mainSlide {\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#032fb4), color-stop(#1fa8a8), to(white));\n  background-image: linear-gradient(to bottom right, #032fb4, #1fa8a8, white);\n}\n\nion-item {\n  background-color: transparent;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-toolbar {\n  background-color: black;\n}\n\nion-col.center {\n  text-align: center;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vRDpcXGdvbWV6XFxEb2N1bWVudHNcXERvd25sb2Fkc1xcVVNBQ1xcZW5kYW1vLWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvXFxyZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpSEFBQTtFQUFBLDJFQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0VBQUEsK0JBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5TbGlkZSwgLm1haW5TbGlkZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigzLCA0NywgMTgwKSwgcmdiKDMxLCAxNjgsIDE2OCkgLCB3aGl0ZSk7ICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNvbC5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnBpY2stYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7IFxyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59IiwiLm1haW5TbGlkZSwgLm1haW5TbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMzJmYjQsICMxZmE4YTgsIHdoaXRlKTtcbn1cblxuaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */"

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
            name: '',
            email: '',
            password: '',
            avatar: '/assets/avatars/av-1.png'
        };
        this.registerEmpresa = {
            name: '',
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
                    case 1: return [4 /*yield*/, this.service.registro_cliente(this.registerUser.name, this.registerUser.email, this.registerUser.password, this.registerUser.avatar)];
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
                    case 1: return [4 /*yield*/, this.service.registro_empresa(this.registerEmpresa.name, this.registerEmpresa.email, this.registerEmpresa.password)];
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
    RegistroPage.prototype.login = function (fLogin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fLogin.invalid) return [3 /*break*/, 1];
                        this.presentToast();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service.login(this.loginUser.email, this.loginUser.password)];
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



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var ServiceService = /** @class */ (function () {
    function ServiceService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.token = null;
    }
    ServiceService.prototype.login = function (email, password) {
        var _this = this;
        var data = { email: email, password: password };
        return new Promise(function (resolve) {
            _this.http.post('', data)
                .subscribe(function (resp) {
                console.log(resp);
                /*
                  if(loginCorrecto)
                  {
                    //si los datos son correctos, se guarda la informacion en el local storage
                    this.storage.set('token',ID);
                    this.storage.set('isClient', 1 cliente 0 empresa)
                    resolve(true);
                  }
                  else
                  {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                  }
                */
            });
        });
    };
    ServiceService.prototype.registro_cliente = function (name, email, password, avatar) {
        var _this = this;
        var data = { name: name, email: email, password: password, avatar: avatar };
        return new Promise(function (resolve) {
            _this.http.post('', data)
                .subscribe(function (resp) {
                console.log(resp);
                /*
                  if(registroCorrecto)
                  {
                    //si los datos son correctos, se guarda la informacion en el local storage
                    this.storage.set('token',ID);
                    this.storage.set('isClient', 1 cliente)
                    resolve(true);
                  }
                  else
                  {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                  }
                */
            });
        });
    };
    ServiceService.prototype.registro_empresa = function (name, email, password) {
        var _this = this;
        var datos = { name: name, email: email, password: password };
        return new Promise(function (resolve) {
            _this.http.post('', datos)
                .subscribe(function (resp) {
                console.log(resp);
                /*
                  if(registroCorrecto)
                  {
                    //si los datos son correctos, se guarda la informacion en el local storage
                    this.storage.set('token',ID);
                    this.storage.set('isEmpresa', 1 empresa)
                    resolve(true);
                  }
                  else
                  {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                  }
                */
            });
        });
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module-es5.js.map