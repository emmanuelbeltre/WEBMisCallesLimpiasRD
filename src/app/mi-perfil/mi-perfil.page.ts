import { Component, OnInit } from '@angular/core';
import { Variableglobal } from '../variableglobal';
import { AlertController } from '@ionic/angular';
import { GuardardatosperfilService } from '../Services/guardardatosperfil.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  cod_usuario:any;
  nombre_usuario:any;
  correo_Usuario:any;
  cedula_usuario:any;
  telefono_Usuario:any;
  clave:any;
  public datos:any;
  isActiveToggleTextPassword: Boolean = true;


  txt_correo_Usuario: string = Variableglobal.correo_Usuario;
  txt_Telefono_Usuario: string = Variableglobal.telefono_Usuario;
  txt_Cedula_Usuario: string = Variableglobal.cedula_usuario;
  txt_contrasena: string = Variableglobal.clave;
  lbl_usuario: string = Variableglobal.nombre_usuario;
  lbl_usuario2: string = Variableglobal.cod_usuario;


  constructor(public servicio:GuardardatosperfilService, public alertController: AlertController) { 
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.nombre_usuario; 
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.cedula_usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
  }

  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.nombre_usuario;
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.cedula_usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
  }
async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se pudieron actualizar los datos.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async SuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Enhorabuena!',
      message: 'Se han actualizado los datos de tu perfil.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  
  OnGuardarPerfil(){
    this.servicio.UDatosPerfilUsuario(Variableglobal.nombre_usuario,this.txt_correo_Usuario,this.txt_Cedula_Usuario,this.txt_contrasena,this.txt_Telefono_Usuario).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.SuccessAlert();
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
  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;

}
public getType() {
  return this.isActiveToggleTextPassword ? 'password' : 'text';
}
}
