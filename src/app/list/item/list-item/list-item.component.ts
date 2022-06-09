import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  items: Observable<Item[]>;
  constructor(private itemService: ItemService) {
    this.items = itemService.getAll();
  }

  ngOnInit(): void {}

  delete(id: number) {
    this.itemService.delete(id).subscribe(() => {
      this.items = this.itemService.getAll();
    });
  }
}
