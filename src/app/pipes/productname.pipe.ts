import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'productname'
})
export class ProductnamePipe implements PipeTransform {

  transform( arreglo: Producto[],
    texto: string ): Producto[] {

    if ( texto === '' ) {
    return arreglo;
    }

    texto = texto.toLowerCase();


    return arreglo.filter( item => {
    return item.nombre.toLowerCase()
        .includes( texto );
    });

  }

}
