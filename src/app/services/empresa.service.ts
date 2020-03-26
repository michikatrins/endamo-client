import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'https://endamo-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getData(email){
    return this.http.get(`${this.url}/empresa/edit/${email}`);
  }

  updateData(enterprise){
    return this.http.put(`${this.url}/empresa/update`,enterprise)
  }

}
