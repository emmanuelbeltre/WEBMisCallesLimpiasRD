import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public http: HttpClient) { }

  RegistroUsuario(usuario:string,email:string,clave:string,cedula:string,telefono:string,estado:string){
  //   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/RegistrarUsuario/"+usuario+"/"+email+"/"+clave+"/"+cedula+"/"+telefono+"/"+"");
    
  // }

  return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/RegistrarUsuario?usuario="+usuario+"&correo_Usuario="+email+"&cedula_usuario="+cedula+"&clave="+clave+"&telefono_Usuario="+telefono+"&estado="+estado+"");
    
}

  VerificarCorreoElectronico(correo_Usuario:string){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/VerificarCorreoElectronico?correo_Usuario="+correo_Usuario+"");
    
  }
//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/VerificarCorreoElectronico?correo_Usuario="+correo_Usuario+"");
    
// }
//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/VerificarCorreoElectronico/"+email+"");
    
// }


NivelUsuario(cod_usuario:any){
//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/nivelUsuario/"+cod_usuario+"");
  
// }

return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/nivelUsuario?cod_usuario="+cod_usuario+"");
    
}
}
