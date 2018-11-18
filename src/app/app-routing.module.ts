import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsLoggedGuard } from './guards/is-logged.guard';
import { NotLoggedGuard } from './guards/not-logged.guard';

import { QuizComponent } from './pages/quiz/quiz.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '',  component: QuizComponent, canActivate: [ IsLoggedGuard ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ NotLoggedGuard ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
