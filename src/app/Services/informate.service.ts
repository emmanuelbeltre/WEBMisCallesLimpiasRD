import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformateService {

  constructor(public http: HttpClient) { }
  
  obtenerPostEducacionales(){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost');
  }

//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodePost");
// }
}

