import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-endscreen',
  templateUrl: './quiz-endscreen.component.html',
  styleUrls: ['./quiz-endscreen.component.css']
})
export class QuizEndscreenComponent implements OnInit {

  @Output() mouseClick = new EventEmitter<boolean>();;

  constructor() { }

  ngOnInit() {
  }

  resetQuiz() {
    this.mouseClick.emit(true);
  }
}
