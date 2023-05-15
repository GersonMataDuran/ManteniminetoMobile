import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/home/index', icon: 'home' },
    { title: 'Cambiar Contraseña', url: '/atencion', icon: 'key' },
    { title: 'Cerrar Sesion', url: '/home/index', icon: 'lock-closed' },
  ];

  constructor() {}
}
