import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { MainContainerComponent } from '../views/main-container/main-container.component';
import { AnaliseDisciplinaComponent } from '../views/analise-disciplina/analise-disciplina.component';
import { AnaliseTurmaComponent } from '../views/analise-turma/analise-turma.component';

// NOTE: We import component to use as base components

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainContainerComponent,
    children: [
      {
        path: 'analise-disciplina',
        component: AnaliseDisciplinaComponent
      },
      {
        path: 'analise-turma',
        component: AnaliseTurmaComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
