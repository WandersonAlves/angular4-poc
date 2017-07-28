import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './routes/RoutesDefinition';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

import { MaterialModule } from './components/material.module';

// NOTE: Required for Angular Material Gestures
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
