import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reponses } from 'src/app/model/reponses';
import { User } from 'src/app/model/user';
import { ReponsesService } from 'src/app/services/reponses.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-affiche-reponse',
  templateUrl: './affiche-reponse.page.html',
  styleUrls: ['./affiche-reponse.page.scss'],
})
export class AfficheReponsePage implements OnInit {

  constructor(
    private reponseSrv: ReponsesService,
    private router: Router,
    private userSrv: UserService
  ) { }

  user: User = new User("");
  reponse!: Reponses;
  rep1: number | undefined;
  rep2: number | undefined;
  rep3: number | undefined;
  rep4: number | undefined;
  rep5: number | undefined;
  rep6: number | undefined;
  repString1: string | undefined;
  repString2: string | undefined;
  repString3: string | undefined;
  repString4: string | undefined;
  repString5: string | undefined;
  repString6: string | undefined;

  ngOnInit() {
    this.reponse = new Reponses();
    const userId = JSON.parse(sessionStorage.getItem('user')!)?.id;
    this.userSrv.getById(userId).subscribe((user: User) => {
      this.user = user;
      this.reponseSrv.getById(this.user.reponse?.id!).subscribe((rep: Reponses) => {
        this.reponse = rep;
        this.rep1=this.reponse.reponse1;
    this.rep2=this.reponse.reponse2;
    this.rep3=this.reponse.reponse3;
    this.rep4=this.reponse.reponse4;
    this.rep5=this.reponse.reponse5;
    this.rep6=this.reponse.reponse6;
    this.transformReponse1(this.rep1!);
    this.transformReponse2(this.rep2!);
    this.transformReponse3(this.rep3!);
    this.transformReponse4(this.rep4!);
    this.transformReponse5(this.rep5!);
    this.transformReponse6(this.rep6!);
        })
      });

  }

  getReponse(){
    this.reponseSrv.getById(this.user.reponse?.id!).subscribe((rep: Reponses) => {
      this.reponse = rep;
      return this.reponse;
      })
  }

  transformReponse1(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="Un homme";
      }
      if(rep==2){
        repString="Une femme";
      }
      if(rep==3){
        repString="Non-binaire";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString1=repString!;
  }

  transformReponse2(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="Des hommes";
      }
      if(rep==2){
        repString="Des femmes";
      }
      if(rep==3){
        repString="Des non-binaires";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString2=repString!;
  }

  transformReponse3(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="Entre 14 et 17 ans";
      }
      if(rep==2){
        repString="Entre 18 et 22 ans";
      }
      if(rep==3){
        repString="Entre 23 et 29 ans";
      }
      if(rep==4){
        repString="Entre 30 et 35 ans";
      }
      if(rep==5){
        repString="Entre 36 et 40 ans";
      }
      if(rep==6){
        repString="Plus de 40 ans";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString3=repString!;
  }

  transformReponse4(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="Entre 14 et 17 ans";
      }
      if(rep==2){
        repString="Entre 18 et 22 ans";
      }
      if(rep==3){
        repString="Entre 23 et 29 ans";
      }
      if(rep==4){
        repString="Entre 30 et 35 ans";
      }
      if(rep==5){
        repString="Entre 36 et 40 ans";
      }
      if(rep==6){
        repString="De plus de 40 ans";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString4=repString!;
  }

  transformReponse5(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="En centre ville";
      }
      if(rep==2){
        repString="A la campagne";
      }
      if(rep==3){
        repString="A la montagne";
      }
      if(rep==4){
        repString="A la mer";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString5=repString!;
  }

  transformReponse6(rep: number){
    let repString: string;
    if(rep){
      if(rep==1){
        repString="Netflix";
      }
      if(rep==2){
        repString="Les visites";
      }
      if(rep==3){
        repString="Le sport";
      }
      if(rep==4){
        repString="Le gaming";
      }
      if(rep==5){
        repString="La lecture";
      }
      if(rep==6){
        repString="La philatélie";
      }
    }
    else{
      repString="Non renseigné";
    }
    this.repString6=repString!;
  }

}
