import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  // private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getID(){
    return this.http.get(`${this.API_URL}/getID/${localStorage.getItem('correo')}`);
  }

  // lista todos los productos
  listarProducto() {
   var empresa = this.getID();
   return this.http.get(`${this.API_URL}listaProdutos/${empresa}`);
  }

  // elimina los productos
  deleteProducto(id: string){
    return this.http.delete(`${this.API_URL}eliminar/${id}`);
  }

  // obtener un producto
  getProducto(id: string){
    return this.http.get(`${this.API_URL}producto/${id}`)
  }

  // actualizar producto
  updateProducto(idProducto: number, name: string, price: number, amount: number, id: number){
    const data = {name, price, amount};
    return this.http.put(`${this.API_URL}editar/producto/${idProducto}`,data);
  }

}
