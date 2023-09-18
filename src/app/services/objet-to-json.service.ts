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
    let obj = {
      adherent1Id: match.user1.id,
      adherent2Id: match.user2.id,
      date: match.date,
      compteur: match.compteur,
      compatibilite: match.compatibilite
  }
  if (match.id) {
    Object.assign(obj, { id: match.id });
  }
  return obj;
}

public imageToJson(image: Image): any {
  let obj: any = {
    nom: image.nom,
    type: image.type,
    user: image.user,
  };

  if (image.id) {
    obj.id = image.id;
  }

  // Vérifiez si l'attribut "bytes" existe dans l'objet "Image"
  if (image.bytes) {
    // Traitez l'attribut "bytes" comme un tableau d'octets (bytes)
    if (image.bytes instanceof Uint8Array) {
      // Convertissez le tableau d'octets (bytes) en un tableau ordinaire pour l'envoi JSON
      obj.imageByte = Array.from(image.bytes);
    }
  }

  return obj;
}



public userToJson(user: User): any {
  let obj = {
    age: user.age,
    login: user.login,
    password: user.password,
    photo1: user.photo1,
    photo2: user.photo2,
    photo3: user.photo3,
    photo4: user.photo4,
    photo5: user.photo5,
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
