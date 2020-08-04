import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUnoComponent } from './tabla-uno/tabla-uno.component';
import { TablaDosComponent } from './tabla-dos/tabla-dos.component';
import { ResultadoComponent } from './resultado.component';

const routes: Routes = [
  {
    path: '',
    component: ResultadoComponent,
    children: [
      {
        path: '',
        redirectTo: 'tabla-uno',
        pathMatch: 'full'
      },
      {
        path: 'tabla-uno',
        component: TablaUnoComponent
      },
      {
        path: 'tabla-dos',
        component: TablaDosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ResultadoRoutingModule { }
