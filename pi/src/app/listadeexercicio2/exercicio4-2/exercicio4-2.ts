import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4-2',
  standalone: false,
  templateUrl: './exercicio4-2.html',
  styleUrl: './exercicio4-2.scss',
})
export class Exercicio42 {
  nomeProduto = 'Teclado'; 
  quantidadeEstoque = 5; 

  aumentarUnidade(){
    this.quantidadeEstoque++;
  }
  removerUnidade(){
    if (this.quantidadeEstoque > 0) {
    this.quantidadeEstoque--;
    }
  }
}
