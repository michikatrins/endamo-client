import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  setProducts(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getProducts() {
  	return JSON.parse(localStorage.getItem('cart'));
  }

  isNotEmpty(){
    if(localStorage.getItem('cart')!=undefined) return true;
    return false;
  }

  flush(){
    localStorage.setItem('cart', JSON.stringify([]));
  }
}
