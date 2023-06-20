import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  Professores: Professor[] = [];
  Professor: Professor = {} as Professor;
  isEditing: boolean = false;

  constructor(private DadosService: DadosService) { }

  ngOnInit(): void {
    this.loadProfessores();
  }

  loadProfessores() {
    this.DadosService.getProfessor().subscribe({
      next: (data) => (this.Professores = data),
    });
  }

  onCleanEvent() {
    this.isEditing = false;
  }

  onSaveEvent(Professor: Professor) {
    if (this.isEditing) {
      this.DadosService.updateProfessor(Professor).subscribe({
        next: () => {
          this.loadProfessores();
          this.isEditing = false;
        },
      });
    } else {
      this.DadosService.saveProfessor(Professor).subscribe({
        next: (data) => {
          this.Professores.push(data);
        },
      });
    }
  }

  edit(Professor: Professor) {
    this.Professor = Professor;
    this.isEditing = true;
  }

  delete(Professor: Professor) {
    this.DadosService.deleteProfessor(Professor).subscribe({
      next: () => this.loadProfessores(),
    });
  }
}