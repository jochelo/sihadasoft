import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DiagnosticoSoporteComponent } from './diagnostico-soporte/diagnostico-soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DiagnosticoSoporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
