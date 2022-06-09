import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTermesComponent } from './pages-termes.component';

describe('PagesTermesComponent', () => {
  let component: PagesTermesComponent;
  let fixture: ComponentFixture<PagesTermesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTermesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
