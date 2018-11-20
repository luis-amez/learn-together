import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './pages/quiz/quiz.component';

import { QuizService } from './services/quiz.service';
import { QuestionComponent } from './components/question/question.component';
import { ExploScreenComponent } from './pages/explo-screen/explo-screen.component';
import { QuizEndscreenComponent } from './pages/quiz-endscreen/quiz-endscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    ExploScreenComponent,
    QuizEndscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
