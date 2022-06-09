import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monstre } from 'src/app/model/monstre';
import { MonstreService } from 'src/app/services/monstre.service';

@Component({
  selector: 'app-list-monstre',
  templateUrl: './list-monstre.component.html',
  styleUrls: ['./list-monstre.component.css'],
})
export class ListMonstreComponent implements OnInit {
  monstres: Observable<Monstre[]>;

  constructor(private monstreService: MonstreService) {
    this.monstres = monstreService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.monstreService.delete(id).subscribe(() => {
      this.monstres = this.monstreService.getAll();
    });
  }
}
