import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /*
    Para correr en navegadores, instalar extension:
    https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
    para que funcionen los servicios
  */

  token = null;

  constructor(private http: HttpClient, 
              private storage: Storage) { }            

  login(data) {

    return new Promise(resolve => {
      this.http.post('http://endamo-api.herokuapp.com/login',data)
      .subscribe(resp => {
          
        if(resp[0])
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
        console.log(resp);

        if(resp[0])
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

        if(resp[0])
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
   
}
