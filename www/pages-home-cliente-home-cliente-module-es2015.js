(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-cliente-home-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-cliente/home-cliente.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-cliente/home-cliente.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>home-cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-cliente.page */ "./src/app/pages/home-cliente/home-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _home_cliente_page__WEBPACK_IMPORTED_MODULE_3__["HomeClientePage"]
    }
];
let HomeClientePageRoutingModule = class HomeClientePageRoutingModule {
};
HomeClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeClientePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-cliente-routing.module */ "./src/app/pages/home-cliente/home-cliente-routing.module.ts");
/* harmony import */ var _home_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-cliente.page */ "./src/app/pages/home-cliente/home-cliente.page.ts");







let HomeClientePageModule = class HomeClientePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/home-cliente/home-cliente.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-cliente/home-cliente.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeClientePage = class HomeClientePage {
    constructor() { }
    ngOnInit() {
    }
};
HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-cliente',
        template: __webpack_require__(/*! raw-loader!./home-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-cliente/home-cliente.page.html"),
        styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/pages/home-cliente/home-cliente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeClientePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-cliente-home-cliente-module-es2015.js.map