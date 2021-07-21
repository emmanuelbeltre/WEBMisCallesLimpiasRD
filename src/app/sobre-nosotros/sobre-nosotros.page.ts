import { Component, OnInit } from '@angular/core';
import {SobrenosotrosService} from '../Services/sobrenosotros.service';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
})
export class SobreNosotrosPage implements OnInit {
  sobrenosotros:any;
  constructor(public servicio:SobrenosotrosService) { }

  ngOnInit() {
    this.servicio.obtenerDatosSobreNosotros()
    .subscribe(
      (data)=>{this.sobrenosotros = data;},
      (error)=>{console.log(error);}
    )
  }

}
