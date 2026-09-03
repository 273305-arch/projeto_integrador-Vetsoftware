import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListadeexercicioRoutingModule } from './listadeexercicio-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';

@NgModule({
  declarations: [Exercicio1, Exercicio2],
  imports: [CommonModule, ListadeexercicioRoutingModule, FormsModule],
})
export class ListadeexercicioModule {}
