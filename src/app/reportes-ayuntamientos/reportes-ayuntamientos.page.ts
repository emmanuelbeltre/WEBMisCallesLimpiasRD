import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  public reportes: any;
  public niveles:any;
  public datos:any;

  currentImage: any;

  constructor(public alertController: AlertController, public nivelUsuario: RegistroService) { 
    this.cod_usuario = Variableglobal.cod_usuario;
}
  ngOnInit() {
    this.cod_usuario =1;
    this.nivelUsuario.NivelUsuario(this.cod_usuario)
    .subscribe(
      (data)=>{this.niveles = data;},
      (error)=>{console.log(error);}
    )
  }



}