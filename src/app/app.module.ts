import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './routes/RoutesDefinition';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

import { MaterialModule } from './components/material.module';

// NOTE: Required for Angular Material Gestures
import 'hammerjs';
import { MainContainerComponent } from './views/main-container/main-container.component';
import { EstatisticaContainerComponent } from './views/estatistica-container/estatistica-container.component';
import { MensagemContainerComponent } from './views/mensagem-container/mensagem-container.component';

// NOTE: All components that'll be used by application
// TODO: Transform this in modules
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContainerComponent,
    EstatisticaContainerComponent,
    MensagemContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
