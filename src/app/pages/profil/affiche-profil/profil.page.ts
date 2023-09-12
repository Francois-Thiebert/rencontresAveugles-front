import { Component, OnInit } from '@angular/core';
import { Reponses } from 'src/app/model/reponses';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit{

  reponseComplet: boolean = false;
  prenom!: String;
  user!: User;
  age!:number;
  login!:String;
  reponse!:Reponses|undefined;
  photo1: String | undefined;

constructor(private userSrv: UserService) {}

ngOnInit(): void {
  const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;

  if (userId) {
    // Chargez les données de l'utilisateur à partir du service UserService
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      this.photo1 = user.photo1;
      this.reponse = this.user.reponse;
      if (this.user.reponse) {
        this.reponseComplet = true;
      }
      this.age = this.user.age || 0;
      this.prenom = this.user.prenom || '';
      this.login = this.user.login || '';
    });
  }
}
}
