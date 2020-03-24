import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'productprice'
})
export class ProductpricePipe implements PipeTransform {

  transform( arreglo: Producto[],
    texto: string ): Producto[] {

    if ( texto === '' ) {
    return arreglo;
    }

    texto = texto.toLowerCase();


    return arreglo.filter( item => {
    return item.precio.toString()
        .includes( texto );
    });

  }

}
