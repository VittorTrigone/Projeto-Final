import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  delete(Aluno: Aluno) {
    throw new Error('Method not implemented.');
  }

  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAluno(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.url}/alunos`);
  }

  saveAluno(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(`${this.url}/alunos`, aluno);
  }

  updateAluno(aluno: Aluno): Observable<void>{
    return this.http.put<void>(`${this.url}/alunos/${aluno.id}`, aluno);
  }

  deleteAluno(aluno: Aluno): Observable<void>{
    return this.http.delete<void>(`${this.url}/alunos/${aluno.id}`);
  }

  getProfessor(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}/professores`);
  }

  saveProfessor(professor: Professor): Observable<Professor>{
    return this.http.post<Professor>(`${this.url}/professores`, professor);
  }

  updateProfessor(professor: Professor): Observable<void>{
    return this.http.put<void>(`${this.url}/professores/${professor.id}`, professor);
  }

  deleteProfessor(professor: Professor): Observable<void>{
    return this.http.delete<void>(`${this.url}/professores/${professor.id}`);
  }


  getDetails(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(`${this.url}/alunos/${id}`);
  }

}