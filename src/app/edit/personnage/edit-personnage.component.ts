import { Observable } from 'rxjs';
import { Personnage } from 'src/app/model/personnage';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { Compte } from 'src/app/model/compte';
import { Attaque } from 'src/app/model/attaque';
import { ActivatedRoute, Router } from '@angular/router';
import { AttaqueService } from 'src/app/services/attaque.service';
import { CompteService } from 'src/app/services/compte.service';
import { ItemService } from 'src/app/services/item.service';
import { PersonnageService } from 'src/app/services/personnage.service';

@Component({
  selector: 'app-edit-personnage',
  templateUrl: './edit-personnage.component.html',
  styleUrls: ['./edit-personnage.component.css'],
})
export class EditPersonnageComponent implements OnInit {
  personnage: Personnage;
  attaque: Observable<Attaque[]>;
  compte: Observable<Compte[]>;
  items: Observable<Item[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private attaqueService: AttaqueService,
    private compteService: CompteService,
    private itemsServices: ItemService,
    private personnageService: PersonnageService
  ) {
    this.personnage = new Personnage();
    this.personnage.attaque = new Attaque();
    this.personnage.compte = new Compte();
    this.personnage.items = new Item();
    this.items = itemsServices.getAll();
    this.attaque = attaqueService.getAll();
    this.compte = compteService.getAll();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.personnageService.getById(params['id']).subscribe((data) => {
          this.personnage = data;
        });
      }
    });
  }
  save() {
    if (this.personnage.id) {
      console.log('update');
      this.personnageService.update(this.personnage).subscribe(() => {
        this.router.navigateByUrl('/admin/personnage/list');
      });
    } else {
      console.log('create');
      this.personnageService.create(this.personnage).subscribe(() => {
        this.router.navigateByUrl('/admin/personnage/list');
      });
    }
  }
}
