import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardardatosperfilService {

  constructor(public http: HttpClient) { }

  UDatosPerfilUsuario(nombre_usuario:string,correo_Usuario:string,cedula_usuario:string,telefono_Usuario:string,clave:string){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UDatosPerfilUsuario?usuario="+nombre_usuario+"&correo_Usuario="+correo_Usuario+"&cedula_usuario="+cedula_usuario+"&telefono_Usuario="+telefono_Usuario+"&clave="+clave+"");
    }

  //   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/UDatosPerfilUsuario/"+nombre_usuario+"/"+correo_Usuario+"/"+cedula_usuario+"/"+telefono_Usuario+"/"+clave+"");
  // }
}
