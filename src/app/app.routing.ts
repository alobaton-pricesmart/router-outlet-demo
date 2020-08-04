import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resultado',
    pathMatch: 'full'
  },
  {
    path: 'resultado',
    loadChildren: () => import('./resultado/resultado.module').then(m => m.ResultadoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
