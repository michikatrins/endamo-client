import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../services/producto-service.service';
@Component({
  selector: 'app-me-productos',
  templateUrl: './me-productos.page.html',
  styleUrls: ['./me-productos.page.scss'],
})
export class MeProductosPage implements OnInit {

  constructor(private crud: ProductoServiceService) { }

  ngOnInit() {

    this.crud.listarProducto().subscribe(

      res => {

        console.log(res);
      },

      err => {
        console.log("estoy aqui");
        console.log(err)
      }
    );
  }

}
