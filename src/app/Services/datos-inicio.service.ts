import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosInicioService {

  constructor(public http: HttpClient) { }

  ConsultarListadodeDatosInicioAyuntamiento(cod_ayuntamiento:string){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeDatosInicioAyuntamiento?cod_ayuntamiento="+cod_ayuntamiento+"");
    }
}
