import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { authRest } from '../env';
import { User } from '../model/user';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient, private router: Router) {}

  public login(login: string, password: string): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + window.btoa(login + ':' + password),
    });
    return this.http.get<User>(authRest, { headers: headers });
  }
}
