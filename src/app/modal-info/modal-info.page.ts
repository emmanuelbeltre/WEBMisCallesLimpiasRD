import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {DatosnecesarioService} from '../Services/datosnecesario.service'

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;
  usuarios:any;
  cod_reporte:any;
  usuario:any;
  cancelarReporte:any;
  cedula:any;
  procesarReporte:any;
  imagen:any;
  i:any;
  correo:any;
  constructor(private modlCtrl: ModalController,
    public Datos: DatosnecesarioService) { }
    cod_usuario:any;
    telefono:any;
    

  ngOnInit() {
    // this.mostrarDatos();
  }

  salirSinArgumentos(){
 this.modlCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modlCtrl.dismiss({
      nombre: 'Emma',
      pais: 'RD'
    });
  
  }

    mostrarDatos(){
    this.telefono= (document.getElementById('telefono') as HTMLIonLabelElement).textContent;
    console.log(this.telefono)
    }



    

}
