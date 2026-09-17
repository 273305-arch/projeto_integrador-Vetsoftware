import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto-module').then(n => n.ProdutoModule)
  },
  {
    path: 'lista de exercicios',
    loadChildren: () => import('./listadeexercicio/listadeexercicio-module').then(p => p.ListadeexercicioModule)
  },
  {
    path: 'lista de exercicios 2',
    loadChildren: () => import('./listadeexercicio2/listadeexercicio2-module').then(p => p.Listadeexercicio2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
