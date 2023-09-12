import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reponses } from 'src/app/model/reponses';
import { User } from 'src/app/model/user';
import { ReponsesService } from 'src/app/services/reponses.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.page.html',
  styleUrls: ['./reponse.page.scss'],
})
export class ReponsePage implements OnInit{

  constructor(
    private userSrv: UserService,
    private reponseSrv: ReponsesService,
    private router: Router
  ) {}

  form!: FormGroup;
  user: User = new User("");
  reponse!: Reponses;
  rep1: number | undefined;
  rep2: number | undefined;
  rep3: number | undefined;
  rep4: number | undefined;
  rep5: number | undefined;
  rep6: number | undefined;

  ngOnInit(): void {
    this.reponse = new Reponses();
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.user.id=userId;
  }

  submit() {
    // Assignez les réponses à l'objet Reponses
    this.reponse.reponse1 = this.rep1;
    this.reponse.reponse2 = this.rep2;
    this.reponse.reponse3 = this.rep3;
    this.reponse.reponse4 = this.rep4;
    this.reponse.reponse5 = this.rep5;
    this.reponse.reponse6 = this.rep6;

    // Créez d'abord la nouvelle réponse dans la base de données
    this.reponseSrv.create(this.reponse!).subscribe(
      (rep) => {
        this.reponse!.id = rep.id; // Mettez à jour l'ID de la réponse

        // Associez la réponse à l'utilisateur

        this.userSrv.getById(this.user.id!).subscribe((user: User) => {
          this.user = user;
          this.user.reponse = rep;
          this.userSrv.update(this.user).subscribe(
            (updatedUser) => {
              // Mettez à jour l'utilisateur avec les données mises à jour de la base de données
              this.user = updatedUser;
              this.router.navigateByUrl('/profil');
            },
            (error) => {
              console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
            }
          );
        });
        // Enregistrez ensuite l'utilisateur dans la base de données

      },
      (error) => {
        console.error('Erreur lors de la création de la réponse :', error);
      }
    );
    }}


