import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaCComponent } from './puerta-c.component';

describe('PuertaCComponent', () => {
  let component: PuertaCComponent;
  let fixture: ComponentFixture<PuertaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
