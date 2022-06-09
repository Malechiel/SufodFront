import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css'],
})
export class ListIngredientComponent implements OnInit {
  ingredients: Observable<Ingredient[]>;
  constructor(private ingredientService: IngredientService) {
    this.ingredients = ingredientService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.ingredientService.delete(id).subscribe(() => {
      this.ingredients = this.ingredientService.getAll();
    });
  }
}
