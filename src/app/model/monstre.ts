import { Attaque } from './attaque';

export class Monstre {
  public constructor(
    private _id?: number,
    private _nom?: string,
    private _description?: string,
    private _niveau?: number,
    private _classe?: string,
    private _defense?: number,
    private _pv?: number,
    private _pvMax?: number,
    private _Drop?: number,
    private _attaque?: Attaque
  ) {}
  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }
  get niveau(): number | undefined {
    return this._niveau;
  }

  set niveau(value: number | undefined) {
    this._niveau = value;
  }

  get classe(): string | undefined {
    return this._classe;
  }

  set classe(value: string | undefined) {
    this._classe = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get defense(): number | undefined {
    return this._defense;
  }

  set defense(value: number | undefined) {
    this._defense = value;
  }

  get pv(): number | undefined {
    return this._pv;
  }

  set pv(value: number | undefined) {
    this._pv = value;
  }

  get pvMax(): number | undefined {
    return this._pvMax;
  }

  set pvMax(value: number | undefined) {
    this._pvMax = value;
  }

  get drop(): number | undefined {
    return this._Drop;
  }

  set drop(value: number | undefined) {
    this._Drop = value;
  }

  get attaque(): Attaque | undefined {
    return this._attaque;
  }

  set attaque(value: Attaque | undefined) {
    this._attaque = value;
  }
}
