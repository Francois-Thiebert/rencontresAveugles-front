import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Image } from 'src/app/model/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {

  constructor(
    private userSrv: UserService,
    private router: Router,
    private http: HttpClient,
    private imageSrv: ImageService
  ) {}

  form!: FormGroup;
  user: User = new User("");
  login: String | undefined;
  prenom!: string;
  age: number | undefined;
  login_actuel: String | undefined;
  prenom_actuel: string | undefined;
  age_actuel: number | undefined;
  selectedFile!: File;
  photo1!: Image;
  photo2!: Image;
  photo3!: Image;

  ngOnInit(): void {
    this.photo1 = new Image();
    this.photo2 = new Image();
    this.photo3 = new Image();
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.user.id=userId;
    if (userId) {
      this.userSrv.getById(userId).subscribe((user: User) => {
        this.user = user;
        this.login_actuel=this.user.login;
        this.prenom_actuel=this.user.prenom;
        this.age_actuel=this.user.age;
      });
  }


}
submit() {
  this.user.age = this.age;
  this.user.prenom = this.prenom;
  this.user.login = this.login;
  this.photo1.user = this.user;
  this.photo2.user = this.user;
  this.photo3.user = this.user;


  if(this.photo1.nom){
  this.imageSrv.create(this.photo1).subscribe((img) => {
    this.photo1.id = img.id;
    console.log(this.photo1)
    });
  }
  if(this.photo2.nom){
  this.imageSrv.create(this.photo2).subscribe((img2) => {
    this.photo2.id = img2.id;
    });
  }
  if(this.photo3.nom){
  this.imageSrv.create(this.photo3).subscribe((img3) => {
    this.photo3.id = img3.id;
    });
  }

  this.userSrv.update(this.user).subscribe((usr) => {
    this.router.navigateByUrl('/profil');
  });



}

onPhotoSelected(event: any, imageName: string) {
  if (event.target.files) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target!.result as ArrayBuffer;
      const bytesArray = new Uint8Array(fileContent);

      // Convertir les octets en une tableau de nombres
      const numberArray: number[] = Array.from(bytesArray);

      // Convertir les nombres en une chaîne Base64
      const base64String = btoa(String.fromCharCode.apply(null, numberArray));

      // Utilisez ces bytes pour créer un objet Image avec la chaîne Base64
      const photo = new Image();
      photo.nom = imageName;
      photo.imageByte = base64String;
      photo.type = file.type;

      // Assignez l'objet Image approprié en fonction du nom de l'image
      if (imageName === 'photo1') {
        this.photo1 = photo;
      } else if (imageName === 'photo2') {
        this.photo2 = photo;
      } else if (imageName === 'photo3') {
        this.photo3 = photo;
      }
    };
    reader.readAsArrayBuffer(file);
  }
}



}
