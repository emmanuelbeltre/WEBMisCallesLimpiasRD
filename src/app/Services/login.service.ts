import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient,platform: Platform) { 
 

  }

  IniciarSesion(usuario:string,clave:string){
      return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/miscalleslimpiasrd/iniciarsesion?usuario="+usuario+"&clave="+clave+"")
  }

  

  // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/IniciarSesion/"+usuario+"/"+clave+"")
  // }
}
