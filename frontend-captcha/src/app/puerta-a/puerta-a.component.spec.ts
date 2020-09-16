import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaAComponent } from './puerta-a.component';

describe('PuertaAComponent', () => {
  let component: PuertaAComponent;
  let fixture: ComponentFixture<PuertaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
