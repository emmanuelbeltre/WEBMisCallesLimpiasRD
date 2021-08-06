import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisreportesService {

  constructor(public http: HttpClient) {
  }

  obtenerMisReportes(cod_usuario:number){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoDeReportes?cod_usuario='+cod_usuario+"");
  }

  obtenerMisReportesEmpresas(){
    //return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoDeReportesEmpresas');

    return this.http.get('http://localhost:53059/api/MisCallesLimpiasRD/ConsultarListadoDeReportesEmpresas');
  }


//   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadoDeReportes/'+cod_usuario+"");
// }

obtenerFoto(cod_reporte:number){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/obtenerFoto?cod_reporte='+cod_reporte+"");
  }

//   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/obtenerFoto/'+cod_reporte+"");
// }

  eliminarReporte(cod_reporte:any){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/EliminarReporte?cod_reporte='+cod_reporte+"");
  }

  actualizarReporte(cod_reporte:any){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ActualizarReporte?cod_reporte='+cod_reporte+"");
  }




}
