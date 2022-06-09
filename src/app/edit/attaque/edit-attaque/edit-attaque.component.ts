import { Observable } from 'rxjs';
import { Attaque } from './../../../model/attaque';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttaqueService } from 'src/app/services/attaque.service';
import { Monstre } from 'src/app/model/monstre';
import { Personnage } from 'src/app/model/personnage';
import { PersonnageService } from 'src/app/services/personnage.service';
import { MonstreService } from 'src/app/services/monstre.service';

@Component({
  selector: 'app-edit-attaque',
  templateUrl: './edit-attaque.component.html',
  styleUrls: ['./edit-attaque.component.css'],
})
export class EditAttaqueComponent implements OnInit {
  attaque: Attaque;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private attaqueService: AttaqueService
  ) {
    this.attaque = new Attaque();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.attaqueService.getById(params['id']).subscribe((data) => {
          this.attaque = data;
        });
      }
    });
  }
  save() {
    if (this.attaque.id) {
      console.log('update');
      this.attaqueService.update(this.attaque).subscribe(() => {
        this.router.navigateByUrl('/admin/attaque/list');
      });
    } else {
      console.log('create');
      this.attaqueService.create(this.attaque).subscribe(() => {
        this.router.navigateByUrl('/admin/attaque/list');
      });
    }
  }
}
