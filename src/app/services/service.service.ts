import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL2: string = 'http://localhost:3000'

  correo;
  id;

  constructor(private http: HttpClient,
    private storage: Storage) { }

  login(data) {

    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/login', data)
        .subscribe(resp => {

          console.log(resp);

          if (resp["auth"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('correo', data.email);
            resolve(resp);
          }
          else {
            this.storage.clear();
            resolve(false);
          }
        });
    });

  }

  registro_cliente(data) {
    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/register', data)
        .subscribe(resp => {
          console.log(resp["success"]);

          if (resp["success"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('correo', data.email);
            resolve(true);
          }
          else {
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  registro_empresa(data) {
    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/register', data)
        .subscribe(resp => {
          console.log(resp);

          if (resp["success"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('correo', data.email);
            resolve(true);
          }
          else {
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  async getID() {
    const correo = await this.storage.get('correo');
    this.correo = correo;
    console.log(this.correo);

    return new Promise(resolve => {
      this.http.get(`${this.API_URL}/getID/${this.correo}`).subscribe(data => {
        console.log(`${this.API_URL}/getID/${this.correo}`);
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }


  async addProduct(name: string, price: number, amount: number) {
    let id = await this.getID();
    this.id = id;
    console.log(this.id);
    const data = { name, price, amount, id };
    return this.http.post(`${this.API_URL}/addProduct`, data);
  }

  obtenerProductos() {
    return this.http.get(`${this.API_URL}/products`);
  }


}


