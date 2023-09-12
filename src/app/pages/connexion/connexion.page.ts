import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { authRest } from 'src/app/env';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  showError = false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private loginSrv: LoginService, private router: Router) {}

  check(form: NgForm) {
    // console.debug(form);
    // console.debug(form.controls['inputLogin']);
    if (form.valid) {
      this.loginSrv.login(this.login, this.password).subscribe({
        next: (infos: User) => {
          this.showError = false;
          sessionStorage.setItem(
            'token',
            'Basic ' + window.btoa(this.login + ':' + this.password)
          );
          sessionStorage.setItem('user', JSON.stringify(infos));
          this.router.navigateByUrl('/welcome');
        },
        error: (error: any) => {
          console.debug(error);
          this.showError = true;
        },
      });
    }
  }
}
