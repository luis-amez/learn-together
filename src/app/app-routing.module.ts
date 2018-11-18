import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsLoggedGuard } from './guards/is-logged.guard';
import { NotLoggedGuard } from './guards/not-logged.guard';

import { QuizComponent } from './pages/quiz/quiz.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChirpPageComponent } from './pages/chirp-page/chirp-page.component';

const routes: Routes = [
  { path: 'login',  component: LoginPageComponent, canActivate: [ NotLoggedGuard ] },
  { path: '',  component: QuizComponent, canActivate: [ IsLoggedGuard ] },
  { path: 'chirp',  component: ChirpPageComponent, canActivate: [ IsLoggedGuard ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
