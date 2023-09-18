import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EditProfilPageRoutingModule } from './edit-profil-routing.module';

import { EditProfilPage } from './edit-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EditProfilPage]
})
export class EditProfilPageModule {}
