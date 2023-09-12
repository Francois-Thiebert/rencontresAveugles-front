import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObjetToJsonService } from "./objet-to-json.service";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { userRest } from "../env";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private convert: ObjetToJsonService) { }

  public allUser(): Observable<User[]> {
    return this.http.get<User[]>(userRest);
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${userRest}/all/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${userRest}/${id}`);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(
      `${userRest}/${user.id}`,
      this.convert.userToJson(user)
    );
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(
      userRest,
      this.convert.userToJson(user)
    );
  }

}
