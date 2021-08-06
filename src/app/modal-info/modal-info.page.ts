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
  constructor(private modlCtrl: ModalController,
    public Datos: DatosnecesarioService) { }
    cod_usuario:any;
    

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
    
      // this.Datos.DatosUsuario(1).subscribe((data)=>
      // {this.usuarios = data;},
      //   (error)=>{console.log(error);}
      // )
    }

}
