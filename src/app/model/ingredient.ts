import { Personnage } from './personnage';

export class Ingredient {
  public constructor(
    private _id?: number,
    private _libelle?: string,
    private _description?: string,
    private _dropChance?: number,
    private _personnages?: Personnage
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
}
