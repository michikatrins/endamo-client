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
    this.service.addProduct(name.value,price.value,amount.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home-empresa']);
      },
      err => console.log(err)
    )
  }

}
