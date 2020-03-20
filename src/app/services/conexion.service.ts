import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConsumoService } from './consumo.service';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private _productosSource = new Subject<Producto[]>();
  public productos$ = this._productosSource.asObservable();

  constructor(private consumo: ConsumoService) { }

  obtenerProductos() {
    this.consumo
      .obtenerProductos()
      .subscribe((respuesta: Producto[]) => {
        this._productosSource.next(respuesta);
      });
  }
}
