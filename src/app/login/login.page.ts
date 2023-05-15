import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginservService } from '../services/loginserv.service'

interface LoginResponse {
  message: string;
  isSuccess: boolean;
  errors: string;
  expireDate: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = '';
  pass: string = '';

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private router: Router,
    private loginserv: LoginservService
  ) { }

  ngOnInit() {
  }

  validaDatos() {
    let datos = {
      Email: this.correo,
      Password: this.pass,
      RememberMe: true
    };

    // this.validaUsuario(datos);

    return this.loginserv.login(datos);

    if(this.loginserv.isLoggedIn == false){
      this.alertaLog("Error en los datos enviados, validar correo y contraseña");
    }
    else{
      if(this.loginserv.datos.isSuccess){
        this.router.navigate(['/home/index']);
      }
      else{
        this.alertaLog(this.loginserv.datos.message);
      }
    }
  }

  // validaUsuario(data: any) {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   this.http.post<LoginResponse>('http://est03des/RestApiHorasExtras/api/auth/login', JSON.stringify(data), { headers })
  //     .subscribe(
  //       (response) => {
  //         if (response.isSuccess) {
            
  //         }
  //         else {
  //           this.alertaLog(response.message)

  //         }
  //       },
  //       (error) => {
          
  //       }
  //     );
  // }
  async alertaLog(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
