import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  // private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  // lista todos los productos
  listarProducto() {
   var empresa = 2;
   return this.http.get(`${this.API_URL}listaProdutos/${empresa}`);
  }

  // elimina los productos
  deleteProducto(id: string){
    return this.http.delete(`${this.API_URL}eliminar/${id}`);
  }

}
