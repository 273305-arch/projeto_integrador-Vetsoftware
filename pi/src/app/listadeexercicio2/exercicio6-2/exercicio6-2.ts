import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6-2',
  standalone: false,
  templateUrl: './exercicio6-2.html',
  styleUrl: './exercicio6-2.scss',
})
export class Exercicio62 {
    nomesIniciais = ['Marcos', 'Alfredo', 'Anna', 'José'];
    nomes = [...this.nomesIniciais];

    removerUltimo(){
      this.nomes.pop();
    }
    limparLista(){
      this.nomes = [];
    }
    restaurarLista(){
      this.nomes = [...this.nomesIniciais];    
    }
}
