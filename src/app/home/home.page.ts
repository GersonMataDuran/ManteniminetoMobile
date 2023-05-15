import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public home!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

    //rasterar

    public listaOrdenes = [
      { NumOrden:'0000001', Linea: 'DJ2500', Equipo: 'EM1ENS01917', Departamento:'ENSA', Icono:"assets/icon/handGreen.png"},
      { NumOrden:'0000001', Linea: 'C1UC-FD', Equipo: 'CELDA-C1-FD', Departamento:'ENSA', Icono:"assets/icon/handYello.png" },
      { NumOrden:'0000001', Linea: 'LA', Equipo: 'EM1EST00001', Departamento:'PREN', Icono:"assets/icon/handRed.png"},
    ];


    isLiked = false;

    toggleLike() {
      this.isLiked = !this.isLiked;
    }  

}
