import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { MainContainerComponent } from '../views/main-container/main-container.component';
import { EstatisticaContainerComponent } from '../views/estatistica-container/estatistica-container.component';
import { MensagemContainerComponent } from '../views/mensagem-container/mensagem-container.component';

// NOTE: We import component to use as base components

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainContainerComponent,
    children: [
      {
        path: 'estatistica',
        component: EstatisticaContainerComponent
      },
      {
        path: 'mensagem',
        component: MensagemContainerComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
