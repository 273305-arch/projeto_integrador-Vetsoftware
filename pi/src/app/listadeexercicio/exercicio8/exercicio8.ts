import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.scss',
})
export class Exercicio8 {
  nome: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;
  total: number = 300;

  calcularTotal(){
  this.total = (this.preco || 0) * (this.quantidade || 0);
  }
}
