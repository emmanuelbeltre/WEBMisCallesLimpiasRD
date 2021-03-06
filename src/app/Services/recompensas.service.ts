import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Variableglobal } from '../variableglobal';


@Injectable({
  providedIn: 'root'
})
export class RecompensasService {

  constructor(public http: HttpClient) { }

  obtenerrecompensas(cod_ayuntamiento:any){
    // let prueba = Variableglobal.cod_ayuntamiento;
    // return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas?cod_ayuntamiento='+ cod_ayuntamiento );
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas?cod_ayuntamiento='+ cod_ayuntamiento );
  }




      actualizarRecompensas(cod_recompensa:any,  puntos:any,  nombre:any,  imagen:any,  descripcion:any){
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ActualizarRecompensa?cod_recompensa='+cod_recompensa+'&puntos='+puntos+'&nombre='+nombre+ '&imagen='+imagen+'&descripcion='+descripcion );
      }

       eliminarRecompensas(cod_recompensa: any){
         return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/EliminarRecompensas?cod_recompensa=' + cod_recompensa);
       }

       desactivarRecompensas(cod_recompensa: any){
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/DesactivarRecompensa?cod_recompensa=' + cod_recompensa);
      }

       agregarRecompensas( nombre:any,puntos:any,imagen:any,descripcion:any, cod_ayuntamiento:any){
        //return this.http.get('http://localhost:53059/api/MisCallesLimpiasRD/AgregarRecompensa?nombre='+nombre+'&puntos='+ puntos+'&imagen='+imagen+'&descripcion=' + descripcion +'&cod_ayuntamiento=' + cod_ayuntamiento );
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/AgregarRecompensa?nombre='+nombre+'&puntos='+ puntos+'&imagen='+imagen+'&descripcion=' + descripcion +'&cod_ayuntamiento=' + cod_ayuntamiento );
      }



}
