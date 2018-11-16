import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './pages/quiz/quiz.component';

import { QuizService } from './services/quiz.service';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent
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
