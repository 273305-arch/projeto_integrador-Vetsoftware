import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListadeexercicioRoutingModule } from './listadeexercicio-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';

@NgModule({
  declarations: [Exercicio1],
  imports: [CommonModule, ListadeexercicioRoutingModule, FormsModule] ,
})
export class ListadeexercicioModule {}
