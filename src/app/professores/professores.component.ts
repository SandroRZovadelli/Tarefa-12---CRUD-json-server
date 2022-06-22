import { Component, OnInit } from '@angular/core';

import { EstudanteService } from './../shared/estudante.service';
import { MessageService } from './../shared/message.service';
import { Professor } from './../shared/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  novoProfessor: Professor = {} as Professor;
  professores: Professor[] = [];
  selectedProfessor?: Professor;

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
    this.messageService.add(`Professor ${professor.nome} selecionado!`);
  }

  getProfessores(): void {
    this.estudanteService.getProfessores()
      .subscribe(professores => {
        this.professores = professores;
        this.messageService.add('Professores encontrados!');
      });
  }

}
