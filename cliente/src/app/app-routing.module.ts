import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticoSoporteComponent } from './diagnostico-soporte/diagnostico-soporte.component';

const routes: Routes = [
  {
    path: 'diagnostico-soporte',
    component: DiagnosticoSoporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
