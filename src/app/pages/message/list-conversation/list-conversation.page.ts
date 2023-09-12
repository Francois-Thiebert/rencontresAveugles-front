import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Match } from 'src/app/model/match';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { MatchService } from 'src/app/services/match.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-conversation',
  templateUrl: './list-conversation.page.html',
  styleUrls: ['./list-conversation.page.scss'],
})
export class ListConversationPage implements OnInit {

  constructor(
    private router: Router,
    private userSrv : UserService,
    private messageSrv: MessageService,
    private matchSrv: MatchService
  ) { }

  user!: User;
  messages_destinataire: Message[] = [];
  messages_emetteur: Message[] = [];
  emetteurs: User[] = [];
  destinataires: User[] = [];
  correspondants: User[] = [];
  matchs_correspondants: Match[] = [];

  ngOnInit(): void {
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      this.messageSrv.allMessageDestinataire(this.user.id!).subscribe((messages: Message[]) => {
        this.messages_destinataire = messages;
        this.messageSrv.allMessageEmetteur(this.user.id!).subscribe((messages: Message[]) => {
          this.messages_emetteur = messages;
          this.emetteurs = Array.from(new Set(this.messages_destinataire.map(message => message.emetteur!)));
          this.destinataires = Array.from(new Set(this.messages_emetteur.map(message => message.destinataire!)));
          this.correspondants = Array.from(new Set(this.emetteurs.concat(this.destinataires)));


          // this.getMatchesForCorrespondants(this.user, this.correspondants).subscribe((matchs: any[]) => {
          //   this.matchs_correspondants = matchs; // Assurez-vous que votre service renvoie les données sous forme de tableau
          // });
        });
      });

    });
  }

  getMatchesForCorrespondants(user: User, correspondants: User[]): Observable<Match[]> {
    const observables: Observable<Match>[] = [];

    for (const correspondant of correspondants) {
      observables.push(this.matchSrv.getByTwoUsers(this.user.id!, correspondant.id!));
    }

    return forkJoin(observables); // Utilisation de forkJoin pour combiner les résultats en un seul Observable
  }


}
