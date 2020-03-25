import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  //private url = 'https://localhost:3000/';

  private url = 'https://endamo-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // crearUsuario(nombre: string, email: string, username: string, password: string, avatar: string) {
  //   const data = { nombre, email, username, password, avatar };
  //   return this.http.post(`${this.url}register`, data);
  // }

  obtenerProductos() {
    return this.http.get(`${this.url}producto/listado`);
  }

}
