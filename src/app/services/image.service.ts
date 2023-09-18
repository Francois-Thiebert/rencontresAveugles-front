import { HttpClient } from "@angular/common/http";
import { ObjetToJsonService } from "./objet-to-json.service";
import { Observable } from "rxjs";
import { Image } from "../model/image";
import { imageRest } from "../env";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  constructor(private http: HttpClient, private convert: ObjetToJsonService) { }

  public getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(imageRest);
  }

  public getById(id: number): Observable<Image> {
    return this.http.get<Image>(`${imageRest}/${id}`);
  }

  public getByUser(id: number): Observable<Image> {
    return this.http.get<Image>(`${imageRest}/all/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${imageRest}/${id}`);
  }

  public update(image: Image): Observable<Image> {
    return this.http.put<Image>(
      `${imageRest}/${image.id}`,
      this.convert.imageToJson(image)
    );
  }

  public create(image: Image): Observable<Image> {
    return this.http.post<Image>(
      imageRest,
      this.convert.imageToJson(image)
    );
  }
}
