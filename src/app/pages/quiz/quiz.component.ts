import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: Object;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.quizService.getQuestions()
      .then(data => {
        this.question = data;
      });
  }

}
