import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Monstre } from '../model/monstre';

@Injectable({
  providedIn: 'root',
})
export class MonstreService {
  private url: string = 'http://localhost:8080/sufod/api/monstre';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Monstre[]> {
    return this.httpClient.get<Monstre[]>(this.url);
  }

  public getById(id: number): Observable<Monstre> {
    return this.httpClient.get<Monstre>(`${this.url}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(monstre: Monstre): any {
    let obj = {
      nom: monstre.nom,
      description: monstre.description,
      niveau: monstre.niveau,
      classe: monstre.classe,
      defense: monstre.defense,
      pv: monstre.pv,
      pvMax: monstre.pvMax,
      drop: monstre.drop,
    };
    if (monstre.attaque?.id) {
      Object.assign(obj, { attaque: { id: monstre.attaque?.id } });
    }
    if (monstre.id) {
      Object.assign(obj, { id: monstre.id });
    }
    console.log(obj);
    return obj;
  }

  public update(monstre: Monstre): Observable<Monstre> {
    return this.httpClient.put<Monstre>(
      `${this.url}/${monstre.id}`,
      this.moduleToJson(monstre)
    );
  }

  public create(monstre: Monstre): Observable<Monstre> {
    return this.httpClient.post<Monstre>(this.url, this.moduleToJson(monstre));
  }
}
