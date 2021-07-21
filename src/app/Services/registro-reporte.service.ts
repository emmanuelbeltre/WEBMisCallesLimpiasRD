import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroReporteService {
  baseURL: string = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/GuardarFotosOrden";
  ubicacionactualizada = "0"
  latitudactualizada = "0"
  longitudactualizada = "0"
  fotoactualizada = "0"
  cod_usuarioactualizado = 1

  postData = {
    "ubicacion": this.ubicacionactualizada,
    "lat": this.latitudactualizada,
    "lng": this.longitudactualizada,
    "fotos":this.fotoactualizada,
    "cod_usuario":this.cod_usuarioactualizado
  }  
  constructor(public http: HttpClient) { 
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
  }
  
  RegistroReporte(ubicacion:string,lat:string,lng:string,fotos:string, cod_usuario:number){
    this.ubicacionactualizada = ubicacion;
    this.latitudactualizada = lat;
    this.longitudactualizada = lng;
    this.fotoactualizada = fotos;
    this.cod_usuarioactualizado = cod_usuario;
    return this.http.post(this.baseURL, this.postData);
  // return this.http.post(this.baseURL + 'people', body,{'headers':headers})

  }
  // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/RegistrarReporte/"+ubicacion+"/"+lat+"/"+lng+"/"+fotos+"/"+cod_usuario+"");
    
  // }
}
