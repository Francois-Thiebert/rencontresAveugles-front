import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { Reponses } from 'src/app/model/reponses';
import { User } from 'src/app/model/user';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit{

  reponseComplet: boolean = false;
  prenom!: String;
  user!: User;
  age!:number;
  login!:String;
  reponse!:Reponses|undefined;
  photo1: String | undefined;
  photos: Image []= [];

  constructor(private userSrv: UserService, private imageSrv: ImageService, private sanitizer: DomSanitizer) {}


ngOnInit(): void {
  const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;

  if (userId) {
    // Chargez les données de l'utilisateur à partir du service UserService
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      // this.photo1 = user.photo1;
      this.reponse = this.user.reponse;
      if (this.user.reponse) {
        this.reponseComplet = true;
      }
      this.age = this.user.age || 0;
      this.prenom = this.user.prenom || '';
      this.login = this.user.login || '';
      this.imageSrv.getByUser(this.user.id!).subscribe((img: Image[]) => {
        this.photos = img;
    });
  });
  }
}

// getPhotoUrl(photo: Image): SafeUrl | undefined {
//   if (photo.bytes) {
//     const base64Data = btoa(String.fromCharCode(...photo.bytes));
//     const dataUrl = `data:${photo.type};base64,${base64Data}`;
//     return this.sanitizer.bypassSecurityTrustUrl(dataUrl);
//   }
//   return undefined;
// }

// getPhotoUrlAsString(photo: Image): string | undefined {
//   const safeUrl = this.getPhotoUrl(photo);
//   if (safeUrl) {
//     return safeUrl.toString();
//   }
//   return undefined;
// }


}
