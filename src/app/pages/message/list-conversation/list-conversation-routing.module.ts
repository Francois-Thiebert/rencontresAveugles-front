import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConversationPage } from './list-conversation.page';

const routes: Routes = [
  {
    path: '',
    component: ListConversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConversationPageRoutingModule {}
