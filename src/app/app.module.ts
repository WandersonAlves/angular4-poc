import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './routes/RoutesDefinition';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainContainerComponent } from './views/main-container/main-container.component';

import { AnaliseTurmaComponent } from './views/analise-turma/analise-turma.component';
import { AnaliseDisciplinaComponent } from './views/analise-disciplina/analise-disciplina.component';
// NOTE: All components that'll be used by application
// TODO: Transform this in modules
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContainerComponent,
    AnaliseTurmaComponent,
    AnaliseDisciplinaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
