import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { ProfessoresComponent } from './professores/professores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'alunos', component: AlunosComponent},
  {path : 'alunosDetails/:id', component: AlunosFormsComponent},
  {path : 'alunosCreate', component: AlunosFormsComponent},
  {path : 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
