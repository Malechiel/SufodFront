import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private url: string = 'http://localhost:8080/sufod/api/ingredient';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.url);
  }

  public getById(id: number): Observable<Ingredient> {
    return this.httpClient.get<Ingredient>(`${this.url}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private moduleToJson(ingredient: Ingredient): any {
    let obj = {
      libelle: ingredient.libelle,
      description: ingredient.description,
      dropChance: ingredient.dropChance,
      type: 'ingredient',
    };
    if (ingredient.personnages?.id) {
      Object.assign(obj, { personnages: { id: ingredient.personnages?.id } });
    }
    if (ingredient.id) {
      Object.assign(obj, { id: ingredient.id });
    }
    return obj;
  }

  public update(ingredient: Ingredient): Observable<Ingredient> {
    return this.httpClient.put<Ingredient>(
      `${this.url}/${ingredient.id}`,
      this.moduleToJson(ingredient)
    );
  }
  public create(ingredient: Ingredient): Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(
      this.url,
      this.moduleToJson(ingredient)
    );
  }
}
