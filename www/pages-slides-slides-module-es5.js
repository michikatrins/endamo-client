(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/slides/slides.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/slides/slides.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  \r\n  <ion-slides pager=\"true\" class=\"slide-full\">\r\n\r\n    <ion-slide *ngFor=\"let slide of slides\">  \r\n\r\n      <ion-card mode=\"ios\">\r\n\r\n        <img [src]=\"slide.img\" class=\"slide-image\">\r\n\r\n        <ion-card-header>\r\n          <ion-card-title color=\"light\" class=\"titulo-slide\"> {{slide.titulo}} </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n         <ion-label color=\"light\" class=\"titulo-desc\">{{slide.desc}}</ion-label>\r\n        </ion-card-content>\r\n\r\n      </ion-card>\r\n\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n\r\n      <ion-grid>\r\n        <ion-row justify-content-center> \r\n          <ion-card mode=\"ios\" class=\"my-ion-card\">\r\n\r\n            <img src=\"/assets/slides/team.svg\" class=\"slide-image2\">\r\n    \r\n            <ion-card-header>\r\n              <ion-card-title color=\"light\" class=\"titulo-slide\"> Empresa </ion-card-title>\r\n            </ion-card-header>\r\n    \r\n            <ion-card-content>\r\n             <ion-button  color=\"light\" \r\n                          expand=\"full\" \r\n                          fill=\"outline\"\r\n                          (click)=\"registrar_empresa()\">\r\n               Registrarse\r\n              </ion-button>\r\n            </ion-card-content>\r\n    \r\n          </ion-card>\r\n    \r\n          <ion-card mode=\"ios\" class=\"my-ion-card\">\r\n    \r\n            <img src=\"/assets/slides/feedback.svg\" class=\"slide-image2\">\r\n    \r\n            <ion-card-header>\r\n              <ion-card-title color=\"light\" class=\"titulo-slide\"> Cliente </ion-card-title>\r\n            </ion-card-header>\r\n    \r\n            <ion-card-content>\r\n              <ion-button color=\"light\" \r\n                          expand=\"full\" \r\n                          fill=\"outline\" \r\n                          (click)=\"registrar_usuario()\">\r\n                Registrarse\r\n              </ion-button>\r\n             </ion-card-content>\r\n     \r\n          </ion-card>    \r\n        </ion-row>\r\n\r\n        <ion-row justify-content-center>\r\n          <ion-label color=\"dark\">¿Tienes cuenta?</ion-label>\r\n        </ion-row>\r\n\r\n        <ion-row justify-content-center>\r\n          <ion-button expand=\"block\"\r\n                      (click)=\"iniciar_sesion()\">\r\n            Inicia Sesión\r\n          </ion-button>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n      \r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n"

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

module.exports = "ion-slides {\n  height: 100%;\n}\n\n.slide-full {\n  background-color: blue;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#032fb4), color-stop(#1fa8a8), to(white));\n  background-image: linear-gradient(to bottom right, #032fb4, #1fa8a8, white);\n}\n\nion-card {\n  overflow: unset !important;\n}\n\n.my-ion-card {\n  width: 60%;\n  height: 60%;\n}\n\n.slide-image2 {\n  width: 40%;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card {\n  width: 80%;\n}\n\n.slide-image {\n  width: 50%;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card-header {\n  position: relative;\n  top: -50px;\n}\n\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n\n.titulo-slide {\n  font-size: 22px;\n  font-family: Verdana;\n  font-weight: 800;\n}\n\n.titulo-desc {\n  font-size: 15px;\n  font-family: Verdana;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVzL0Q6XFxnb21lelxcRG9jdW1lbnRzXFxEb3dubG9hZHNcXFVTQUNcXGVuZGFtby1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxzbGlkZXNcXHNsaWRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpSEFBQTtFQUFBLDJFQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZS1mdWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoMywgNDcsIDE4MCksIHJnYigzMSwgMTY4LCAxNjgpICwgd2hpdGUpOyAgXHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZTIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuLnRpdHVsby1zbGlkZXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnRpdHVsby1kZXNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG59XHJcblxyXG4iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGUtZnVsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMzJmYjQsICMxZmE4YTgsIHdoaXRlKTtcbn1cblxuaW9uLWNhcmQge1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLm15LWlvbi1jYXJkIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5zbGlkZS1pbWFnZTIge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbi50aXR1bG8tc2xpZGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGl0dWxvLWRlc2Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xufSJdfQ== */"

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
        var _this = this;
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
        this.storage.get('token').then(function (token) {
            if (token != null) {
                _this.storage.get('isClient').then(function (isClient) {
                    if (isClient === '1')
                        _this.route.navigate(['home-cliente']);
                    else
                        _this.route.navigate(['home-empresa']);
                });
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