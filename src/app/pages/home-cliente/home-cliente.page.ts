import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  productos: any = [];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.service.obtenerProductos().subscribe(
      res => {
        this.productos = res
      },
      err => { }
    )
  }

  ver(indice) {
    console.log("hola " + indice);
  }
}
