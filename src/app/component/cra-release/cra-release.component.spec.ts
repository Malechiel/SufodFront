import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraReleaseComponent } from './cra-release.component';

describe('CraReleaseComponent', () => {
  let component: CraReleaseComponent;
  let fixture: ComponentFixture<CraReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
