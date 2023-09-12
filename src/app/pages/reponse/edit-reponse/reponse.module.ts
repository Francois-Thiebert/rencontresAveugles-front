import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReponsePageRoutingModule } from './reponse-routing.module';

import { ReponsePage } from './reponse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReponsePageRoutingModule
  ],
  declarations: [ReponsePage]
})
export class ReponsePageModule {}
