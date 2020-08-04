import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-uno',
  templateUrl: './tabla-uno.component.html'
})
export class TablaUnoComponent {

  constructor(private readonly router: Router) {

  }

  public irATablaDos() {
    this.router.navigate([
      '/',
      'reaultado',
      'tabla-dos'
    ]);
  }
}
