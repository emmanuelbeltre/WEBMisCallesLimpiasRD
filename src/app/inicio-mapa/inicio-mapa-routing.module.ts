import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMapaPage } from './inicio-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMapaPageRoutingModule {}
