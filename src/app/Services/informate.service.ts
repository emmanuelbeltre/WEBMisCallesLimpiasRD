import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformateService {

  constructor(public http: HttpClient) { }
  
  obtenerPostEducacionales(cod_ayuntamiento:any){
    
    // return this.http.get('http://localhost:53059/api/MisCallesLimpiasRD/ConsultarListadodePost?cod_ayuntamiento='+ cod_ayuntamiento);
          return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost?cod_ayuntamiento='+ cod_ayuntamiento);
        }

      //   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodePost");
      // }


      RegistrarPost(titulo:any,  descripcion:any,  imagen:any, cod_ayuntamiento:any){
        // return this.http.get('http://localhost:53059/api/MisCallesLimpiasRD/AgregarPostEducacional?titulo='+titulo+'&descripcion='+descripcion+'&imagen='+imagen+'&cod_ayuntamiento='+cod_ayuntamiento );
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/AgregarPostEducacional?titulo='+titulo+'&descripcion='+descripcion+'&imagen='+imagen+'&cod_ayuntamiento='+cod_ayuntamiento );
      }

      EliminarPost(cod_post: any){
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/EliminarPost?cod_post=' + cod_post);
      }



      ActualizarPost( cod_post:any,titulo:any,descripcion:any,imagen:any){
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ActualizarPost?cod_post='+cod_post+'&titulo='+ titulo+'&descripcion='+descripcion+'&imagen=' + imagen );
      }

 }
 
