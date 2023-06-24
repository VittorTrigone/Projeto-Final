import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores-forms',
  templateUrl: './professores-forms.component.html',
  styleUrls: ['./professores-forms.component.css']
})
export class ProfessoresFormsComponent implements OnChanges {
  @Input() Professor: Professor = {} as Professor;
  @Output() saveEvent = new EventEmitter<Professor>();
  @Output() cleanEvent = new EventEmitter<void>();
  formGroupProfessor: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupProfessor = formBuilder.group({
      id: [''],
      nome_est: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      termos: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.Professor && this.Professor.id) {
      this.formGroupProfessor.setValue(this.Professor);
    }
  }

  save() {
    this.submitted = true;
    if (this.formGroupProfessor.valid) {
      this.saveEvent.emit(this.formGroupProfessor.value);
      this.formGroupProfessor.reset();
      this.submitted = false;
    }
  }

  clean() {
    this.cleanEvent.emit();
    this.formGroupProfessor.reset();
    this.submitted = false;

  }

  get nome_est(): any {
    return this.formGroupProfessor.get('nome_est');
  }
  
  get email(): any {
    return this.formGroupProfessor.get('email');
  }
  
  get cpf(): any {
    return this.formGroupProfessor.get('cpf');
  }
  
  get endereco(): any {
    return this.formGroupProfessor.get('endereco');
  }
  
}
