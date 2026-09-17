import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss',
})
export class Exercicio9 {
  estoque: number = 1;
  nome: string = 'string';

  diminuir(){
    if (this.estoque > 0){
    this.estoque--;
  }
}
  aumentar(){
    this.estoque++;
  }
}
