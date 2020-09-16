import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptchaComponent } from './captcha/captcha.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: 'captcha/:id', component: CaptchaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
