import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMapaPageRoutingModule } from './inicio-mapa-routing.module';

import { InicioMapaPage } from './inicio-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMapaPageRoutingModule
  ],
  declarations: [InicioMapaPage]
})
export class InicioMapaPageModule {}
