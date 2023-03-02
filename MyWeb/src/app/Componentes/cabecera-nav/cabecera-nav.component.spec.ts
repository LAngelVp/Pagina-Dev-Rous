import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraNavComponent } from './cabecera-nav.component';

describe('CabeceraNavComponent', () => {
  let component: CabeceraNavComponent;
  let fixture: ComponentFixture<CabeceraNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
