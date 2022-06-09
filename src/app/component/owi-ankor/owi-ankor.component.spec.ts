import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwiAnkorComponent } from './owi-ankor.component';

describe('OwiAnkorComponent', () => {
  let component: OwiAnkorComponent;
  let fixture: ComponentFixture<OwiAnkorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwiAnkorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwiAnkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
