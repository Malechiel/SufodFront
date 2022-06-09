import { Item } from './item';
import { Personnage } from './personnage';

export class Equipement {
  public constructor(
    private _id?: number,
    private _libelle?: string,
    private _description?: string,
    private _dropChance?: number,
    private _personnages?: Personnage,
    private _pv?: number,
    private _defense?: number,
    private _attaque?: number,
    private _localisation?: string
  ) {}
  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get libelle(): string | undefined {
    return this._libelle;
  }

  set libelle(value: string | undefined) {
    this._libelle = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get dropChance(): number | undefined {
    return this._dropChance;
  }

  set dropChance(value: number | undefined) {
    this._dropChance = value;
  }

  get personnages(): Personnage | undefined {
    return this._personnages;
  }

  set personnages(value: Personnage | undefined) {
    this._personnages = value;
  }
  get pv(): number | undefined {
    return this._pv;
  }

  set pv(value: number | undefined) {
    this._pv = value;
  }

  get defense(): number | undefined {
    return this._defense;
  }

  set defense(value: number | undefined) {
    this._defense = value;
  }

  get attaque(): number | undefined {
    return this._attaque;
  }

  set attaque(value: number | undefined) {
    this._attaque = value;
  }

  get localisation(): string | undefined {
    return this._localisation;
  }

  set localisation(value: string | undefined) {
    this._localisation = value;
  }
}
