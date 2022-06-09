import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  url = 'http://localhost:8080/sufod/api/compte';

  constructor(private http: HttpClient) {}

  private moduleToJson(compte: Compte): any {
    let obj = {
      nom: compte.nom,
      prenom: compte.prenom,
      type: compte.type,
      pseudo: compte.pseudo,
      password: compte.mdp,
      mail: compte.mail,
    };
    if (compte.id) {
      Object.assign(obj, { id: compte.id });
    }
    console.log(obj);
    return obj;
  }

  public inscription(compte: any): Observable<Compte> {
    return this.http.post<Compte>(this.url, this.moduleToJson(compte));
  }

  public checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(this.url + '/pseudo/' + login);
  }
}
