import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, LoadChildren } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {Variableglobal} from './variableglobal'

let cod_nivel = Variableglobal.cod_nivel;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'olvide-mi-contrasena',
    loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
  },
  {
    path: 'inicio-mapa',
    loadChildren: () => import('./inicio-mapa/inicio-mapa.module').then( m => m.InicioMapaPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  },
  {
    path: 'informate',
    loadChildren: () => import('./informate/informate.module').then( m => m.InformatePageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },


  {
    path: 'recibos-bonos',
    loadChildren: () => import('./recibos-bonos/recibos-bonos.module').then( m => m.RecibosBonosPageModule)
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./recompensas/recompensas.module').then( m => m.RecompensasPageModule)
  },
  {
    path: 'reportes-ayuntamientos',
    loadChildren: () => import('./reportes-ayuntamientos/reportes-ayuntamientos.module').then( m => m.ReportesAyuntamientosPageModule)
  }
];








// let routes: Routes =[]; 

// if(cod_nivel !=3 || cod_nivel != 2 || cod_nivel != 1){
//   routes=[
//     {
//          path: '',
//          redirectTo: '/login',
//          pathMatch: 'full'
//        },
//        {
//          path: 'folder/:id',
//          loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//        },
//        {
//          path: 'login',
//          loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//        },
//        {
//          path: 'registro',
//          loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
//        },
//        {
//          path: 'olvide-mi-contrasena',
//          loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
//        },
//        {
//          path: 'inicio-mapa',
//          loadChildren: () => import('./inicio-mapa/inicio-mapa.module').then( m => m.InicioMapaPageModule)
//        }
//   ];
// }
// else if(cod_nivel==2){
//   routes=[
//     {
//          path: '',
//          redirectTo: '/login',
//          pathMatch: 'full'
//        },
//        {
//          path: 'folder/:id',
//          loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//        },
//        {
//          path: 'login',
//          loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//        },
//        {
//          path: 'registro',
//          loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
//        },
//        {
//          path: 'olvide-mi-contrasena',
//          loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
//        }
//   ];
// }
// else if(cod_nivel==3){
//   routes=[
//     {
//          path: '',
//          redirectTo: '/login',
//          pathMatch: 'full'
//        },
//        {
//          path: 'folder/:id',
//          loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//        },
//        {
//          path: 'login',
//          loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//        },
//        {
//          path: 'registro',
//          loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
//        },
//        {
//          path: 'olvide-mi-contrasena',
//          loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
//        },
//        {
//          path: 'sobre-nosotros',
//          loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
//        },
//        {
//          path: 'informate',
//          loadChildren: () => import('./informate/informate.module').then( m => m.InformatePageModule)
//        },
//        {
//          path: 'mi-perfil',
//          loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
//        },
//         {
//           path: 'mis-puntos',
//           loadChildren: () => import('./mis-puntos/mis-puntos.module').then( m => m.MisPuntosPageModule)
//         },
//         {
//           path: 'mis-reportes',
//           loadChildren: () => import('./mis-reportes/mis-reportes.module').then( m => m.MisReportesPageModule)
//         },
//         {
//           path: 'recibos-bonos',
//           loadChildren: () => import('./recibos-bonos/recibos-bonos.module').then( m => m.RecibosBonosPageModule)
//         },
//         {
//           path: 'recompensas',
//           loadChildren: () => import('./recompensas/recompensas.module').then( m => m.RecompensasPageModule)
//         },
//         {
//           path: 'reportes-ayuntamientos',
//           loadChildren: () => import('./reportes-ayuntamientos/reportes-ayuntamientos.module').then( m => m.ReportesAyuntamientosPageModule)
//         }
//   ];
// }
// else{
//   routes=[
//     {
//          path: '',
//          redirectTo: '/login',
//          pathMatch: 'full'
//        },
//        {
//          path: 'folder/:id',
//          loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//        },
//        {
//          path: 'login',
//          loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//        },
//        {
//          path: 'registro',
//          loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
//        },
//        {
//          path: 'olvide-mi-contrasena',
//          loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
//        }, 
//        {
//         path: 'inicio-mapa',
//         loadChildren: () => import('./inicio-mapa/inicio-mapa.module').then( m => m.InicioMapaPageModule)
//       },
//   ];
// }
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// export let cargar=  NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// });
