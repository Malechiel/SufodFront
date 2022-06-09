import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopenrageComponent } from './iopenrage.component';

describe('IopenrageComponent', () => {
  let component: IopenrageComponent;
  let fixture: ComponentFixture<IopenrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopenrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopenrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
