import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.page.html',
  styleUrls: ['./atencion.page.scss'],
})
export class AtencionPage implements OnInit {

  constructor(public alertController: AlertController) { }

  textAlert = 'Solo podrás regresar esta orden al pool ANTES de confirmar que estás en la línea ';

  ngOnInit() {
  }

  async alertaRojo() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Funciona Boton Rojo',
      buttons: ['OK']
    });  
    await alert.present();
  }
  
  async alertaReturn() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Funciona Boton Return',
      buttons: ['OK']
    });  
    await alert.present();
  }

}
