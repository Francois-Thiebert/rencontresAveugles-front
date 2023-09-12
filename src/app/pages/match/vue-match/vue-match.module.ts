import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueMatchPageRoutingModule } from './vue-match-routing.module';

import { VueMatchPage } from './vue-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueMatchPageRoutingModule
  ],
  declarations: [VueMatchPage]
})
export class VueMatchPageModule {}
