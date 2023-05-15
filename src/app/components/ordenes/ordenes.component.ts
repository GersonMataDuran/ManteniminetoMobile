import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
})
export class OrdenesComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}

  //rasterar

  public listaOrdenes = [
    { NumOrden:'0000001', Linea: 'DJ2500', Equipo: 'EM1ENS01917', Departamento:'ENSA', Icono:"assets/icon/handGreen.png"},
    { NumOrden:'0000001', Linea: 'C1UC-FD', Equipo: 'CELDA-C1-FD', Departamento:'ENSA', Icono:"assets/icon/handYello.png" },
    { NumOrden:'0000001', Linea: 'LA', Equipo: 'EM1EST00001', Departamento:'PREN', Icono:"assets/icon/handRed.png"},
  ];

}
