import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibosBonosPageRoutingModule } from './recibos-bonos-routing.module';

import { RecibosBonosPage } from './recibos-bonos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibosBonosPageRoutingModule
  ],
  declarations: [RecibosBonosPage]
})
export class RecibosBonosPageModule {}
