import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DatosnecesarioService } from './Services/datosnecesario.service';
import { LoginService } from './Services/Login.service';
import { Router } from "@angular/router"; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import {httpClientinMemoryWebApiModule} from '@angular-in-memory-web-api'


import { MisreportesService } from './Services/misreportes.service';
 
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera/ngx';
 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(public servicio:DatosnecesarioService, private router:Router) { }
  usuario;
  public datos:any;

  
  ngOnInit() {
    this.onload();
  }


  onload(){
    let usuario,clave, respuestas;
    usuario = this.usuario;
    this.servicio.obtenerDatosNecesarios(usuario).subscribe((data)=>{
      this.datos = data;
    },
    (error)=>{
      alert(error);
    });
  }
}
