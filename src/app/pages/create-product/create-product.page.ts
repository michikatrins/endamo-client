import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  saveProduct(name,price,amount){
    // servicio
    console.log(name.value,price.value,amount.value);
    this.router.navigate(['/home-empresa']);
  }

}
