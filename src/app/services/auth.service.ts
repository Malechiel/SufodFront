import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public auth(pseudo: string, password: string): Observable<Compte> {
    let monHeaders = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${pseudo}:${password}`),
    });
    return this.httpClient.get<Compte>('http://localhost:8080/sufod/api/auth', {
      headers: monHeaders,
    });
  }

  public get authenticated(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  constructor(private httpClient: HttpClient) {}
}
