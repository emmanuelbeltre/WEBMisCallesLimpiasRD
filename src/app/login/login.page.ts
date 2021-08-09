import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { DatosnecesarioService } from '../Services/datosnecesario.service';
import { LoginService } from '../Services/Login.service';
import {  MenuController } from '@ionic/angular';
import { Router } from "@angular/router"; 
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { NavController} from '@ionic/angular';

import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { InicioMapaPage } from '../inicio-mapa/inicio-mapa.page';
import { Variableglobal } from '../variableglobal';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario;
  clave;
  public datos:any;
  isActiveToggleTextPassword: Boolean = true;

  constructor(
    public servicio2:DatosnecesarioService, 
    public menuCtrl: MenuController,
    public servicio:LoginService,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private router:Router,
    public navCtrl: NavController
  ) 
  { 

  }

  ngOnInit() {
  }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Usuario o Contraseña Incorrecta.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  
    onload()
    {
      try {
        this.servicio2.obtenerDatosNecesariosAyunta(this.usuario).subscribe((data)=>{
          this.datos = data;
          // console.log(data)
         
        },
        (error)=>{
          // alert(error);
          alert("Error: " + error.message)
  
        });
      } 
      catch (error) {
        alert("Error: " + error.message)
      }
     
    }
  onVerificarPantallas(){
    
  }
  onIniciarSesion(){
    this.onload();

    try
    {

        let usuario,clave, respuestas;
        usuario = this.usuario;
        clave = this.clave;
        this.servicio.IniciarSesion(usuario,clave).subscribe((data)=>{
          this.datos = data;
          if (this.datos.respuesta == "OK")
          {
            
            Variableglobal.cod_usuario = this.datos.cod_usuario;
            Variableglobal.usuario = usuario;
            Variableglobal.correo_Usuario = this.datos.correo_Usuario;
            Variableglobal.Rnc_Usuario = this.datos.Rnc_Usuario;
            Variableglobal.telefono_Usuario = this.datos.telefono_Usuario;
            Variableglobal.clave = this.datos.clave;
            Variableglobal.cod_ayuntamiento = this.datos.cod_ayuntamiento;
            console.log(this.datos)
            
            this.menuCtrl.enable(true);
           
            this.router.navigate(['/inicio-mapa']);
          }
          else
          {
            this.ErrorAlert()
          }
         
        },
        (error)=>{
          alert("Error: " + error.message)
          alert("Error: " + error.message)
        });
    }
    catch(ex)
    {
      alert("Error: " + ex.message)
    }
  }
 
  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}

}
