import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { RegistroReciboService } from '../Services/registrorecibo.service';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../modal-popover/modal-popover.page';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-recibos-bonos',
  templateUrl: './recibos-bonos.page.html',
  styleUrls: ['./recibos-bonos.page.scss'],
})
export class RecibosBonosPage implements OnInit {
  cod_usuario:any;
  modalDataResponse: any;
  nombreproducto:any;
  cod_bono:any;
  Recibos:any;
  misPuntos:any;
  fechaCompleta:any;
  usuario:any;
  correo_usuario:any;
  cedula_usuario:any;
  cod_usuarioreporte:any;
  telefono_Usuario:any;



  data:any;


  constructor(public servicio:RegistroReciboService, public servicio2:MispuntosService, public modalCtrl: ModalController) {
    this.cod_usuario = Variableglobal.cod_usuario;

  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        'cod_bono': this.cod_bono,
        'nombreproducto': this.nombreproducto,
        'fechaCompleta': this.fechaCompleta,
        'usuario': this.usuario,
        'correo_usuario': this.correo_usuario,
        'cedula_usuario': this.cedula_usuario,
        'telefono_Usuario': this.telefono_Usuario,
        'cod_usuarioreporte': this.cod_usuarioreporte
        
      }
      
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    this.cod_usuario = Variableglobal.cod_usuario; 
    
    

    this.servicio.MostrarRecibos(this.cod_usuario)
    .subscribe(
      (data)=>{this.Recibos = data;},
      (error)=>{console.log(error);}
    ),
  
      this.servicio2.obtenerMisPuntos(this.cod_usuario)
      .subscribe(
        (data)=>{this.misPuntos = data;},
        (error)=>{console.log(error);}
      )

    return await modal.present();
  }




  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario; 

   this.servicio.MostrarRecibos(this.cod_usuario)
   .subscribe(
     (data)=>{this.Recibos = data;},
     (error)=>{console.log(error);}
   ),
 
     this.servicio2.obtenerMisPuntos(this.cod_usuario)
     .subscribe(
       (data)=>{this.misPuntos = data;},
       (error)=>{console.log(error);}
     )
 }

  showAlert(i) {
    this.nombreproducto=((document.getElementById('nombreproducto' + i) as HTMLIonLabelElement).textContent);
    this.cod_bono=((document.getElementById('cod_bono' + i) as HTMLIonLabelElement).textContent);

    var nuevoformatocodigobono = this.cod_bono.replace('Recibo No.','');

    this.servicio.MostrarRecibosPorID(nuevoformatocodigobono)
    .subscribe(
      (data)=>
      {
        this.Recibos = data;
        this.fechaCompleta = this.Recibos[0].fechaCompleta
        console.log(this.Recibos)
        this.usuario = this.Recibos[0].usuario
        this.correo_usuario = this.Recibos[0].correo_Usuario
        this.cedula_usuario = this.Recibos[0].cedula_usuario
        this.telefono_Usuario = this.Recibos[0].telefono_Usuario
        this.cod_usuarioreporte = this.Recibos[0].cod_usuarioreporte
        this.initModal();
      },
      (error)=>{console.log(error);}
      )

      

  }

}
