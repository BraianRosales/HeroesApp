import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeContentCardComponent } from './heroe-content-card.component';

describe('HeroeContentCardComponent', () => {
  let component: HeroeContentCardComponent;
  let fixture: ComponentFixture<HeroeContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
