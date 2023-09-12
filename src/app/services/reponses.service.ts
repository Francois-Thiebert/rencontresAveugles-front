import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjetToJsonService } from './objet-to-json.service';
import { Reponses } from '../model/reponses';
import { Observable } from 'rxjs';
import { reponsesRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class ReponsesService {

  constructor(private http: HttpClient, private convert: ObjetToJsonService) { }

  public allReponses(): Observable<Reponses[]> {
    return this.http.get<Reponses[]>(reponsesRest);
  }

  public getById(id: number): Observable<Reponses> {
    return this.http.get<Reponses>(`${reponsesRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${reponsesRest}/${id}`);
  }

  public update(reponses: Reponses): Observable<Reponses> {
    return this.http.put<Reponses>(
      `${reponsesRest}/${reponses.id}`,
      this.convert.reponsesToJson(reponses)
    );
  }

  public create(reponses: Reponses): Observable<Reponses> {
    return this.http.post<Reponses>(
      reponsesRest,
      this.convert.reponsesToJson(reponses)
    );
  }
}
