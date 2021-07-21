import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesAyuntamientosPage } from './reportes-ayuntamientos.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesAyuntamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesAyuntamientosPageRoutingModule {}
