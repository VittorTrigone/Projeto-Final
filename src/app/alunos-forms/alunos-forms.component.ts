import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos-forms',
  templateUrl: './alunos-forms.component.html',
  styleUrls: ['./alunos-forms.component.css']
})
export class AlunosFormsComponent implements OnChanges {
  @Input() Aluno: Aluno = {} as Aluno;
  @Output() saveEvent = new EventEmitter<Aluno>();
  @Output() cleanEvent = new EventEmitter<void>();
  formGroupAluno: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupAluno = formBuilder.group({
      id: [''],
      nome_est: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.Aluno && this.Aluno.id) {
      this.formGroupAluno.setValue(this.Aluno);
    }
  }

  save() {
    this.submitted = true;
    if (this.formGroupAluno.valid) {
      this.saveEvent.emit(this.formGroupAluno.value);
      this.formGroupAluno.reset();
      this.submitted = false;
    }
  }

  clean() {
    this.cleanEvent.emit();
    this.formGroupAluno.reset();
    this.submitted = false;

  }

  get nome_est(): any {
    return this.formGroupAluno.get('nome_est');
  }
  
  get email(): any {
    return this.formGroupAluno.get('email');
  }
  
  get cpf(): any {
    return this.formGroupAluno.get('cpf');
  }
  
  get endereco(): any {
    return this.formGroupAluno.get('endereco');
  }
  
}
