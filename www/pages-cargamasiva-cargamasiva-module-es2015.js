(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cargamasiva-cargamasiva-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cargamasiva/cargamasiva.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cargamasiva/cargamasiva.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-grid class=\"content-class\" fixed>\n    <ion-row>\n      <ion-col>\n          <h3>Carga de Productos</h3>\n      </ion-col>\n    </ion-row>  \n    <ion-row>\n      <ion-col>\n        Seleccionar el archivo\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" (click)=\"selectFile()\" expand=\"full\" color=\"dark\">{{returnpath}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cargamasiva/cargamasiva-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cargamasiva/cargamasiva-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CargamasivaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargamasivaPageRoutingModule", function() { return CargamasivaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cargamasiva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargamasiva.page */ "./src/app/pages/cargamasiva/cargamasiva.page.ts");




const routes = [
    {
        path: '',
        component: _cargamasiva_page__WEBPACK_IMPORTED_MODULE_3__["CargamasivaPage"]
    }
];
let CargamasivaPageRoutingModule = class CargamasivaPageRoutingModule {
};
CargamasivaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CargamasivaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cargamasiva/cargamasiva.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cargamasiva/cargamasiva.module.ts ***!
  \*********************************************************/
/*! exports provided: CargamasivaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargamasivaPageModule", function() { return CargamasivaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cargamasiva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargamasiva-routing.module */ "./src/app/pages/cargamasiva/cargamasiva-routing.module.ts");
/* harmony import */ var _cargamasiva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargamasiva.page */ "./src/app/pages/cargamasiva/cargamasiva.page.ts");







let CargamasivaPageModule = class CargamasivaPageModule {
};
CargamasivaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cargamasiva_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargamasivaPageRoutingModule"]
        ],
        declarations: [_cargamasiva_page__WEBPACK_IMPORTED_MODULE_6__["CargamasivaPage"]]
    })
], CargamasivaPageModule);



/***/ }),

/***/ "./src/app/pages/cargamasiva/cargamasiva.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/cargamasiva/cargamasiva.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-class {\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#032fb4), color-stop(#1fa8a8), to(white));\n  background-image: linear-gradient(to bottom right, #032fb4, #1fa8a8, white);\n}\n\n.header-class {\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n}\n\nion-item {\n  background-color: transparent;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-item-divider {\n  background-color: transparent;\n}\n\nion-col.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9Qcm95ZWN0b3MvZW5kYW1vLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2NhcmdhbWFzaXZhL2NhcmdhbWFzaXZhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZ2FtYXNpdmEvY2FyZ2FtYXNpdmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlIQUFBO0VBQUEsMkVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJnYW1hc2l2YS9jYXJnYW1hc2l2YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoMywgNDcsIDE4MCksIHJnYigzMSwgMTY4LCAxNjgpICwgd2hpdGUpOyAgXG59XG5cbi5oZWFkZXItY2xhc3N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbmlvbi1pdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgXG4iLCIuY29udGVudC1jbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMzJmYjQsICMxZmE4YTgsIHdoaXRlKTtcbn1cblxuLmhlYWRlci1jbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbmlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cargamasiva/cargamasiva.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cargamasiva/cargamasiva.page.ts ***!
  \*******************************************************/
/*! exports provided: CargamasivaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargamasivaPage", function() { return CargamasivaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");






let CargamasivaPage = class CargamasivaPage {
    constructor(fileChooser, filePath, papa, service) {
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.papa = papa;
        this.service = service;
        this.returnpath = "";
        this.csvData = [];
        this.headerRow = [];
    }
    ngOnInit() {
    }
    selectFile() {
        this.fileChooser.open()
            .then(uri => {
            this.filePath.resolveNativePath(uri).then((resolvednativepath) => {
                this.returnpath = resolvednativepath;
                let path = resolvednativepath.substring(0, resolvednativepath.lastIndexOf('/'));
                let file = resolvednativepath.substring(resolvednativepath.lastIndexOf('/') + 1, resolvednativepath.length);
                this.readCsvData(path, file);
                this.sendData();
            });
        })
            .catch(e => console.log(e));
    }
    readCsvData(path, file) {
        file.readAsBinaryString(path, file)
            .then(content => {
            console.log("File-Content: " + JSON.stringify(content));
            this.extractData(content);
        })
            .catch(err => {
            console.log(err);
            alert(JSON.stringify(err));
        });
    }
    extractData(content) {
        let csvData = content || '';
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.headerRow = parsedData.data.splice(0, 1)[0];
                this.csvData = parsedData.data;
            }
        });
    }
    sendData() {
        let name = "";
        let price = 0.0;
        let amount = 0;
        this.csvData.forEach(function (value) {
            name = value[0];
            price = value[1];
            amount = value[2];
            this.service.addProduct(name, price, amount);
        });
    }
};
CargamasivaPage.ctorParameters = () => [
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__["FilePath"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"] },
    { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] }
];
CargamasivaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cargamasiva',
        template: __webpack_require__(/*! raw-loader!./cargamasiva.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cargamasiva/cargamasiva.page.html"),
        styles: [__webpack_require__(/*! ./cargamasiva.page.scss */ "./src/app/pages/cargamasiva/cargamasiva.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__["FileChooser"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__["FilePath"],
        ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"],
        src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
], CargamasivaPage);



/***/ })

}]);
//# sourceMappingURL=pages-cargamasiva-cargamasiva-module-es2015.js.map