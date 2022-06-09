export class Compte {
  public constructor(
    private _id?: number,
    private _prenom?: string,
    private _nom?: string,
    private _pseudo?: string,
    private _mail?: string,
    private _type?: string,
    private _mdp?: string
  ) {}

  get mdp(): string | undefined {
    return this._mdp;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }
  get prenom(): string | undefined {
    return this._prenom;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get pseudo(): string | undefined {
    return this._pseudo;
  }

  set pseudo(value: string | undefined) {
    this._pseudo = value;
  }

  get mail(): string | undefined {
    return this._mail;
  }

  set mail(value: string | undefined) {
    this._mail = value;
  }

  get type(): string | undefined {
    return this._type;
  }

  set type(value: string | undefined) {
    this._type = value;
  }
}
