import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';
import { SafePipe } from 'src/app/modules/nav/safe.pipe';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
