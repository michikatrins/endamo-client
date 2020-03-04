import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  // private API_URL: string = 'http://localhost:3000'

  token = null;

  constructor(private http: HttpClient, 
              private storage: Storage) { }            

  login(data) {

    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/login',data)
      .subscribe(resp => {

        console.log(resp);
          
        if(resp["auth"])
        {
          //si los datos son correctos, se guarda la informacion en el local storage
          this.storage.set('correo',data.email);
          resolve(true);
        }
        else
        {
          this.token = null;
          this.storage.clear();
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
          this.storage.set('correo',data.email);
          resolve(true);
        }
        else
        {
          this.token = null;
          this.storage.clear();
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
          this.storage.set('correo',data.email);
          resolve(true);
        }
        else
        {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }      
      });
    });
  }
            
  getID(){
    return this.http.get(`${this.API_URL}/getID/${localStorage.getItem('correo')}`);
  }


  addProduct(name: string, price: number, amount: number){
    const id = this.getID();
    const data = {name, price, amount,id};
    return this.http.post(`${this.API_URL}/addProduct`,data);
  }


  }
   

