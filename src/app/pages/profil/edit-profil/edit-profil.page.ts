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
  photo!: Image;

  ngOnInit(): void {
    this.photo = new Image();
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
  this.photo.user = this.user;
  this.photo.bytes = new Uint8Array([0, 255, 1, 216, 2, 255, 3, 224, 4, 0, 5, 16, 6, 74, 7, 70]);


  this.imageSrv.create(this.photo).subscribe((img) => {
    this.photo.id = img.id;
    console.log(this.photo)
    this.userSrv.update(this.user).subscribe((usr) => {
      this.router.navigateByUrl('/profil');
    });
  });



}

onFileSelected(event: any) {
  if (event.target.files) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target!.result as ArrayBuffer;

      // Encodez les données binaires en Base64
      const base64Data = btoa(String.fromCharCode(...new Uint8Array(fileContent)));

      // Convertissez la chaîne Base64 en tableau d'octets (Uint8Array)
      const bytesArray = new Uint8Array(Array.from(atob(base64Data), (c) => c.charCodeAt(0)));

      // Assignez les données binaires (tableau d'octets) à l'attribut photo.bytes
      this.photo.bytes = bytesArray;
      this.photo.type = file.type;
    };

    reader.readAsArrayBuffer(file);
  }
}






// onFileSelected(event: any){
//   if(event.target.files){
//     const file = event.target.files[0];
//     this.photo.bytes = file;
//   }
// }

// }

// onUpload() {
//   const fd = new FormData();
//   fd.append('image', this.selectedFile, this.selectedFile.name);

//   // Remplacez 'http://localhost:8100/upload' par l'URL de votre endpoint Ionic pour gérer l'upload.
//   this.http.post('http://localhost:8100/upload', fd).subscribe((res) => {
//     console.log(res);
//   });
// }


}
