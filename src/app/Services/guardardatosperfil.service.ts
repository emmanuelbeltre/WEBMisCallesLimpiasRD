import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardardatosperfilService {
  baseURL: string = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UDatosPerfilUsuario";

  constructor(public http: HttpClient) { }
  
   // UDatosPerfilUsuario(cod_usuario:string,correo_Usuario:string,cedula_usuario:string,telefono_Usuario:string,clave:string, foto_usuario:string){
   //  return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UDatosPerfilUsuario?cod_usuario="+cod_usuario+"&correo_Usuario="+correo_Usuario+"&cedula_usuario="+cedula_usuario+"&telefono_Usuario="+telefono_Usuario+"&clave="+clave+"&foto_usuario="+foto_usuario+"");
   //  }


  UDatosPerfilUsuario(datos:any){
      return this.http.post(this.baseURL, datos);
    }

    obtenerFotoPerfil(cod_usuario:number){
      return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/obtenerFotoPerfil?cod_usuario='+cod_usuario+"");
    }


  //   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/UDatosPerfilUsuario/"+nombre_usuario+"/"+correo_Usuario+"/"+cedula_usuario+"/"+telefono_Usuario+"/"+clave+"");
  // }
}
