import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage{

  constructor(
    private userSrv: UserService,
    private router: Router
  ) {}

  form!: FormGroup;
  user: User = new User("");
  prenom!: string;
  login: string | undefined;
  password: string | undefined;
  age: number | undefined;

  submit() {
    this.user.age = this.age;
    this.user.prenom = this.prenom;
    this.user.login = this.login;
    this.user.password = this.password;

    this.userSrv.create(this.user).subscribe((usr) => {
      this.user.id = usr.id; // Set the ID of the user
            this.router.navigateByUrl('/connexion');
          });

  }


}
