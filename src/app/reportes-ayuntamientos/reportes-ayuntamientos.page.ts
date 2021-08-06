import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MisreportesService } from '../Services/misreportes.service';
import { AlertController } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';
import {RegistroService} from '../Services/registro.service';
import {MispuntosService} from '../Services/mispuntos.service'
import {MensajeriaService} from '../Services/mensajeria.service';
import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-reportes-ayuntamientos',
  templateUrl: './reportes-ayuntamientos.page.html',
  styleUrls: ['./reportes-ayuntamientos.page.scss'],
})
export class ReportesAyuntamientosPage implements OnInit {
  cod_usuario:any;
  cod_reporte:any;
  ubicacion:any;
  puntos_reporte: any;
  reportes: any;
  Mensajes:any;
  public niveles:any;
  public datos:any;
  

  currentImage: any;

  constructor(
    public alertController: AlertController, 
    public nivelUsuario: RegistroService,
    public servicio:MisreportesService,
    public servicioPuntos: MispuntosService,
    public Mensajeria: MensajeriaService,
    public modalController: ModalController ) { 
    this.cod_usuario = Variableglobal.cod_usuario;
}

async ImgAlert() {
  const alert = await this.alertController.create({
    // component: ModalPage,
    cssClass: 'my-custom-class',
    message: `<div class="prueba6"><img src="${this.currentImage}" alt="g-maps" style="border-radius: 2px"><ion-button  color="warning" (click)="cancelarReporte(i);">
    Cancelar
    </ion-button>

    <ion-button id="{{'boton_procesar' + i}}" color="success" (click)="procesarReporte(i);">
    <!-- <ion-icon name="wallet" slot="start"></ion-icon> -->
    Procesar
</ion-button>
    </div>`,
    
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

 async cancelarReporte(i){
    
  // let botonId = ((document.getElementById('boton_cancelar'+i) as HTMLIonButtonElement).id);
  //Obtenemos el id del código de reportes de forma dinámica
  this.cod_reporte = ((document.getElementById('cod_reporte' +i) as HTMLIonLabelElement).textContent);

  //obtenemos el id de la unicación de forma dinámica
  this.ubicacion =((document.getElementById('ubicacion' +i) as HTMLIonLabelElement).textContent);


   if (confirm('¿Está seguro que desea cancelar el reporte con el código No: '+ this.cod_reporte )){

    this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);
    this.Mensajes = "Se ha cancelado el reporte realizado con el código No:" + this.cod_reporte ;
    this.Mensajeria.RegistrarMensajes(this.cod_usuario, this.Mensajes )
    .subscribe( 
      (data)=>{this.Mensajes = data;},
      (error)=>{console.log(error);}
    )
    this.servicio.eliminarReporte(this.cod_reporte).subscribe((data)=>
    {this.reportes = data;},
      (error)=>{console.log(error);}
    )
    alert('Cancelación Exitosa');

  this.cargarReportes();
   }

   else {
     alert('Proceso Detenido');
   }
  }


   procesarReporte(i){
      /// Obtenemos el id del código del usuario que hizo el reporte  de forma dinámica
    this.cod_usuario =((document.getElementById('cod_usuario' + i) as HTMLIonLabelElement).textContent);

  
    this.ubicacion =((document.getElementById('ubicacion' +i) as HTMLIonLabelElement).textContent);
    this.cod_reporte =((document.getElementById('cod_reporte' +i) as HTMLIonLabelElement).textContent);
    console.log(this.cod_reporte);
    if (confirm('¿Está seguro que desea procesar el reporte código número: '+ this.cod_reporte)){
      
      this.puntos_reporte = 10;   
      this.servicioPuntos.ProcesarOrden(this.cod_usuario, this.puntos_reporte)
      .subscribe(
        (data)=>{this.reportes = data;},
        (error)=>{console.log(error);}
      )

      this.servicio.actualizarReporte(this.cod_reporte) .subscribe(
        (data)=>{this.reportes = data;},
        (error)=>{console.log(error);}
      )
  
    this.cargarReportes();
    this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);
      this.Mensajes = ('Se ha aprovado su reporte con el código No:' + this.cod_reporte);

    this.Mensajeria.RegistrarMensajes(this.cod_usuario, this.Mensajes )
    .subscribe( 
      (data)=>{this.Mensajes = data;},
      (error)=>{console.log(error);}
    )
        this.cargarReportes();
     }
   else{
     alert('cancelado');
     return;
   }
   this.cargarReportes();
   }

  


  // procesarReporte(i){

  //   this.puntos_reporte = 10;

  //   this.cod_usuario =((document.getElementById('cod_usuario' + i) as HTMLIonLabelElement).textContent);
  
  //   this.servicioPuntos.ProcesarOrden(this.cod_usuario, this.puntos_reporte)
  //   .subscribe(
  //     (data)=>{this.reportes = data;},
  //     (error)=>{console.log(error);}
  //   )
    
  // }



  cargarReportes(){
    this.servicio.obtenerMisReportesEmpresas().subscribe((data)=>
    {this.reportes = data;},
      (error)=>{console.log(error);}
    )
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