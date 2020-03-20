import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto.page';
import { Producto } from 'src/app/models/producto.model';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  nombre: string = localStorage.getItem('nombre') || 'usuario';
  productos: Producto[] = [];

  constructor(
    private conexion: ConexionService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.conexion.obtenerProductos();
    this.conexion.productos$.subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
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
