import { Component, OnInit } from '@angular/core';
import { MisreportesService } from '../Services/misreportes.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';
import {RegistroService} from '../Services/registro.service';


@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.page.html',
  styleUrls: ['./mis-reportes.page.scss'],
}) 
export class MisReportesPage implements OnInit {
  cod_usuario:any;
  cod_reporte:any;
  public reportes: any;
  public niveles:any;
  public datos:any;

  currentImage: any;

  constructor(public servicio:MisreportesService, public alertController: AlertController, public nivelUsuario: RegistroService) { 
    this.cod_usuario = Variableglobal.cod_usuario;
}
 
  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;

    this.servicio.obtenerMisReportes(this.cod_usuario).subscribe((data)=>
    {this.reportes = data;},
      (error)=>{console.log(error);}
    )
    this.obtenerFoto(); 
 
    this.nivelUsuario.NivelUsuario(this.cod_usuario).subscribe((data)=>
    {this.niveles = data;},
      (error)=>{console.log(error);}
    )
  
 
 
  }

  obtenerFoto(){
    this.cod_reporte = 46;
    this.servicio.obtenerFoto(this.cod_reporte).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.datos = data
        this.currentImage = 'data:image/jpeg;base64,' + this.datos.fotos
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

  // obtenerFoto(){
  //   this.cod_reporte = 44;
  //       this.servicio.obtenerFoto(this.cod_reporte).subscribe((data)=>{
  //         this.datos = data
  //         this.currentImage = 'data:image/jpeg;base64,' + this.datos.fotos
  //        ;},
  //         (error)=>{console.log(error);}
  //       )
    
  // }



  showAlert(i) {
    

this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);
 
     this.alertController.create({
       header: 'Alert',
       subHeader: 'Subtitle for alert',
       message: 'Recompensa seleccionada con el código' + this.cod_reporte,
       buttons: ['OK']
     }).then(res => {

       res.present();

   });

  }
}