import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Attaque } from 'src/app/model/attaque';
import { AttaqueService } from 'src/app/services/attaque.service';

@Component({
  selector: 'app-list-attaque',
  templateUrl: './list-attaque.component.html',
  styleUrls: ['./list-attaque.component.css'],
})
export class ListAttaqueComponent implements OnInit {
  attaques: Observable<Attaque[]>;
  constructor(private attaqueService: AttaqueService) {
    this.attaques = attaqueService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.attaqueService.delete(id).subscribe(() => {
      this.attaques = this.attaqueService.getAll();
    });
  }
}
