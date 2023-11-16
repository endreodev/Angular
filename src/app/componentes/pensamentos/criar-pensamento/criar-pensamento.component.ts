import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
[x: string]: any;

  pensamento: Pensamento = {
    conteudo: '',
    autoria:'',
    modelo:'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private route: Router
    ){}

  criarPensamento(){
     this.service.criar(this.pensamento).subscribe(()=>{
      this.route.navigate(['/listarPensamento'])
     });
  }

  cancelar(){

  }


  
}
