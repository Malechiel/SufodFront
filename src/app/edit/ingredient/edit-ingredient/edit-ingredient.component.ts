import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { Personnage } from 'src/app/model/personnage';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { PersonnageService } from 'src/app/services/personnage.service';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.css'],
})
export class EditIngredientComponent implements OnInit {
  ingredient: Ingredient;
  personnage: Observable<Personnage[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientService,
    private personnageService: PersonnageService
  ) {
    this.ingredient = new Ingredient();
    this.ingredient.personnages = new Personnage();
    this.personnage = personnageService.getAll();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.ingredientService.getById(params['id']).subscribe((data) => {
          this.ingredient = data;
        });
      }
    });
  }
  save() {
    if (this.ingredient.id) {
      console.log('update');
      this.ingredientService.update(this.ingredient).subscribe(() => {
        this.router.navigateByUrl('/admin/ingredient/list');
      });
    } else {
      console.log('create');
      this.ingredientService.create(this.ingredient).subscribe(() => {
        this.router.navigateByUrl('/admin/ingredient/list');
      });
    }
  }
  Init(): void {}
}
