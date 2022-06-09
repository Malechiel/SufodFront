import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipement } from '../model/equipement';
@Injectable({
  providedIn: 'root',
})
export class EquipementService {
  private url: string = 'http://localhost:8080/sufod/api/equipement';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Equipement[]> {
    return this.httpClient.get<Equipement[]>(this.url);
  }

  public getById(id: number): Observable<Equipement> {
    return this.httpClient.get<Equipement>(`${this.url}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(equipement: Equipement): any {
    let obj = {
      libelle: equipement.libelle,
      description: equipement.description,
      dropChance: equipement.dropChance,
      pv: equipement.pv,
      defense: equipement.defense,
      attaque: equipement.attaque,
      localisation: equipement.localisation,
      type: 'equipement',
    };
    if (equipement.personnages?.id) {
      Object.assign(obj, { personnages: { id: equipement.personnages?.id } });
    }
    if (equipement.id) {
      Object.assign(obj, { id: equipement.id });
    }
    console.log(obj);
    return obj;
  }

  public update(equipement: Equipement): Observable<Equipement> {
    return this.httpClient.put<Equipement>(
      `${this.url}/${equipement.id}`,
      this.moduleToJson(equipement)
    );
  }
  public create(equipement: Equipement): Observable<Equipement> {
    return this.httpClient.post<Equipement>(
      this.url,
      this.moduleToJson(equipement)
    );
  }
}
