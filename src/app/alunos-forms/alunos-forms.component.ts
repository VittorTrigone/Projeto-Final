import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../aluno';
import { DadosService } from '../dados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-forms',
  templateUrl: './alunos-forms.component.html',
  styleUrls: ['./alunos-forms.component.css']
})
export class AlunosFormsComponent implements OnInit {
  formGroupAluno: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private dadosService: DadosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroupAluno = formBuilder.group({
      id: [''],
      nome_est: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAlunoById(id);
  }

  getAlunoById(id: number) {
    this.dadosService.getDetails(id).subscribe({
      next: data => {
        this.formGroupAluno.setValue(data);
        this.isEditing = true;
      }
    })
  }

  save() {
    this.submitted = true;
    if (this.formGroupAluno.valid) {
      if (this.isEditing) {
        this.dadosService.updateAluno(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['alunos'])
          }
        })
      }
      else {
        this.dadosService.saveAluno(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['alunos'])
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['alunos'])
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
