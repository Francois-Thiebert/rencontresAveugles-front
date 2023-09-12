import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjetToJsonService } from './objet-to-json.service';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { messageRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private convert: ObjetToJsonService) { }

  public allMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(messageRest);
  }

  public allMessageEmetteur(userId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${messageRest}/emetteur/${userId}`);
  }

  public allMessageDestinataire(userId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${messageRest}/destinataire/${userId}`);
  }

  public allMessageByUsers(destinataire_Id: number, emetteur_Id: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${messageRest}/user1/${destinataire_Id}/user2/${emetteur_Id}`);
  }

  public getById(id: number): Observable<Message> {
    return this.http.get<Message>(`${messageRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${messageRest}/${id}`);
  }

  public update(message: Message): Observable<Message> {
    return this.http.put<Message>(
      `${messageRest}/${message.id}`,
      this.convert.messageToJson(message)
    );
  }

  public create(message: Message): Observable<Message> {
    return this.http.post<Message>(
      messageRest,
      this.convert.messageToJson(message)
    );
  }
}
