import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Attaque } from '../model/attaque';

@Injectable({
  providedIn: 'root',
})
export class AttaqueService {
  private url: string = 'http://localhost:8080/sufod/api/attaque';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Attaque[]> {
    return this.httpClient.get<Attaque[]>(this.url);
  }

  public getById(id: number): Observable<Attaque> {
    return this.httpClient.get<Attaque>(`${this.url}/${id}`);
  }

  /*public getByType(type: string): Observable<Attaque> {
    return this.httpClient.get<Attaque>(`${this.url}/type/${type}`);
  }*/

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(attaque: Attaque): any {
    let obj = {
      nom: attaque.nom,
      degats: attaque.degats,
      type: attaque.type,
    };
    if (attaque.personnages?.id) {
      Object.assign(obj, { attaque: { id: attaque.personnages?.id } });
    }
    if (attaque.monstres?.id) {
      Object.assign(obj, { compte: { id: attaque.monstres?.id } });
    }
    if (attaque.id) {
      Object.assign(obj, { id: attaque.id });
    }
    return obj;
  }

  public update(attaque: Attaque): Observable<Attaque> {
    return this.httpClient.put<Attaque>(
      `${this.url}/${attaque.id}`,
      this.moduleToJson(attaque)
    );
  }

  public create(attaque: Attaque): Observable<Attaque> {
    return this.httpClient.post<Attaque>(this.url, this.moduleToJson(attaque));
  }
}
