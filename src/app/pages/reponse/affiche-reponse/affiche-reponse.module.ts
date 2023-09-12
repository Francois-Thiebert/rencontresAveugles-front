import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficheReponsePageRoutingModule } from './affiche-reponse-routing.module';

import { AfficheReponsePage } from './affiche-reponse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficheReponsePageRoutingModule
  ],
  declarations: [AfficheReponsePage]
})
export class AfficheReponsePageModule {}
