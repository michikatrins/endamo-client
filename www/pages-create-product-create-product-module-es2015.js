(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-product-create-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-product/create-product.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-product/create-product.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/lista_productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nuevo producto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-row justify-content-center align-items-center style=\"height: 90%\">\n    <ion-col >\n      <ion-card >\n        <ion-card-content>\n          <ion-label class=\"lb-font\">Nombre del producto</ion-label>\n          <ion-input type=\"text\"   autofocus=\"true\" required=\"true\" #name value={{producto.nombre}} ></ion-input>\n          <ion-label class=\"lb-font\">Precio</ion-label>\n          <ion-input type=\"number\"  required=\"true\" #price value={{producto.precio}}></ion-input>\n          <ion-label class=\"lb-font\">Cantidad</ion-label>\n          <ion-input type=\"number\" required=\"true\" #amount value={{producto.cantidad}}></ion-input>\n          <ion-button color=\"tertiary\" expand=\"block\" (click)=\"edit ? updateProducto(name,price,amount) : saveProduct(name,price,amount)\" class=\"padd\">\n            Guardar\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/create-product/create-product-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-product/create-product-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPageRoutingModule", function() { return CreateProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-product.page */ "./src/app/pages/create-product/create-product.page.ts");




const routes = [
    {
        path: '',
        component: _create_product_page__WEBPACK_IMPORTED_MODULE_3__["CreateProductPage"]
    }
];
let CreateProductPageRoutingModule = class CreateProductPageRoutingModule {
};
CreateProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateProductPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-product/create-product.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-product/create-product.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPageModule", function() { return CreateProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product-routing.module */ "./src/app/pages/create-product/create-product-routing.module.ts");
/* harmony import */ var _create_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-product.page */ "./src/app/pages/create-product/create-product.page.ts");







let CreateProductPageModule = class CreateProductPageModule {
};
CreateProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateProductPageRoutingModule"]
        ],
        declarations: [_create_product_page__WEBPACK_IMPORTED_MODULE_6__["CreateProductPage"]]
    })
], CreateProductPageModule);



/***/ }),

/***/ "./src/app/pages/create-product/create-product.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-product/create-product.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border-radius: 5px;\n  --background: rgb(219,219,219);\n  --padding-start: 5px;\n}\n\nion-content {\n  --background: linear-gradient(to right, #2193b0, #6dd5ed);\n}\n\nion-card {\n  --background: white;\n}\n\n.padd {\n  padding-top: 5px;\n}\n\n.lb-font {\n  font-size: 14px;\n  font-family: verdana;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLXByb2R1Y3QvY3JlYXRlLXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSx5REFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE5LDIxOSwyMTkpO1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMTkzYjAsICM2ZGQ1ZWQpO1xufVxuXG5pb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnBhZGR7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmxiLWZvbnR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xufSIsImlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE5LDIxOSwyMTkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIxOTNiMCwgIzZkZDVlZCk7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnBhZGQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubGItZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/create-product/create-product.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-product/create-product.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPage", function() { return CreateProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_producto_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/producto-service.service */ "./src/app/services/producto-service.service.ts");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let CreateProductPage = class CreateProductPage {
    constructor(service, crud, router, activatedRoute, toastController) {
        this.service = service;
        this.crud = crud;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.edit = false;
        this.producto = [];
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.crud.getProducto(params.id)
                .subscribe(res => {
                this.producto = res[0];
                this.edit = true;
            }, err => console.log(err));
        }
    }
    presentToast(mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'warning',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    saveProduct(name, price, amount) {
        this.service.addProduct(name.value, price.value, amount.value).then(resp => {
            this.presentToast(resp["Response:"]);
            this.router.navigate(['/lista_productos']);
        });
    }
    updateProducto(name, price, amount) {
        this.crud.updateProducto(this.producto.idProducto, name.value, price.value, amount.value)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/lista_productos']);
        }, err => console.log(err));
    }
};
CreateProductPage.ctorParameters = () => [
    { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _services_producto_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductoServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
CreateProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-product',
        template: __webpack_require__(/*! raw-loader!./create-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-product/create-product.page.html"),
        styles: [__webpack_require__(/*! ./create-product.page.scss */ "./src/app/pages/create-product/create-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
        _services_producto_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductoServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], CreateProductPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-product-create-product-module-es2015.js.map