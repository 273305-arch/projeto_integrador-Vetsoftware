import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3-2',
  standalone: false,
  templateUrl: './exercicio3-2.html',
  styleUrl: './exercicio3-2.scss',
})
export class Exercicio32 {
  idade = 0;

  aumentarIdade(){
    this.idade++;
  }
  diminuirIdade(){
    if (this.idade > 0){
    this.idade--;
  }
  }
}
