import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCaptchaComponent } from './page-captcha.component';

describe('PageCaptchaComponent', () => {
  let component: PageCaptchaComponent;
  let fixture: ComponentFixture<PageCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
