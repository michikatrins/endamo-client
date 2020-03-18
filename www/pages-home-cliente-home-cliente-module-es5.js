(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-cliente-home-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-cliente/home-cliente.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-cliente/home-cliente.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home-cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let producto of productos; index as i\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\"\n        size-xl=\"4\">\n        <ion-card (click)=\"ver(i)\" class=\"ion-activatable ripple-parent\">\n          <ion-img [src]=\"ruta\" width=\"50\" height=\"50\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\n            <ion-card-subtitle>Q. {{producto.precio}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home-cliente/home-cliente-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-cliente/home-cliente-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HomeClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePageRoutingModule", function() { return HomeClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-cliente.page */ "./src/app/pages/home-cliente/home-cliente.page.ts");




var routes = [
    {
        path: '',
        component: _home_cliente_page__WEBPACK_IMPORTED_MODULE_3__["HomeClientePage"]
    }
];
var HomeClientePageRoutingModule = /** @class */ (function () {
    function HomeClientePageRoutingModule() {
    }
    HomeClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomeClientePageRoutingModule);
    return HomeClientePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home-cliente/home-cliente.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-cliente/home-cliente.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePageModule", function() { return HomeClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-cliente-routing.module */ "./src/app/pages/home-cliente/home-cliente-routing.module.ts");
/* harmony import */ var _home_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-cliente.page */ "./src/app/pages/home-cliente/home-cliente.page.ts");







var HomeClientePageModule = /** @class */ (function () {
    function HomeClientePageModule() {
    }
    HomeClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeClientePageRoutingModule"]
            ],
            declarations: [_home_cliente_page__WEBPACK_IMPORTED_MODULE_6__["HomeClientePage"]]
        })
    ], HomeClientePageModule);
    return HomeClientePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-cliente/home-cliente.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-cliente/home-cliente.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n}\n\nion-button {\n  width: 100% !important;\n  height: 100% !important;\n}\n\nion-img {\n  height: 150px;\n  width: 150px;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLWNsaWVudGUvaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuIiwiaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-cliente/home-cliente.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-cliente/home-cliente.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePage", function() { return HomeClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_producto_detalle_producto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detalle-producto/detalle-producto.page */ "./src/app/pages/detalle-producto/detalle-producto.page.ts");





var HomeClientePage = /** @class */ (function () {
    function HomeClientePage(service, modalController) {
        this.service = service;
        this.modalController = modalController;
        this.productos = [];
        this.ruta = '/assets/img/img.png';
    }
    HomeClientePage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.obtenerProductos().subscribe(function (res) {
            _this.productos = res;
        }, function (err) { });
    };
    HomeClientePage.prototype.ver = function (indice) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detalle_producto_detalle_producto_page__WEBPACK_IMPORTED_MODULE_4__["DetalleProductoPage"],
                            componentProps: {
                                'producto': this.productos[indice]
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeClientePage.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cliente',
            template: __webpack_require__(/*! raw-loader!./home-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-cliente/home-cliente.page.html"),
            styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/pages/home-cliente/home-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], HomeClientePage);
    return HomeClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-cliente-home-cliente-module-es5.js.map