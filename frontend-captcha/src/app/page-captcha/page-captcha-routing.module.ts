import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCaptchaComponent } from './page-captcha.component';
import { PuertaAComponent } from '../puerta-a/puerta-a.component';
import { PuertaBComponent } from '../puerta-b/puerta-b.component';
import { PuertaCComponent } from '../puerta-c/puerta-c.component';

const routes: Routes = [
  { path: '', component: PageCaptchaComponent ,
    children: [
      { path: 'puerta-a', component: PuertaAComponent},
      { path: 'puerta-b', component: PuertaBComponent}, 
      { path: 'puerta-c', component: PuertaCComponent}  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCaptchaRoutingModule { }
