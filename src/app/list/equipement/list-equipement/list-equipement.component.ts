import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.css'],
})
export class ListEquipementComponent implements OnInit {
  equipements: Observable<Equipement[]>;
  constructor(private equipementService: EquipementService) {
    this.equipements = equipementService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.equipementService.delete(id).subscribe(() => {
      this.equipements = this.equipementService.getAll();
    });
  }
}
