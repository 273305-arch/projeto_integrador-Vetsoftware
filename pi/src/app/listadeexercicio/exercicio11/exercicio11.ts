import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss',
})
export class Exercicio11 {
  nome: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;
  total: number = 300;
  sacola: string = '';

  calcularTotal(){
  this.total = (this.preco || 0) * (this.quantidade || 0);
  }
  diminuirQuantidade(){
    if(this.quantidade > 1)
    this.quantidade--;
    this.calcularTotal;
  }
  aumentarQuantidade(){
    this.quantidade++;
    this.calcularTotal;
  }
  adicionarSacola(){
    this.sacola = `${this.quantidade} x {this.nome} adicionado a sacola`;
  }
}
