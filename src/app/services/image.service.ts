import { HttpClient } from "@angular/common/http";
import { ObjetToJsonService } from "./objet-to-json.service";
import { Observable, map } from "rxjs";
import { Image } from "../model/image";
import { imageRest } from "../env";
import { Injectable } from "@angular/core";
import { User } from "../model/user";

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

  public getByUser(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${imageRest}/user/${id}`);
  }

  public allImageByUser(user_Id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${imageRest}/user/${user_Id}`);
  }

  public Image1ByUser(user_Id: number): Observable<Image> {
    return this.http.get<Image>(`${imageRest}/user_image1/${user_Id}`);
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

  imageOctetsToURL(octets: Uint8Array){

    // Créer un Blob à partir du tableau Uint8Array
    const blob = new Blob([octets], { type: 'image/jpeg' });

    // Créer une URL Blob
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl
  }

  public imageStringToOctets(imageBytes: string){
    const base64String = imageBytes
    const binaryString = atob(base64String!);
    const uint8Array = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
      }
      return uint8Array
  }

  public imageStringToURL(imageBytes: string) {
    const octets = this.imageStringToOctets(imageBytes);
    return this.imageOctetsToURL(octets);
  }

}
