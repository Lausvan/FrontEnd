import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import {EstadosPesquisaComponent} from './estados-pesquisa/estados-pesquisa.component';
import {EstadosCadastroComponent} from './estados-cadastro/estados-cadastro.component';
import {EstadosService} from '../estados/estados.service';

@NgModule({
  declarations: [
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers: [
    EstadosService,
    MessageService
  ]
})
export class EstadosModule { }
