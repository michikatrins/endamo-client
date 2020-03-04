import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../../services/producto-service.service'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  

  constructor(private service: ServiceService, private crud: ProductoServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  edit: boolean = false;
  producto: any = [];
  empresa = 2;
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.crud.getProducto(params.id)
        .subscribe(
          res => {
            this.producto = res[0];
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveProduct(name, price, amount) {
    //Testing
    let id;
    this.service.getID().subscribe(
      res => {
        console.log(res);
        id = res;
      },
      err => {
        console.log(err);
      }
    )
    this.service.addProduct(name.value, price.value, amount.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home-empresa']);
      },
      err => console.log(err)
    )
  }

  updateProducto(name, price, amount) {
    this.crud.updateProducto(this.producto.idProducto, name.value, price.value, amount.value, this.empresa)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/lista_productos']);
        },
        err => console.log(err)
      )
  }

}
