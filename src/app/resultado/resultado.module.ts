import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ResultadoComponent } from './resultado.component';
import { TablaDosComponent } from './tabla-dos/tabla-dos.component';
import { TablaUnoComponent } from './tabla-uno/tabla-uno.component';

@NgModule({
  declarations: [
    ResultadoComponent,
    TablaUnoComponent,
    TablaDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule { }
