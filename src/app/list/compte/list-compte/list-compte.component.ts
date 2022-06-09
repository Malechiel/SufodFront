import { CompteService } from 'src/app/services/compte.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/compte';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css'],
})
export class ListCompteComponent implements OnInit {
  comptes: Observable<Compte[]>;
  etat = '';
  constructor(private compteService: CompteService) {
    this.comptes = compteService.getAll();
  }

  ngOnInit(): void {}
  creation() {
    this.etat = 'create';
  }
  edition() {
    this.etat = 'update';
  }
  delete(id: number) {
    this.compteService.delete(id).subscribe(() => {
      this.comptes = this.compteService.getAll();
    });
  }
}
