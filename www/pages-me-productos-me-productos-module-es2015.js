(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-me-productos-me-productos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/me-productos/me-productos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/me-productos/me-productos.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Home Empresa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor = \"let product of productos\">\n      <ion-item>\n        <ion-label>\n          <h2>{{product.nombre}}</h2>\n          <h3>Cantidad en stok: {{product.cantidad}}</h3>\n          <h3>Precio: Q. {{product.precio}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" [routerLink]=\"['/producto/editar', product.idProducto]\"><ion-icon name=\"create\"></ion-icon></ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteProducto(product.idProducto)\"><ion-icon name=\"trash\"></ion-icon></ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\" (click)=\"addProduct()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/me-productos/me-productos-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/me-productos/me-productos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MeProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeProductosPageRoutingModule", function() { return MeProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _me_productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./me-productos.page */ "./src/app/pages/me-productos/me-productos.page.ts");




const routes = [
    {
        path: '',
        component: _me_productos_page__WEBPACK_IMPORTED_MODULE_3__["MeProductosPage"]
    }
];
let MeProductosPageRoutingModule = class MeProductosPageRoutingModule {
};
MeProductosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MeProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/me-productos/me-productos.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/me-productos/me-productos.module.ts ***!
  \***********************************************************/
/*! exports provided: MeProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeProductosPageModule", function() { return MeProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _me_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./me-productos-routing.module */ "./src/app/pages/me-productos/me-productos-routing.module.ts");
/* harmony import */ var _me_productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./me-productos.page */ "./src/app/pages/me-productos/me-productos.page.ts");







let MeProductosPageModule = class MeProductosPageModule {
};
MeProductosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _me_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeProductosPageRoutingModule"]
        ],
        declarations: [_me_productos_page__WEBPACK_IMPORTED_MODULE_6__["MeProductosPage"]]
    })
], MeProductosPageModule);



/***/ }),

/***/ "./src/app/pages/me-productos/me-productos.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/me-productos/me-productos.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border-radius: 5px;\n  --background: rgb(219,219,219);\n  --padding-start: 5px;\n}\n\nion-content {\n  --background: linear-gradient(to right, #2193b0, #6dd5ed);\n}\n\nion-card {\n  --background: white;\n}\n\n.padd {\n  padding-top: 5px;\n}\n\n.lb-font {\n  font-size: 14px;\n  font-family: verdana;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL21lLXByb2R1Y3Rvcy9tZS1wcm9kdWN0b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZS1wcm9kdWN0b3MvbWUtcHJvZHVjdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseURBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZS1wcm9kdWN0b3MvbWUtcHJvZHVjdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE5LDIxOSwyMTkpO1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMTkzYjAsICM2ZGQ1ZWQpO1xufVxuXG5pb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnBhZGR7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmxiLWZvbnR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xufSIsImlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE5LDIxOSwyMTkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIxOTNiMCwgIzZkZDVlZCk7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnBhZGQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubGItZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/me-productos/me-productos.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/me-productos/me-productos.page.ts ***!
  \*********************************************************/
/*! exports provided: MeProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeProductosPage", function() { return MeProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_producto_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/producto-service.service */ "./src/app/services/producto-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MeProductosPage = class MeProductosPage {
    constructor(crud, toastController, router) {
        this.crud = crud;
        this.toastController = toastController;
        this.router = router;
        this.productos = [];
    }
    ngOnInit() {
        this.getProductos();
    }
    ionViewWillEnter() {
        this.getProductos();
    }
    presentToast(mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'danger',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    getProductos() {
        this.crud.listarProducto().then(productos => {
            this.productos = productos;
        });
    }
    deleteProducto(id) {
        this.crud.deleteProducto(id)
            .subscribe(res => {
            this.getProductos();
        }, err => this.presentToast("Error al eliminar el producto"));
    }
    addProduct() {
        this.router.navigate(['/create-product']);
    }
};
MeProductosPage.ctorParameters = () => [
    { type: _services_producto_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductoServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MeProductosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-me-productos',
        template: __webpack_require__(/*! raw-loader!./me-productos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/me-productos/me-productos.page.html"),
        styles: [__webpack_require__(/*! ./me-productos.page.scss */ "./src/app/pages/me-productos/me-productos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_producto_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductoServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], MeProductosPage);



/***/ })

}]);
//# sourceMappingURL=pages-me-productos-me-productos-module-es2015.js.map