import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvideMiContrasenaPage } from './olvide-mi-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: OlvideMiContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvideMiContrasenaPageRoutingModule {}
