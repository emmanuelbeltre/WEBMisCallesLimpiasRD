import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MisreportesService } from '../Services/misreportes.service';
import { AlertController } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';
import {RegistroService} from '../Services/registro.service';

@Component({
  selector: 'app-reportes-ayuntamientos',
  templateUrl: './reportes-ayuntamientos.page.html',
  styleUrls: ['./reportes-ayuntamientos.page.scss'],
})
export class ReportesAyuntamientosPage implements OnInit {
  cod_usuario:any;
  cod_reporte:any;
  ubicacion:any;
  public reportes: any;
  public niveles:any;
  public datos:any;

  currentImage: any;

  constructor(
    public alertController: AlertController, 
    public nivelUsuario: RegistroService,
    public servicio:MisreportesService, ) { 
    this.cod_usuario = Variableglobal.cod_usuario;
}

async ImgAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    message: `<img src="${this.currentImage}" alt="g-maps" style="border-radius: 2px">`,
    buttons: ['OK']
  });
  await alert.present();
}


ngOnInit() {
  this.cod_usuario = Variableglobal.cod_usuario;
  this.cod_usuario =1;

  this.servicio.obtenerMisReportesEmpresas().subscribe((data)=>
  {this.reportes = data;},
    (error)=>{console.log(error);}
  )
  // this.obtenerFoto(); 

  this.nivelUsuario.NivelUsuario(this.cod_usuario).subscribe((data)=>
  {this.niveles = data;},
    (error)=>{console.log(error);}
  )



}

CancelarDb(){
// let cod_reporte = 35;
  this.servicio.eliminarReporte(this.cod_reporte).subscribe((data)=>
  {this.reportes = data;},
    (error)=>{console.log(error);}
  )


}


  cancelarReporte(i){
    
  let botonId = ((document.getElementById('boton_cancelar'+i) as HTMLIonButtonElement).id);

  this.cod_reporte = ((document.getElementById('cod_reporte' +i) as HTMLIonLabelElement).textContent);

  this.ubicacion =((document.getElementById('ubicacion' +i) as HTMLIonLabelElement).textContent);

    console.log(this.ubicacion);
  console.log(botonId);
   console.log(this.cod_reporte);

   if (confirm('¿Está seguro que desea cancelar el reporte número :'+ this.cod_reporte + ',  y con la ubicación de :' + this.ubicacion)){
    this.servicio.eliminarReporte(this.cod_reporte).subscribe((data)=>
    {this.reportes = data;},
      (error)=>{console.log(error);}
    )
   }

   else {
     alert('pues no :v');
   }
  


  }


obtenerFoto(cod_reporte){
  this.servicio.obtenerFoto(cod_reporte).subscribe((data)=>{
    this.datos = data;
    if (this.datos.respuesta == "OK")
    {
      this.datos = data
      this.currentImage = this.datos.fotos
      this.ImgAlert();
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


showAlert(i) {
  

this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);

this.obtenerFoto(this.cod_reporte)
}
}