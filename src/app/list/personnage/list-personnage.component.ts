import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from 'src/app/model/personnage';
import { Item } from 'src/app/model/item';
import { PersonnageService } from 'src/app/services/personnage.service';

@Component({
  selector: 'app-list-personnage',
  templateUrl: './list-personnage.component.html',
  styleUrls: ['./list-personnage.component.css'],
})
export class ListPersonnageComponent implements OnInit {
  personnages: Observable<Personnage[]>;

  constructor(private personnageService: PersonnageService) {
    this.personnages = personnageService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.personnageService.delete(id).subscribe(() => {
      this.personnages = this.personnageService.getAll();
    });
  }
}
