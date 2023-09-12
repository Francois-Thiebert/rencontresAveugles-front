import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListConversationPageRoutingModule } from './list-conversation-routing.module';

import { ListConversationPage } from './list-conversation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListConversationPageRoutingModule
  ],
  declarations: [ListConversationPage]
})
export class ListConversationPageModule {}
