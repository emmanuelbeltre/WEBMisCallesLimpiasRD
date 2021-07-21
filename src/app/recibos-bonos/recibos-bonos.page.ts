import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { RegistroReciboService } from '../Services/registrorecibo.service';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';

@Component({
  selector: 'app-recibos-bonos',
  templateUrl: './recibos-bonos.page.html',
  styleUrls: ['./recibos-bonos.page.scss'],
})
export class RecibosBonosPage implements OnInit {
  cod_usuario:any;

  Recibos:any;
  misPuntos:any;
  constructor(public servicio:RegistroReciboService, public servicio2:MispuntosService) {
    this.cod_usuario = Variableglobal.cod_usuario;

  }
  data:any;
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

}
