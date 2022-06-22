import { Component, Input, OnInit } from '@angular/core';

import { EstudanteService } from './../../shared/estudante.service';
import { Professor } from './../../shared/professor';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

  @Input() professor?: Professor;

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit(): void {
  }

  save(professor: Professor): void {
    this.estudanteService.create(professor, 'professor').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  edit(professor: Professor): void {
    this.estudanteService.update(professor, 'professor').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  remove(id: number): void {
    this.estudanteService.remove(id, 'professor').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

}
