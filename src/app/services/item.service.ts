import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private url: string = 'http://localhost:8080/sufod/api/item';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url);
  }

  public getById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.url}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(item: Item): any {
    let obj = {
      libelle: item.libelle,
      description: item.description,
      dropChance: item.dropChance,
    };
    if (item.personnages?.id) {
      Object.assign(obj, { personnages: { id: item.personnages?.id } });
    }
    if (item.id) {
      Object.assign(obj, { id: item.id });
    }

    console.log(obj);
    return obj;
  }

  public update(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(
      `${this.url}/${item.id}`,
      this.moduleToJson(item)
    );
  }
  public create(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.url, this.moduleToJson(item));
  }
}
