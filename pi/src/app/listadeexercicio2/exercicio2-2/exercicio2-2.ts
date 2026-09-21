import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2-2',
  standalone: false,
  templateUrl: './exercicio2-2.html',
  styleUrl: './exercicio2-2.scss',
})
export class Exercicio22 {
  usuarioLogado = false;

  loginCond(){
    this.usuarioLogado != this.usuarioLogado;
  }
}
