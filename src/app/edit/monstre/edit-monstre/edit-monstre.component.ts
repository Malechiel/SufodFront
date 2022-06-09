import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Monstre } from './../../../model/monstre';
import { Attaque } from 'src/app/model/attaque';

import { AttaqueService } from 'src/app/services/attaque.service';
import { MonstreService } from 'src/app/services/monstre.service';

@Component({
  selector: 'app-edit-monstre',
  templateUrl: './edit-monstre.component.html',
  styleUrls: ['./edit-monstre.component.css'],
})
export class EditMonstreComponent implements OnInit {
  monstre: Monstre;
  attaque: Observable<Attaque[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private attaqueService: AttaqueService,
    private monstreService: MonstreService
  ) {
    this.monstre = new Monstre();
    this.monstre.attaque = new Attaque();
    this.attaque = attaqueService.getAll();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.monstreService.getById(params['id']).subscribe((data) => {
          this.monstre = data;
        });
      }
    });
  }
  save() {
    if (this.monstre.id) {
      console.log('update');
      this.monstreService.update(this.monstre).subscribe(() => {
        this.router.navigateByUrl('/admin/monstre/list');
      });
    } else {
      console.log('create');
      this.monstreService.create(this.monstre).subscribe(() => {
        this.router.navigateByUrl('/admin/monstre/list');
      });
    }
  }
}
