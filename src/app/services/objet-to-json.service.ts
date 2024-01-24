import { Injectable } from '@angular/core';
import { Match } from '../model/match';
import { Message } from '../model/message';
import { Reponses } from '../model/reponses';
import { User } from '../model/user';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ObjetToJsonService {

  constructor() { }
  public matchToJson(match: Match): any {
    let obj : any = {
      user1: match.user1,
      user2: match.user2,
      date: match.date,
      compteur: match.compteur,
      compatibilite: match.compatibilite
  }
  if (match.id) {
    obj.id = match.id;
  }
  return obj;
}

public imageToJson(image: Image): any {
  let obj: any = {
    nom: image.nom,
    type: image.type,
    imageByte: image.imageByte,
    user: image.user,
  };

  if (image.id) {
    obj.id = image.id;
  }

  return obj;
}



public userToJson(user: User): any {
  let obj = {
    age: user.age,
    login: user.login,
    password: user.password,
    photos: user.photos,
    prenom: user.prenom,
    role: user.role,
    reponse: user.reponse
}
if (user.id) {
  Object.assign(obj, { id: user.id });
}
return obj;
}

public messageToJson(message: Message): any {
  let obj = {
    emetteur: message.emetteur,
    destinataire: message.destinataire,
    date: message.date,
    contenu: message.contenu
}
if (message.id) {
  Object.assign(obj, { id: message.id });
}
return obj;
}

public reponsesToJson(reponses: Reponses): any {
  let obj = {
    reponse1: reponses.reponse1,
    reponse2: reponses.reponse2,
    reponse3: reponses.reponse3,
    reponse4: reponses.reponse4,
    reponse5: reponses.reponse5,
    reponse6: reponses.reponse6,
}
if (reponses.id) {
  Object.assign(obj, { id: reponses.id });
}
return obj;
}

}
