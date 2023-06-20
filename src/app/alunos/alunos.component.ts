import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Aluno } from '../aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  Alunos: Aluno[] = [];

  constructor(
    private DadosService: DadosService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.DadosService.getAluno().subscribe({
      next: (data) => (this.Alunos = data),
    });
  }

  create() {
    this.router.navigate(['alunosCreate'])
  }

  edit(Aluno: Aluno) {
    this.router.navigate(['alunosDetails', Aluno.id])
  }

  delete(Aluno: Aluno) {
    this.DadosService.deleteAluno(Aluno).subscribe({
      next: () => this.loadAlunos(),
    });
  }
}