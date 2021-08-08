import { Component, OnInit } from '@angular/core';
import { OlvidemicontrasenaService } from '../Services/olvidemicontrasena.service';
import { AlertController } from '@ionic/angular';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { empty } from 'rxjs';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-olvide-mi-contrasena',
  templateUrl: './olvide-mi-contrasena.page.html',
  styleUrls: ['./olvide-mi-contrasena.page.scss'],
})
export class OlvideMiContrasenaPage implements OnInit {
  clave_nueva;
  result = '';
  public datos:any;
  email;

  constructor(
    public menuCtrl: MenuController,
    public servicio:OlvidemicontrasenaService,
    public alertController: AlertController
  ) { }
  
  ngOnInit() {
  
  }

  async SuccesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña Restablecida con Exito',
      message: 'Su Contraseña es: ' + this.datos.clave,
      buttons: ['OK']
    });
    await alert.present();
  }

  async EmailVacio() {
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Correo Incorrecto',
      message: 'Debe ingresar un correo para poder realizar el cambio de contraseña',
      buttons: ['OK']
    });
    await alert.present();
    }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se pudo restablecer la contraseña',
      buttons: ['OK']
    });
    await alert.present();
  }

  async LlenarCamposAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Por favor llene los campos necesarios',
      buttons: ['OK']
    });
    await alert.present();
  }

   
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  

  onOlvideMiContrasena(){

    let emailContenido= ((document.getElementById("emailContenido") as HTMLInputElement).value);

    if (emailContenido.length==0){
      this.EmailVacio();
      
      return;
    }
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = 6;
    for (let i = 0; i < charactersLength; i++) {
       this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   
    let email,clave_nueva;
    email = this.email;
    clave_nueva = this.email;
    this.servicio.UContrasenaOlvidada(email,this.result).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.SuccesAlert();
        this.email = null;
      }
      else
      {
        this.ErrorAlert();
      }
    },
    (error)=>{
      this.ErrorAlert();
    });
  }
}
