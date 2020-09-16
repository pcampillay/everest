import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pageCaptcha/:id', loadChildren: () => import('./page-captcha/page-captcha.module').then(m => m.PageCaptchaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
