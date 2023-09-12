import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueMatchPage } from './vue-match.page';

const routes: Routes = [
  {
    path: '',
    component: VueMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueMatchPageRoutingModule {}
