import { Observable } from 'rxjs/internal/Observable';
import { Match } from '../model/match';
import { ObjetToJsonService } from './objet-to-json.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { matchRest } from '../env';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
constructor(private http: HttpClient, private convert: ObjetToJsonService) { }

  public allMatch(): Observable<Match[]> {
    return this.http.get<Match[]>(matchRest);
  }

  public allMatchUser(userId: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${matchRest}/all/${userId}`);
  }

  public allMatchUser1(userId: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${matchRest}/all_user1/${userId}`);
  }

  public allMatchUser2(userId: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${matchRest}/all_user2/${userId}`);
  }

  public getByTwoUsers(idUser1: number, idUser2: number): Observable<Match> {
    return this.http.get<Match>(`${matchRest}/user1/${idUser1}/user2/${idUser2}`);
  }

  public getById(id: number): Observable<Match> {
    return this.http.get<Match>(`${matchRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${matchRest}/${id}`);
  }

  public update(match: Match): Observable<Match> {
    return this.http.put<Match>(
      `${matchRest}/${match.id}`,
      this.convert.matchToJson(match)
    );
  }

  public create(match: Match): Observable<Match> {
    return this.http.post<Match>(
      matchRest,
      this.convert.matchToJson(match)
    );
  }
}
