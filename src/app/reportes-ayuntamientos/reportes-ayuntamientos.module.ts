import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesAyuntamientosPageRoutingModule } from './reportes-ayuntamientos-routing.module';

import { ReportesAyuntamientosPage } from './reportes-ayuntamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesAyuntamientosPageRoutingModule
  ],
  declarations: [ReportesAyuntamientosPage]
})
export class ReportesAyuntamientosPageModule {}
