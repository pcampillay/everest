import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaBComponent } from './puerta-b.component';

describe('PuertaBComponent', () => {
  let component: PuertaBComponent;
  let fixture: ComponentFixture<PuertaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertaBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
