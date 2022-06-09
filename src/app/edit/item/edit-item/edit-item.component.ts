import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { Personnage } from 'src/app/model/personnage';
import { PersonnageService } from 'src/app/services/personnage.service';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  item: Item;
  personnage: Observable<Personnage[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private personnageService: PersonnageService
  ) {
    this.item = new Item();
    this.item.personnages = new Personnage();
    this.personnage = personnageService.getAll();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.itemService.getById(params['id']).subscribe((data) => {
          this.item = data;
        });
      }
    });
  }
  save() {
    if (this.item.id) {
      console.log('update');
      this.itemService.update(this.item).subscribe(() => {
        this.router.navigateByUrl('/admin/item/list');
      });
    } else {
      console.log('create');
      this.itemService.create(this.item).subscribe(() => {
        this.router.navigateByUrl('/admin/item/list');
      });
    }
  }
}
