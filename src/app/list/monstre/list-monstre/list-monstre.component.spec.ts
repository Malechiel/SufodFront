import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonstreComponent } from './list-monstre.component';

describe('ListMonstreComponent', () => {
  let component: ListMonstreComponent;
  let fixture: ComponentFixture<ListMonstreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMonstreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
