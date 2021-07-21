import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvideMiContrasenaPageRoutingModule } from './olvide-mi-contrasena-routing.module';

import { OlvideMiContrasenaPage } from './olvide-mi-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvideMiContrasenaPageRoutingModule
  ],
  declarations: [OlvideMiContrasenaPage]
})
export class OlvideMiContrasenaPageModule {}
