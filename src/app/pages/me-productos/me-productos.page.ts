import { Component, OnInit, HostBinding } from '@angular/core';
import { IonCard, IonGrid } from '@ionic/angular';
import { ProductoServiceService } from '../../services/producto-service.service';
@Component({
  selector: 'app-me-productos',
  templateUrl: './me-productos.page.html',
  styleUrls: ['./me-productos.page.scss'],
})
export class MeProductosPage implements OnInit {
  productos: any = [];
  constructor(private crud: ProductoServiceService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {

    this.crud.listarProducto().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  deleteProducto(id: string) {

    this.crud.deleteProducto(id)
      .subscribe(
        res => {
          this.getProductos();
        },
        err => console.log("error al eliminar" + err)
      )
  }

}
