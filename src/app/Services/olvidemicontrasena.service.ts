import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OlvidemicontrasenaService {

  constructor(public http: HttpClient) { }

  UContrasenaOlvidada(email:string,clave_nueva:string){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UContrasenaOlvidada?correo_Usuario="+email+"&clave_nueva="+clave_nueva+"");
  }

//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/UContrasenaOlvidada/"+email+"/"+clave_nueva+"");
// }
}
