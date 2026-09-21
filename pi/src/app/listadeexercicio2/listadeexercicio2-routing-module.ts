import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio12 } from './exercicio1-2/exercicio1-2';
import { Exercicio22 } from './exercicio2-2/exercicio2-2';
import { Exercicio32 } from './exercicio3-2/exercicio3-2';
import { Exercicio42 } from './exercicio4-2/exercicio4-2';
import { Exercicio52 } from './exercicio5-2/exercicio5-2';
import { Exercicio62 } from './exercicio6-2/exercicio6-2';
import { Exercicio72 } from './exercicio7-2/exercicio7-2';
import { Exercicio82 } from './exercicio8-2/exercicio8-2';
import { Exercicio92 } from './exercicio9-2/exercicio9-2';
import { Exercicio102 } from './exercicio10-2/exercicio10-2';
import { Exercicio112 } from './exercicio11-2/exercicio11-2';
import { Exercicio122 } from './exercicio12-2/exercicio12-2';
import { Exercicio132 } from './exercicio13-2/exercicio13-2';
import { Exercicio142 } from './exercicio14-2/exercicio14-2';

const routes: Routes = [
  {
    path: 'exercicio1-2', component: Exercicio12
  },
  {
    path: 'exercicio2-2', component: Exercicio22
  },
  {
    path: 'exercicio3-2', component: Exercicio32
  },
  {
    path: 'exercicio4-2', component: Exercicio42
  },
  {
    path: 'exercicio5-2', component: Exercicio52
  },
  {
    path: 'exercicio6-2', component: Exercicio62
  },
  {
    path: 'exercicio7-2', component: Exercicio72
  },
  {
    path: 'exercicio8-2', component: Exercicio82
  },
  {
    path: 'exercicio9-2', component: Exercicio92
  },
  {
    path: 'exercicio10-2', component: Exercicio102
  },
  {
    path: 'exercicio11-2', component: Exercicio112
  },
  {
    path: 'exercicio12-2', component: Exercicio122
  },
  {
    path: 'exercicio13-2', component: Exercicio132
  },
  {
    path: 'exercicio14-2', component: Exercicio142
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listadeexercicio2RoutingModule {}
