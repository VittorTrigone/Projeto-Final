import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  Alunos: Aluno[] = [];
  Aluno: Aluno = {} as Aluno;
  isEditing: boolean = false;

  constructor(private DadosService: DadosService) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.DadosService.getAluno().subscribe({
      next: (data) => (this.Alunos = data),
    });
  }

  onCleanEvent() {
    this.isEditing = false;
  }

  onSaveEvent(Aluno: Aluno) {
    if (this.isEditing) {
      this.DadosService.updateAluno(Aluno).subscribe({
        next: () => {
          this.loadAlunos();
          this.isEditing = false;
        },
      });
    } else {
      this.DadosService.saveAluno(Aluno).subscribe({
        next: (data) => {
          this.Alunos.push(data);
        },
      });
    }
  }

  edit(Aluno: Aluno) {
    this.Aluno = Aluno;
    this.isEditing = true;
  }

  delete(Aluno: Aluno) {
    this.DadosService.deleteAluno(Aluno).subscribe({
      next: () => this.loadAlunos(),
    });
  }
}