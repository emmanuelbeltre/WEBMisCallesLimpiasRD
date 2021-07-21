import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibosBonosPage } from './recibos-bonos.page';

const routes: Routes = [
  {
    path: '',
    component: RecibosBonosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibosBonosPageRoutingModule {}
