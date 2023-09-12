import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Message } from 'src/app/model/message';
import { Timestamp } from 'rxjs';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  user_distant_Id!: number | null;
  user_local!: User;
  user_distant!: User;
  prenom_local!: string;
  prenom_distant!: string;
  photo_correspondant!:String;
  messages: Message[] = [];
  message = new Message;
  contenu!: String;
  date = new Date();

  constructor(private route: ActivatedRoute, private userSrv: UserService, private messageSrv: MessageService, private router: Router) {

  }

  @ViewChild(IonContent) content!: IonContent;

  ngOnInit() {
    const userIdStr = this.route.snapshot.paramMap.get('user_distant_Id');
    this.user_distant_Id = userIdStr ? parseInt(userIdStr, 10) : null;
    const user_local_Id = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(user_local_Id).subscribe((user: User) => {
      this.user_local = user;
      this.prenom_local = user.prenom;
      this.userSrv.getById(this.user_distant_Id!).subscribe((user2: User) => {
        this.user_distant = user2;
        this.prenom_distant = user2.prenom;
        this.photo_correspondant = user2.photo1!;
        this.messageSrv.allMessageByUsers(this.user_distant.id!, this.user_local.id!).subscribe((messages: Message[]) => {
          this.messages = messages;
          this.messages = this.sortMessagesByDate(this.messages);
            });
          });
        });

  }

  ngAfterViewInit() {
    // Utilisez setTimeout pour déplacer la vue vers le bas après que la vue ait été initialisée
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }
  scrollToBottom() {
    this.content.scrollToBottom(0);
  }

  sortMessagesByDate(messages: Message[]) {
    return messages.sort((a, b) => {
      const dateA = new Date(a.date!).getTime();
      const dateB = new Date(b.date!).getTime();
      return dateA - dateB;
    });
  }

  envoi(){

    this.message.contenu=this.contenu;
    this.message.emetteur=this.user_local;
    this.message.destinataire=this.user_distant;
    const currentDateStr = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Utilisez l'heure au format 24 heures
    });
    const currentDate = new Date(currentDateStr);
    if (!isNaN(currentDate.getTime())) {
      this.message.date = currentDate;
    } else {
      console.error('La date actuelle n\'a pas pu être convertie en Date.');
    }
    this.messageSrv.create(this.message).subscribe((mess) => {
      this.message.id = mess.id; // Set the ID of the user
      this.messageSrv.allMessageByUsers(this.user_distant.id!, this.user_local.id!).subscribe((messages: Message[]) => {
        this.messages = messages;
        this.messages = this.sortMessagesByDate(this.messages);
          });
          this.contenu = '';
  })}


}
