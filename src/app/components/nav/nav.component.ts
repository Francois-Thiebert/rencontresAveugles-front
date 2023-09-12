import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatchService } from 'src/app/services/match.service';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  implements OnInit {

  constructor(
    private router: Router,
    private userSrv: UserService,
    private matchSrv: MatchService
  ) { }

  matchs: Match[] = [];
  user!: User;
  nombre_matchs!: number;

  ngOnInit(): void {
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
    this.user = user;
    this.matchSrv.allMatchUser(this.user.id!).subscribe((matchs: Match[]) => {
      this.matchs = matchs;
      this.nombre_matchs=this.matchs.length;
    });
    })}

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
  get logged(): boolean {
    return sessionStorage.getItem('user') ? true : false;
  }

}
