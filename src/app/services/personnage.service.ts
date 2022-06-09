import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnage } from '../model/personnage';

@Injectable({
  providedIn: 'root',
})
export class PersonnageService {
  private url: string = 'http://localhost:8080/sufod/api/personnage';
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Personnage[]> {
    return this.httpClient.get<Personnage[]>(this.url);
  }

  public getById(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(`${this.url}/${id}`);
  }

  public getPersonnageByAttaqueId(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(`${this.url}/attaque/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(personnage: Personnage): any {
    let obj = {
      nom: personnage.nom,
      description: personnage.description,
      niveau: personnage.niveau,
      classe: personnage.classe,
      defense: personnage.defense,
      pv: personnage.pv,
      pvMax: personnage.pvMax,
      xp: personnage.xp,
    };
    if (personnage.attaque?.id) {
      Object.assign(obj, { attaque: { id: personnage.attaque?.id } });
    }
    if (personnage.compte?.id) {
      Object.assign(obj, {
        compte: { id: personnage.compte?.id, type: personnage.compte?.type },
      });
    }
    if (personnage.items?.id) {
      Object.assign(obj, {
        items: { id: personnage.items?.id, type: personnage.items?.type },
      });
    }
    if (personnage.id) {
      Object.assign(obj, { id: personnage.id });
    }
    console.log(obj);
    return obj;
  }

  public update(personnage: Personnage): Observable<Personnage> {
    return this.httpClient.put<Personnage>(
      `${this.url}/${personnage.id}`,
      this.moduleToJson(personnage)
    );
  }
  public create(personnage: Personnage): Observable<Personnage> {
    return this.httpClient.post<Personnage>(
      this.url,
      this.moduleToJson(personnage)
    );
  }
}
