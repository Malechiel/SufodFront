import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private url: string = 'http://localhost:8080/sufod/api/compte';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.url);
  }

  public getById(id: number): Observable<Compte> {
    return this.httpClient.get<Compte>(`${this.url}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(compte: Compte): any {
    let obj = {
      prenom: compte.prenom,
      nom: compte.nom,
      pseudo: compte.pseudo,
      mail: compte.mail,
      type: compte.type,
    };
    if (compte.id) {
      Object.assign(obj, { id: compte.id });
    }
    if (compte.mail) {
      Object.assign(obj, { mail: compte.mail });
    }

    console.log(obj);
    return obj;
  }

  public update(compte: Compte): Observable<Compte> {
    return this.httpClient.put<Compte>(
      `${this.url}/${compte.id}`,
      this.moduleToJson(compte)
    );
  }
  public create(compte: Compte): Observable<Compte> {
    return this.httpClient.post<Compte>(this.url, this.moduleToJson(compte));
  }
}
