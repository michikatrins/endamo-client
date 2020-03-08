import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../../services/producto-service.service'
import { ServiceService } from 'src/app/services/service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  

  constructor(private service: ServiceService, 
              private crud: ProductoServiceService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute,
              public toastController: ToastController) { }
  edit: boolean = false;
  producto: any = [];

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

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  saveProduct(name, price, amount) {
    this.service.addProduct(name.value,price.value,amount.value).then( resp => {
      this.presentToast(resp["Response:"]);
      this.router.navigate(['/lista_productos']);
    })
  }

  updateProducto(name, price, amount) {
    this.crud.updateProducto(this.producto.idProducto, name.value, price.value, amount.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/lista_productos']);
        },
        err => console.log(err)
      )
  }

}
