import { User } from "./user";

export class Message {
    public get contenu(): String | undefined{
        return this._contenu;
    }
    public set contenu(value: String | undefined) {
        this._contenu = value;
    }
    public get date(): Date | undefined {
        return this._date;
    }
    public set date(value: Date | undefined) {
        this._date = value;
    }
    public get destinataire(): User | undefined {
        return this._destinataire;
    }
    public set destinataire(value: User | undefined) {
        this._destinataire = value;
    }
    public get emetteur(): User | undefined {
        return this._emetteur;
    }
    public set emetteur(value: User | undefined) {
        this._emetteur = value;
    }
    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }
    public constructor(
        private _id?: number,
        private _emetteur?: User,
        private _destinataire?: User,
        private _date?: Date,
        private _contenu?: String
    ){}
}
