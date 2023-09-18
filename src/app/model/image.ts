import { User } from "./user";

export class Image {
  public get bytes(): Uint8Array | undefined {
    return this._bytes;
  }
  public set bytes(value: Uint8Array | undefined) {
    this._bytes = value;
  }
  public get user(): User | undefined {
    return this._user;
  }
  public set user(value: User | undefined) {
    this._user = value;
  }
  public get type(): string | undefined {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public get nom(): string | undefined {
    return this._nom;
  }
  public set nom(value: string | undefined) {
    this._nom = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  public constructor(
    private _id?: number,
    private _nom?: string,
    private _type?: string,
    private _bytes?: Uint8Array | undefined,
    private _user?: User
  ){}

}
