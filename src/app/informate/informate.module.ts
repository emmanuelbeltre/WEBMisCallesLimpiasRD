import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformatePageRoutingModule } from './informate-routing.module';

import { InformatePage } from './informate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformatePageRoutingModule
  ],
  declarations: [InformatePage]
})
export class InformatePageModule {}
