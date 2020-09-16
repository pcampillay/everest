import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCaptchaRoutingModule } from './page-captcha-routing.module';
import { PageCaptchaComponent } from './page-captcha.component';
import { PuertaAComponent } from '../puerta-a/puerta-a.component';
import { PuertaBComponent } from '../puerta-b/puerta-b.component';
import { PuertaCComponent } from '../puerta-c/puerta-c.component';



@NgModule({
  declarations: [
    PageCaptchaComponent,
    PuertaAComponent,
    PuertaBComponent,
    PuertaCComponent
  ],
  imports: [
    CommonModule,
    PageCaptchaRoutingModule
  ]
})
export class PageCaptchaModule { }
