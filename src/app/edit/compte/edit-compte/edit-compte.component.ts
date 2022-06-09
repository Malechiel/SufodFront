import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/model/compte';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.css'],
})
export class EditCompteComponent implements OnInit {
  compte: Compte;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private compteService: CompteService
  ) {
    this.compte = new Compte();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.compteService.getById(params['id']).subscribe((data) => {
          this.compte = data;
        });
      }
    });
  }
  save() {
    if (this.compte.id) {
      console.log('update');
      this.compteService.update(this.compte).subscribe(() => {
        this.router.navigateByUrl('/admin/compte/list');
      });
    } else {
      console.log('create');
      this.compteService.create(this.compte).subscribe(() => {
        this.router.navigateByUrl('/admin/compte/list');
      });
    }
  }
}
