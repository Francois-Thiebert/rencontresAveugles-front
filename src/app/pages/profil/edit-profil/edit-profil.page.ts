import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {

  constructor(
    private userSrv: UserService,
    private router: Router
  ) {}

  form!: FormGroup;
  user: User = new User("");
  login: String | undefined;
  prenom!: string;
  age: number | undefined;
  login_actuel: String | undefined;
  prenom_actuel: string | undefined;
  age_actuel: number | undefined;

  ngOnInit(): void {
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.user.id=userId;
    if (userId) {
      this.userSrv.getById(userId).subscribe((user: User) => {
        this.user = user;
        this.login_actuel=this.user.login;
        this.prenom_actuel=this.user.prenom;
        this.age_actuel=this.user.age;
      });
  }


}
submit() {
  this.user.age = this.age;
  this.user.prenom = this.prenom;
  this.user.login = this.login;

  this.userSrv.update(this.user).subscribe((usr) => {
          this.router.navigateByUrl('/profil');
        });

}
}
