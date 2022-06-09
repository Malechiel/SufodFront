import { Monstre } from './monstre';
import { Personnage } from './personnage';
export class Attaque {
  public constructor(
    private _id?: number,
    private _nom?: string,
    private _degats?: number,
    private _type?: string,
    private _personnages?: Personnage,
    private _monstres?: Monstre
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

  get degats(): number | undefined {
    return this._degats;
  }

  set degats(value: number | undefined) {
    this._degats = value;
  }

  get type(): string | undefined {
    return this._type;
  }

  set type(value: string | undefined) {
    this._type = value;
  }

  get personnages(): Personnage | undefined {
    return this._personnages;
  }

  set personnages(value: Personnage | undefined) {
    this._personnages = value;
  }

  get monstres(): Monstre | undefined {
    return this._monstres;
  }

  set monstres(value: Monstre | undefined) {
    this._monstres = value;
  }
}
