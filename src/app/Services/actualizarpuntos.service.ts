import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualizarpuntosService {

  constructor(public http: HttpClient) { }

  ActualizarPuntos(cod_puntos:any,puntos_acumulado:any,cod_usuario:any)
  {
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ActualizarOrden?cod_puntos="+cod_puntos+"&puntosacumulados="+puntos_acumulado+"&cod_usuario="+cod_usuario+"");
  }

  // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ActualizarOrden/"+cod_puntos+"/"+puntos_acumulado+"/"+cod_usuario+"");
    
  // }
}
