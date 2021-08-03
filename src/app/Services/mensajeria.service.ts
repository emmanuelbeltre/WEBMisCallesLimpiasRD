import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor(public http: HttpClient) { }


  MostrarMensajes(cod_usuario:any){
    // return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporid?cod_usuario="+cod_usuario+"");
      return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarMensajes?cod_usuario="+cod_usuario+"" );
    
    
  }

  RegistrarMensajes(cod_usuario:any, mensaje:any){
    // return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporid?cod_usuario="+cod_usuario+"");
      return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/RegistrarMensajesErrorAceptacion?cod_usuario="+cod_usuario+" &mensajes=" + mensaje );
    
    
  }
}
