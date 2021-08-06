import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { HttpClientModule } from '@angular/common/http';
import { MisreportesService } from '../Services/misreportes.service';
import { AlertController } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';
import {RegistroService} from '../Services/registro.service';
import {MispuntosService} from '../Services/mispuntos.service'
import {MensajeriaService} from '../Services/mensajeria.service';

import {DatosnecesarioService} from '../Services/datosnecesario.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  cod_usuario:any;
  cod_reporte:any;
  ubicacion:any;
  puntos_reporte: any;
  reportes: any;
  Mensajes:any;
  public niveles:any;
  public datos:any;
  usuarios:any;
  

  //Elementos modal
  usuario:any;
  correo:any;
  cedula:any;
  telefono:any;

  currentImage: any;

  constructor(private modalCtrl: ModalController,
    public alertController: AlertController, 
    public nivelUsuario: RegistroService,
    public servicio:MisreportesService,
    public servicioPuntos: MispuntosService,
    public Mensajeria: MensajeriaService,
    public modalController: ModalController,
    public Datos: DatosnecesarioService) { }


 
    

  ngOnInit() {
    this.mostrarDatos();
    this.cod_usuario = Variableglobal.cod_usuario;
  // this.cod_usuario =1;

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
      return  this.cod_reporte, this.cargarReportes(i);
     }
  
     else {
       alert('Proceso Detenido');
     }
    //  this.cargarReportes(i);
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
    
      this.cargarReportes(i);
      this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);
        this.Mensajes = ('Se ha aprovado su reporte con el código No:' + this.cod_reporte);
  
      this.Mensajeria.RegistrarMensajes(this.cod_usuario, this.Mensajes )
      .subscribe( 
        (data)=>{this.Mensajes = data;},
        (error)=>{console.log(error);}
      )
      //Datos para modal
      
      // this.usuario = ((document.getElementById('usuario' + i) as HTMLIonLabelElement).textContent);
      // this.correo = ((document.getElementById('correo' + i)as HTMLIonLabelElement).textContent);
      // this.cedula = ((document.getElementById('cedula' + i)as HTMLIonLabelElement).textContent);
      // this.telefono = ((document.getElementById('telefono' + i)as HTMLIonLabelElement).textContent);

      
      //   return this.cod_usuario,   this.usuario, this.correo, this.telefono, this.cedula,this.cargarReportes(i);
       }
     else{
       alert('cancelado');
       return;
     }
     this.cargarReportes(i);
     }

     datosParaModal(i){
      this.usuario = ((document.getElementById('usuario' + i) as HTMLIonLabelElement).textContent);
      this.correo = ((document.getElementById('correo' + i)as HTMLIonLabelElement).textContent);
      this.cedula = ((document.getElementById('cedula' + i)as HTMLIonLabelElement).textContent);
      this.telefono = ((document.getElementById('telefono' + i)as HTMLIonLabelElement).textContent);

      
        return this.cod_usuario,   this.usuario, this.correo, this.telefono, this.cedula,this.cargarReportes(i);
     }
  
     async abrirModal(){
     
      const modal = await   this.modalCtrl.create({
            component: ModalInfoPage,
            
            componentProps:{
              'usuario' : this.usuario,
              'cod_usuario' : this.cod_usuario,
              'cod_reporte' : this.cod_reporte,
              'cedula' : this.cedula,
              'telefono' : this.telefono,
              'correo' : this.correo,
              'imagen' : this.currentImage
            }
          });

          await modal.present();  

          //con este traigo información del modal info a la pantalla actual
          const {data} = await modal.onDidDismiss();

          console.log('Retorno del modal', data)




        }
     cargarReportes(i){
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
        
        // this.ImgAlert();
        this.abrirModal();
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
      this.usuario = ((document.getElementById('usuario' + i) as HTMLIonLabelElement).textContent);
      this.correo = ((document.getElementById('correo' + i)as HTMLIonLabelElement).textContent);
      this.cedula = ((document.getElementById('cedula' + i)as HTMLIonLabelElement).textContent);
      this.telefono = ((document.getElementById('telefono' + i)as HTMLIonLabelElement).textContent);
      
      this.cod_usuario = ((document.getElementById('cod_usuario' + i)as HTMLIonLabelElement).textContent);
     
     
      
      this.obtenerFoto(this.cod_reporte)
  }



  mostrarDatos(){

    this.Datos.DatosUsuario(1).subscribe((data)=>
    {this.usuarios = data;},
      (error)=>{console.log(error);}
    )
    
  }
  }
