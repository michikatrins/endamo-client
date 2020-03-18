import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ModalController } from '@ionic/angular';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto.page';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  productos: Producto[] = [];
  ruta: string = '/assets/img/img.png';

  constructor(
    private service: ServiceService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.service.obtenerProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res
      },
      err => { }
    )
  }

  async ver(indice: number) {
    const modal = await this.modalController.create({
      component: DetalleProductoPage,
      componentProps: {
        'producto': this.productos[indice]
      }
    });
    return await modal.present();
  }

}
