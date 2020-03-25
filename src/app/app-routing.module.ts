import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slides', pathMatch: 'full' },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then(m => m.SlidesPageModule)
  },
  {
    path: 'registro/:id',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./pages/home-cliente/home-cliente.module').then(m => m.HomeClientePageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path: 'lista_productos',
    loadChildren: () => import('./pages/me-productos/me-productos.module').then( m => m.MeProductosPageModule)
  },
  {
    path: 'producto/editar/:id',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path: 'cargamasiva',
    loadChildren: () => import('./pages/cargamasiva/cargamasiva.module').then( m => m.CargamasivaPageModule)
  },
  {
    path: 'modificar-usuario',
    loadChildren: () => import('./pages/modificar-usuario/modificar-usuario.module').then( m => m.ModificarUsuarioPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
