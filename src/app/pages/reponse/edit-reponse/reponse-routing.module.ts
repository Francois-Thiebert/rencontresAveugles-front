import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReponsePage } from './reponse.page';

const routes: Routes = [
  {
    path: '',
    component: ReponsePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReponsePageRoutingModule {}
