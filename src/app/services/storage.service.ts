import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  correo = '';

  constructor(private http: HttpClient) { }

  getCorreo(){
    return JSON.parse(localStorage.getItem('correo'))
  }
}
