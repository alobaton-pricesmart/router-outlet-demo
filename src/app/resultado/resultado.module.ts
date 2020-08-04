import { NgModule } from '@angular/core';


import { ResultadoComponent } from './resultado.component';
import { TablaDosComponent } from './tabla-dos/tabla-dos.component';
import { TablaUnoComponent } from './tabla-uno/tabla-uno.component';
import { ResultadoRoutingModule } from './resltado.routing';

@NgModule({
  declarations: [
    ResultadoComponent,
    TablaUnoComponent,
    TablaDosComponent
  ],
  imports: [
    ResultadoRoutingModule
  ],
  providers: []
})
export class ResultadoModule { }
