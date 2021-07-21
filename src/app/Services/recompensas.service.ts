import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecompensasService {

  constructor(public http: HttpClient) { }

  obtenerrecompensas(){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas');
  }

//   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas');
// }


  obtenerMisPuntos(cod_usuario: any){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfMisPuntos?cod_usuario=' + cod_usuario);
  }

//   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarInfMisPuntos/' + cod_usuario);
// }
}
