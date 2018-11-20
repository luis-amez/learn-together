import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Array<any>;
  question: any;
  index = 0;
  score = 0;
  isAnswered = false;
  isUserCurious = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.quizService.getQuestions()
      .then(data => {
        this.questions = data;
        this.question = this.questions[0];
      });
  }

  onSelected(rightAsnwer: boolean) {
    if (rightAsnwer) {
      this.score++;
    }
    setTimeout(this.questionExplonationJumper.bind(this), 1000);

  }

  nextQuestion(): void {
    this.index++;
    this.question = this.questions[this.index];
    this.questionExplonationJumper();
    this.isUserCurious = false;;
  }

  questionExplonationJumper() {
    this.isAnswered = !this.isAnswered;
  }

  showExplonations() {
    this.isUserCurious = !this.isUserCurious;
  }

  getExplonation(): void {
    return this.questions[this.index].explonation;
  }
}
