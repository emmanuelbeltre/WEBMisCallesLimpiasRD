import { Component } from '@angular/core';
import { Environment } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { DatosnecesarioService } from './Services/datosnecesario.service';
import { Router } from "@angular/router"; 
import { Variableglobal } from './variableglobal';
// import { Variableglobal } from './variableglobal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
    {title: 'Reportes', url: '/reportes-ayuntamientos', icon: 'paper-plane'},
    { title: 'Recompensas', url: '/recompensas', icon: 'receipt' },
    { title: 'Bonos', url: '/recibos-bonos', icon: 'receipt' },
    { title: 'Informate', url: '/informate', icon: 'book' },
    { title: 'Sobre Nosotros', url: '/sobre-nosotros', icon: 'reader' },
    // { title: 'Perfil de la Empresa', url: '/mi-perfil', icon: 'people' },
    

  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  myname: any;
  usuario: any;
  public datos:any;
  codigo:any;

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(platform: Platform,public servicio2:DatosnecesarioService, public router: Router){
    platform.ready().then(() => {
      // this.onVerificarPantalla() ;
        if (document.URL.startsWith('http')){
          Environment.setEnv({
            API_KEY_FOR_BROWSER_RELEASE: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50",
            API_KEY_FOR_BROWSER_DEBUG: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50"
          });
        }
    });
   }

   PruebaClick(){
      
    Variableglobal.cod_ayuntamiento=null;
    Variableglobal.cod_usuario=null;
  
    Variableglobal.cod_nivel=null;
    
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });

    console.log(Variableglobal.cod_ayuntamiento)
  }

  //  onVerificarPantalla() {
  //    this.codigo = Variableglobal.cod_nivel;
  //   if (this.codigo = 3)
  //   {
  //      this.appPages = [
  //       { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
  //       { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },
  //       { title: 'Mis Puntos', url: '/mis-puntos', icon: 'cash' },
  //       { title: 'Informate', url: '/informate', icon: 'book' },
  //       { title: 'Acerca de', url: '/sobre-nosotros', icon: 'reader' },
  //       { title: 'Mi Perfil', url: '/mi-perfil', icon: 'people' },
  //       { title: 'Mis Bonos', url: '/recibos-bonos', icon: 'receipt' },
  //     ];
  //   } 
  //   else
  //   {
  //     this.appPages = [
  //       { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
  //       { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },

  //     ];
  //   }
  // }
   ngOnInit() {
    // this.onVerificarPantalla() ;
  }
}
