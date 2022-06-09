import { Attaque } from './attaque';
import { Compte } from './compte';
import { Item } from './item';

export class Personnage {
  public constructor(
    private _id?: number,
    private _nom?: string,
    private _description?: string,
    private _niveau?: number,
    private _classe?: string,
    private _defense?: number,
    private _pv?: number,
    private _pvMax?: number,
    private _xp?: number,
    private _compte?: Compte,
    private _attaque?: Attaque,
    private _items?: Item
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
  get xp(): number | undefined {
    return this._xp;
  }

  set xp(value: number | undefined) {
    this._xp = value;
  }
  get compte(): Compte | undefined {
    return this._compte;
  }

  set compte(value: Compte | undefined) {
    this._compte = value;
  }

  get attaque(): Attaque | undefined {
    return this._attaque;
  }

  set attaque(value: Attaque | undefined) {
    this._attaque = value;
  }

  get items(): Item | undefined {
    return this._items;
  }

  set items(value: Item | undefined) {
    this._items = value;
  }
}
