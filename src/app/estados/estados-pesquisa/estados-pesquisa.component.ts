import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import {EstadosService} from '../estados.service';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estados = [];

  nomeBusca: string;

  constructor(
    private service: EstadosService,
    private msg: MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar() {
    this.service.pesquisar({nome: this.nomeBusca})
    .then((dados) => {
      this.estados = dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(estado: any) {
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir ' + estado.nome + '?',
      accept: () => {
        this.excluir(estado);
      }
    });
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Categoria '+categoria.nome+' excluída'});
    });
  }

}
