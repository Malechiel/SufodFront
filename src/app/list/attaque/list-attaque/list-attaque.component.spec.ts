import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttaqueComponent } from './list-attaque.component';

describe('ListAttaqueComponent', () => {
  let component: ListAttaqueComponent;
  let fixture: ComponentFixture<ListAttaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAttaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
