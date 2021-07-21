import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SobrenosotrosService {


  constructor(public http: HttpClient) { }

  obtenerDatosSobreNosotros(){
     return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfSobreNosotros');
   }

   
 // return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarInfSobreNosotros');
// }

}
