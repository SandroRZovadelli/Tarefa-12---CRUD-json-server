import { Component, Input, OnInit } from '@angular/core';

import { Estudante } from './../../shared/estudante';
import { EstudanteService } from './../../shared/estudante.service';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {

  @Input() estudante?: Estudante;

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit(): void {
  }

  save(estudante: Estudante): void {
    this.estudanteService.create(estudante, 'estudante').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  edit(estudante: Estudante): void {
    this.estudanteService.update(estudante, 'estudante').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  remove(id: number): void {
    this.estudanteService.remove(id, 'estudante').subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

}
