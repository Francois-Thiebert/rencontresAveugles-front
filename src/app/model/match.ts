import { User } from "./user";

export class Match {
    public get compatibilite(): number {
      return this._compatibilite;
    }
    public set compatibilite(value: number) {
      this._compatibilite = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get user2(): User {
        return this._user2;
    }
    public set user2(value: User) {
        this._user2 = value;
    }
    public get user1(): User {
        return this._user1;
    }
    public set user1(value: User) {
        this._user1 = value;
    }
    public get compteur(): number {
        return this._compteur;
    }
    public set compteur(value: number) {
        this._compteur = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    public constructor(
        private _id: number,
        private _date: Date,
        private _compteur: number,
        private _user1: User,
        private _user2: User,
        private _compatibilite: number,
    ){}

}
