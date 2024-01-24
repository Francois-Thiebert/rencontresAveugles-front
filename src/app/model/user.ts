import { Image } from "./image";
import { Reponses } from "./reponses";
import { Role } from "./role";

export class User {
  public get photos(): Image[] | undefined{
    return this._photos;
  }
  public set photos(value: Image[] | undefined) {
    this._photos = value;
  }
  public get password(): String | undefined{
    return this._password;
  }
  public set password(value: String | undefined) {
    this._password = value;
  }
  public get id(): number | undefined{
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public get role(): Role | undefined {
    return this._role;
  }
  public set role(value: Role | undefined) {
    this._role = value;
  }
  public get reponse(): Reponses | undefined {
    return this._reponse;
  }
  public set reponse(value: Reponses | undefined) {
    this._reponse = value;
  }
  public get prenom(): string{
    return this._prenom;
  }
  public set prenom(value: string) {
    this._prenom = value;
  }
  public get login(): String | undefined {
    return this._login;
  }
  public set login(value: String | undefined) {
    this._login = value;
  }
  public get age(): number | undefined {
    return this._age;
  }
  public set age(value: number | undefined) {
    this._age = value;
  }

  public constructor(
    private _prenom: string,
    private _id?: number,
    private _age?: number,
    private _login?: String,
    private _password?: String,
    private _reponse?: Reponses,
    private _role?: Role,
    private _photos?: Image[],
){}



}
