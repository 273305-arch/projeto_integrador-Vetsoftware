import { Component, inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
    // Edite estes textos para identificar o software da equipe.
  nomeSistema = 'Projeto Integrador';
  usuario = 'Aluno exemplo';
  // Informação visual de exemplo: este modelo não implementa login.
  readonly telaPequena$ = inject(ReportingObserver)
    .observe('(max-width: 767px)')
    .pipe(map(result => result.matches), shareReplay({ bufferSize: 1, refCount: true }));
}
