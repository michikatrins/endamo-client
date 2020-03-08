import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL2: string = 'http://localhost:3000'

  correo;
  id;

  constructor(private http: HttpClient,
              private storageService: StorageService) { }            

  login(data) {

    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/login',data)
      .subscribe(resp => {

        console.log(resp);
          
        if(resp["auth"])
        {
          //si los datos son correctos, se guarda la informacion en el local storage
          localStorage.setItem('correo',JSON.stringify(data.email))
          resolve(resp);
        }
        else
        {
          localStorage.clear();
          resolve(false);
        }
      });
    });

  }

  registro_cliente(data) {
    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/register',data)
      .subscribe(resp => {
        console.log(resp["success"]);

        if(resp["success"])
        {
          //si los datos son correctos, se guarda la informacion en el local storage
          localStorage.setItem('correo',JSON.stringify(data.email))
          resolve(true);
        }
        else
        {
          localStorage.clear();
          resolve(false);
        }      
      });
    });
  }

  registro_empresa(data) {
    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/register',data)
      .subscribe(resp => {
        console.log(resp);

        if(resp["success"])
        {
          //si los datos son correctos, se guarda la informacion en el local storage
          localStorage.setItem('correo',JSON.stringify(data.email))
          resolve(true);
        }
        else
        {
          localStorage.clear();
          resolve(false);
        }      
      });
    });
  }
          
  getId = () => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.API_URL}/getidempresa/${this.storageService.getCorreo()}`)
      .subscribe(resp => {
        resolve(resp["idEmpresa"]);
      });
    });
    return promise;
  };

  addPostProducto = (data) => {
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/addProduct`,data)
      .subscribe(resp => {
        console.log(resp);
        resolve(resp);
      });
    });
  };

  addProduct = (name: string, price: number, amount: number) => {
    let promise = new Promise(resolve => {
      this.getId().then(id =>{
        const data = { name, price, amount, id}
        console.log(data);     
        this.addPostProducto(data).then(resp =>{
          console.log(resp);
          resolve(resp);
        })

      })      
    });
    return promise;
  }

  obtenerProductos() {
    return this.http.get(`${this.API_URL}/products`);
  }
}


