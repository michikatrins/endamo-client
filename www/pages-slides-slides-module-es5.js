(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/slides/slides.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/slides/slides.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  \n  <ion-slides pager=\"true\" class=\"slide-full\">\n\n    <ion-slide *ngFor=\"let slide of slides\">  \n\n      <ion-card mode=\"ios\">\n\n        <img [src]=\"slide.img\" class=\"slide-image\">\n\n        <ion-card-header>\n          <ion-card-title color=\"light\" class=\"titulo-slide\"> {{slide.titulo}} </ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n         <ion-label color=\"light\" class=\"titulo-desc\">{{slide.desc}}</ion-label>\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row justify-content-center> \n          <ion-card mode=\"ios\" class=\"my-ion-card\">\n\n            <img src=\"/assets/slides/team.svg\" class=\"slide-image2\">\n    \n            <ion-card-header>\n              <ion-card-title color=\"light\" class=\"titulo-slide\"> Empresa </ion-card-title>\n            </ion-card-header>\n    \n            <ion-card-content>\n             <ion-button  color=\"light\" \n                          expand=\"full\" \n                          fill=\"outline\"\n                          (click)=\"registrar_empresa()\">\n               Registrarse\n              </ion-button>\n            </ion-card-content>\n    \n          </ion-card>\n    \n          <ion-card mode=\"ios\" class=\"my-ion-card\">\n    \n            <img src=\"/assets/slides/feedback.svg\" class=\"slide-image2\">\n    \n            <ion-card-header>\n              <ion-card-title color=\"light\" class=\"titulo-slide\"> Cliente </ion-card-title>\n            </ion-card-header>\n    \n            <ion-card-content>\n              <ion-button color=\"light\" \n                          expand=\"full\" \n                          fill=\"outline\" \n                          (click)=\"registrar_usuario()\">\n                Registrarse\n              </ion-button>\n             </ion-card-content>\n     \n          </ion-card>    \n        </ion-row>\n\n        <ion-row justify-content-center>\n          <ion-label color=\"dark\">¿Tienes cuenta?</ion-label>\n        </ion-row>\n\n        <ion-row justify-content-center>\n          <ion-button expand=\"block\"\n                      (click)=\"iniciar_sesion()\">\n            Inicia Sesión\n          </ion-button>\n        </ion-row>\n\n      </ion-grid>\n      \n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/slides/slides-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/slides/slides-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SlidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageRoutingModule", function() { return SlidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides.page */ "./src/app/pages/slides/slides.page.ts");




var routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_3__["SlidesPage"]
    }
];
var SlidesPageRoutingModule = /** @class */ (function () {
    function SlidesPageRoutingModule() {
    }
    SlidesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SlidesPageRoutingModule);
    return SlidesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/slides/slides.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.module.ts ***!
  \***********************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides-routing.module */ "./src/app/pages/slides/slides-routing.module.ts");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "./src/app/pages/slides/slides.page.ts");







var SlidesPageModule = /** @class */ (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesPageRoutingModule"]
            ],
            declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/slides/slides.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%;\n}\n\n.slide-full {\n  background-color: blue;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#032fb4), color-stop(#1fa8a8), to(white));\n  background-image: linear-gradient(to bottom right, #032fb4, #1fa8a8, white);\n}\n\nion-card {\n  overflow: unset !important;\n}\n\n.my-ion-card {\n  width: 60%;\n  height: 60%;\n}\n\n.slide-image2 {\n  width: 40%;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card {\n  width: 80%;\n}\n\n.slide-image {\n  width: 50%;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card-header {\n  position: relative;\n  top: -50px;\n}\n\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n\n.titulo-slide {\n  font-size: 22px;\n  font-family: Verdana;\n  font-weight: 800;\n}\n\n.titulo-desc {\n  font-size: 15px;\n  font-family: Verdana;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zbGlkZXMvc2xpZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUhBQUE7RUFBQSwyRUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXMvc2xpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLWZ1bGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDMsIDQ3LCAxODApLCByZ2IoMzEsIDE2OCwgMTY4KSAsIHdoaXRlKTsgIFxufVxuXG5pb24tY2FyZCB7XG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5teS1pb24tY2FyZHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuXG4uc2xpZGUtaW1hZ2UyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNTBweDtcbn1cblxuLnRpdHVsby1zbGlkZXtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRpdHVsby1kZXNjIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG59XG5cbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS1mdWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAzMmZiNCwgIzFmYThhOCwgd2hpdGUpO1xufVxuXG5pb24tY2FyZCB7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ubXktaW9uLWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnNsaWRlLWltYWdlMiB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogODAlO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuLnRpdHVsby1zbGlkZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50aXR1bG8tZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/slides/slides.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/slides/slides.page.ts ***!
  \*********************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var SlidesPage = /** @class */ (function () {
    function SlidesPage(route, storage) {
        this.route = route;
        this.storage = storage;
        this.slides = [
            {
                img: '/assets/slides/shopping.svg',
                titulo: 'Todo a un click',
                desc: 'Encuentra todo lo que necesitas con un solo click de distancia.'
            },
            {
                img: '/assets/slides/electronics.svg',
                titulo: 'Nueva tecnología',
                desc: 'Catalogos completos con la tecnología más novedosa en la actualidad.'
            },
            {
                img: '/assets/slides/grow-up.svg',
                titulo: '¿Eres una empresa?',
                desc: 'Impulsa tu negocio y has crecer tu mercado con clientes en todo el pais.'
            }
        ];
        /* se verifica si existen datos en el storage, si existen se redirecciona a las pantallas
        de usuario correspondiente */
        this.storage.get('correo').then(function (correo) {
            if (correo != null) {
            }
        });
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage.prototype.registrar_usuario = function () {
        this.route.navigate(['/registro', 0]);
    };
    SlidesPage.prototype.registrar_empresa = function () {
        this.route.navigate(['/registro', 1]);
    };
    SlidesPage.prototype.iniciar_sesion = function () {
        this.route.navigate(['/registro', 2]);
    };
    SlidesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! raw-loader!./slides.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/slides/slides.page.html"),
            styles: [__webpack_require__(/*! ./slides.page.scss */ "./src/app/pages/slides/slides.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], SlidesPage);
    return SlidesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-slides-slides-module-es5.js.map