import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosnecesarioService {

  constructor(public http: HttpClient) { }

  // obtenerDatosNecesarios(usuario:string){
  //   // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios/"+usuario+"");
  //   // }


  //   return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios?usuario="+usuario+"");
  //   }

    
    obtenerDatosNecesariosAyunta(usuario:string){
      // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios/"+usuario+"");
      // }
  
  
      return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesariosAyunta?usuario="+usuario+"");
      }
  
      

    
  DatosUsuario(cod_usuario:any){
    // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios/"+usuario+"");
    // }


    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/DatosUsuarios?cod_usuario="+cod_usuario+"");
    }
}
