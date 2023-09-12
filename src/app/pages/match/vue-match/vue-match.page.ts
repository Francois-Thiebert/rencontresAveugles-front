import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vue-match',
  templateUrl: './vue-match.page.html',
  styleUrls: ['./vue-match.page.scss'],
})
export class VueMatchPage implements OnInit {
  user!: User;
  photo1: String | undefined;
  matchs_user1: Match[] = [];
  matchs_user2: Match[] = [];

constructor(private userSrv: UserService, private matchSrv: MatchService) {}

ngOnInit(): void {
  const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
  this.userSrv.getById(userId).subscribe((user: User) => {
    this.user = user;
    this.matchSrv.allMatchUser1(this.user.id!).subscribe((matchs: Match[]) => {
      this.matchs_user1 = matchs;
    });
    this.matchSrv.allMatchUser2(this.user.id!).subscribe((matchs: Match[]) => {
      this.matchs_user2 = matchs;
    });
  });
}
}
