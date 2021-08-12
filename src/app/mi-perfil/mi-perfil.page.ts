import { Component, OnInit } from '@angular/core';
import { Variableglobal } from '../variableglobal';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
  foto_usuario:any;
  foto_:any;
  clave:any;
  public datos:any;
  isActiveToggleTextPassword: Boolean = true;
  currentImage: any;
  fotoenhtml: any;
  splitted: any;
  currentImage2: any;
  fotohtml: any;

  txt_correo_Usuario: string = Variableglobal.correo_Usuario;
  txt_Telefono_Usuario: string = Variableglobal.telefono_Usuario;
  txt_Cedula_Usuario: string = Variableglobal.Rnc_Usuario;
  txt_contrasena: string = Variableglobal.clave;
  lbl_usuario: string = Variableglobal.usuario;
  lbl_usuario2: string = Variableglobal.cod_usuario;

  constructor(public servicio:GuardardatosperfilService, public alertController: AlertController,private camera: Camera) { 
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.usuario; 
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.Rnc_Usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
  }


  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.usuario;
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.Rnc_Usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
    
    this.obtenerFotoPerfil(this.cod_usuario)
  }


  obtenerFotoPerfil(cod_usuario){
    cod_usuario = Variableglobal.cod_usuario
    this.servicio.obtenerFotoPerfil(this.cod_usuario).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
      console.log(data)
      if (this.datos.respuesta == "OK")
      {
        this.datos = data
        this.currentImage = this.datos.foto_usuario
       
      }
      else
      {
        alert("Hubo un error al cargar la foto")
      }
     
    },
    (error)=>{
      alert("Hubo un error al cargar la foto")
    });
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
    this.cod_usuario = Variableglobal.cod_usuario;
    this.correo_Usuario = this.txt_correo_Usuario;
    this.cedula_usuario = this.txt_Cedula_Usuario;
    this.clave = this.txt_contrasena;
    this.telefono_Usuario = this.txt_Telefono_Usuario;
    this.foto_usuario = this.foto_usuario;

    let datos = {
      "cod_usuario": this.cod_usuario,
      "correo_Usuario": this.correo_Usuario,
      "cedula_usuario": this.cedula_usuario,
      "telefono_Usuario": this.txt_Telefono_Usuario,
      "clave": this.clave,
      "foto_usuario":this.foto_usuario
    };
  
    this.servicio.UDatosPerfilUsuario(datos).subscribe((data)=>{
      this.datos = data;
      if (this.datos == true)
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



takePicture() {

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
    this.currentImage = "data:image/jpeg;base64,"+ imageData;
    this.foto_usuario = imageData;
    // this.currentImage =  `<img src="data:image/jpeg;base64,${this.currentImage}" alt="g-maps" style="border-radius: 2px">`;
  
  }, (err) => {
    // Handle error
    console.log("Camera issue:" + err);
  });
}

// CambiarFoto(){
//   this.photo = 
//   this.servicio.UFotoPerfil(Variableglobal.foto_usuario, Variableglobal.cod_usuario).subscribe((data)=>{
//     this.datos = data;
//     if (this.datos.respuesta == "OK")
//     {
//       this.SuccessAlert();
//       this.currentImage = this.datos.foto_usuario
//     }
//     else
//     {
//       this.ErrorAlert();
//     }
   
//   },
//   (error)=>{
//     this.ErrorAlert();
//   });

// }

}
