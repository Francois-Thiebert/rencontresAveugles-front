import { LoginComponent } from './pages/connexion/connexion.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { Message } from './model/message';
import { MessagePage } from './pages/message/message/message.page';
import { MessagePageModule } from './pages/message/message/message.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  { path: 'welcome/:login', component: WelcomePage },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'reponse',
    loadChildren: () => import('./pages/reponse/edit-reponse/reponse.module').then( m => m.ReponsePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/affiche-profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'affiche-reponse',
    loadChildren: () => import('./pages/reponse/affiche-reponse/affiche-reponse.module').then( m => m.AfficheReponsePageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./pages/profil/edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'vue-match',
    loadChildren: () => import('./pages/match/vue-match/vue-match.module').then( m => m.VueMatchPageModule)
  },
  {
    path: 'message/:user_distant_Id',
    component: MessagePageModule,
  },
  {
    path: 'list-conversation',
    loadChildren: () => import('./pages/message/list-conversation/list-conversation.module').then( m => m.ListConversationPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message/message.module').then( m => m.MessagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
