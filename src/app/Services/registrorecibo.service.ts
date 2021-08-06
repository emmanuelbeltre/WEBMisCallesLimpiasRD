import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroReciboService {

  constructor(public http: HttpClient) { }

  IngresarRecibo(cod_usuario:any,cod_recompensa:any){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/RegistrarRecibos?cod_usuario="+cod_usuario+"&cod_recompensa="+cod_recompensa+"");
    
  }

  MostrarRecibos(cod_usuario:any){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporid?cod_usuario="+cod_usuario+"");
    
  }

  MostrarRecibosPorID(nuevoformatocodigobono:any){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporsuidrecibo?cod_recibo="+nuevoformatocodigobono+"");
    
  }

}
