import { Component, OnInit } from '@angular/core';

import { EstudanteService } from '../shared/estudante.service';
import { Estudante } from './../shared/estudante';
import { MessageService } from './../shared/message.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  
  estudantes: Estudante[] = [];
  selectedEstudante?: Estudante;
  novoEstudante: Estudante = {} as Estudante;

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
    this.messageService.add(`Estudante ${estudante.nome} selecionado!`);
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => {
        this.estudantes = estudantes;
        this.messageService.add('Alunos encontrados!');
      });
  }
  
}
