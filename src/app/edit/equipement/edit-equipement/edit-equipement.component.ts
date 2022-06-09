import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/model/equipement';
import { Personnage } from 'src/app/model/personnage';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipementService } from 'src/app/services/equipement.service';
import { PersonnageService } from 'src/app/services/personnage.service';

@Component({
  selector: 'app-edit-equipement',
  templateUrl: './edit-equipement.component.html',
  styleUrls: ['./edit-equipement.component.css'],
})
export class EditEquipementComponent implements OnInit {
  equipement: Equipement;
  personnage: Observable<Personnage[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private equipementService: EquipementService,
    private personnageService: PersonnageService
  ) {
    this.equipement = new Equipement();
    this.equipement.personnages = new Personnage();
    this.personnage = personnageService.getAll();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.equipementService.getById(params['id']).subscribe((data) => {
          this.equipement = data;
        });
      }
    });
  }
  save() {
    if (this.equipement.id) {
      console.log('update');
      this.equipementService.update(this.equipement).subscribe(() => {
        this.router.navigateByUrl('/admin/equipement/list');
      });
    } else {
      console.log('create');
      this.equipementService.create(this.equipement).subscribe(() => {
        this.router.navigateByUrl('/admin/equipement/list');
      });
    }
  }
  Init(): void {}
}
