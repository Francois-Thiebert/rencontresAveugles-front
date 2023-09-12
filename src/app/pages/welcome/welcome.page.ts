
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  navRoot: any = 'NavPage';

  get welcome() {
    let _welcome = 'bonjour ';
    if (sessionStorage.getItem('user')) {
      let user = JSON.parse(sessionStorage.getItem('user')!) as User;
      _welcome = _welcome + user.prenom;
    }
    return _welcome;
  }
}




