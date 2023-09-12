import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheReponsePage } from './affiche-reponse.page';

const routes: Routes = [
  {
    path: '',
    component: AfficheReponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficheReponsePageRoutingModule {}
