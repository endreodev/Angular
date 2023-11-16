import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id:0,
    conteudo: 'Ainda não ha Pensamentos Para exibir! Seja o primeiro a deixar uma poesia de sua altoria.',
    autoria: 'Endreo',
    modelo: 'modelo1'
  }

  larguraPensamento(): string {
    
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
