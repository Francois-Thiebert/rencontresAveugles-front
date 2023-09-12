
export class Reponses {
    public get id(): number | undefined{
      return this._id;
    }
    public set id(value: number | undefined) {
      this._id = value;
    }
    public get reponse6(): number | undefined {
        return this._reponse6;
    }
    public set reponse6(value: number | undefined) {
        this._reponse6 = value;
    }
    public get reponse5(): number | undefined {
        return this._reponse5;
    }
    public set reponse5(value: number | undefined) {
        this._reponse5 = value;
    }
    public get reponse4(): number | undefined {
        return this._reponse4;
    }
    public set reponse4(value: number | undefined) {
        this._reponse4 = value;
    }
    public get reponse3(): number | undefined {
        return this._reponse3;
    }
    public set reponse3(value: number | undefined) {
        this._reponse3 = value;
    }
    public get reponse2(): number | undefined {
        return this._reponse2;
    }
    public set reponse2(value: number | undefined) {
        this._reponse2 = value;
    }
    public get reponse1(): number | undefined {
        return this._reponse1;
    }
    public set reponse1(value: number | undefined) {
        this._reponse1 = value;
    }
    public constructor(
        private _id?: number,
        private _reponse1?: number,
        private _reponse2?: number,
        private _reponse3?: number,
        private _reponse4?: number,
        private _reponse5?: number,
        private _reponse6?: number,
    ){}
}
