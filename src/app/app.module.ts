import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './pages/quiz/quiz.component';

import { QuestionComponent } from './components/question/question.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChirpPageComponent } from './pages/chirp-page/chirp-page.component';
import { ChirpComponent } from './components/chirp/chirp.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    LoginPageComponent,
    ChirpPageComponent,
    ChirpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
