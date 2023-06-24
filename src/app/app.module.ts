import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresFormsComponent } from './professores-forms/professores-forms.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TermosPipe } from './termos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    ProfessoresFormsComponent,
    AlunosComponent,
    AlunosFormsComponent,
    HomeComponent,
    HeaderComponent,
    TermosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
