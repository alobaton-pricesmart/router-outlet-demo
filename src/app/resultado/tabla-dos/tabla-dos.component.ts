import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-dos',
  templateUrl: './tabla-dos.component.html'
})
export class TablaDosComponent {

  constructor(private readonly router: Router) {

  }

  public irATablaUno() {
    this.router.navigate([
      '/',
      'resultado',
      'tabla-uno'
    ]);
  }
}
