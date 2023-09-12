import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isHomePage: boolean = false;
  isConnexionPage: boolean = false;
  isInscriptionPage: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Vérifiez si l'URL actuelle correspond à la page 'home'
        this.isHomePage = event.url === '/';
      }
      if (event instanceof NavigationEnd) {
        // Vérifiez si l'URL actuelle correspond à la page 'home'
        this.isConnexionPage = event.url === '/connexion';
      }
      if (event instanceof NavigationEnd) {
        // Vérifiez si l'URL actuelle correspond à la page 'home'
        this.isInscriptionPage = event.url === '/inscription';
      }
    });
  }
}
