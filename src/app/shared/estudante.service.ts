import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estudante } from './estudante';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  baseUrl = 'http://localhost:3000';
  estudanteUrl = this.baseUrl + '/estudantes';
  professorUrl = this.baseUrl + '/professores';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getEstudantes(): Observable<Estudante[]> {
    return this.httpClient.get<Estudante[]>(this.estudanteUrl);
  }

  getProfessores(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(this.professorUrl);
  }

  create(product: any, type: string): Observable<any> {
    if (type === 'estudante') {
      return this.httpClient.post<any>(this.estudanteUrl, JSON.stringify(product), this.httpOptions);
    }
    return this.httpClient.post<any>(this.professorUrl, JSON.stringify(product), this.httpOptions);
  }

  update(product: any, type: string): Observable<any> {
    if (type === 'estudante') {
      return this.httpClient.put<any>(this.estudanteUrl + `/${product.id}`, JSON.stringify(product), this.httpOptions);
    }
    return this.httpClient.put<any>(this.professorUrl + `/${product.id}`, JSON.stringify(product), this.httpOptions);
  }

  remove(id: number, type: string): Observable<any> {
    if (type === 'estudante') {
      return this.httpClient.delete<any>(this.estudanteUrl + `/${id}`, this.httpOptions);
    }
    return this.httpClient.delete<any>(this.professorUrl + `/${id}`, this.httpOptions);

  }

}