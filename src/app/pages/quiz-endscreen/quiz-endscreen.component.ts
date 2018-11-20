import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-endscreen',
  templateUrl: './quiz-endscreen.component.html',
  styleUrls: ['./quiz-endscreen.component.css']
})
export class QuizEndscreenComponent implements OnInit {

  @Output() mouseClick = new EventEmitter<boolean>();
  @Input() score: number;

  quizEndText = `You'd better score more points next time or else...\n\nYour score is: `; //${this.score}
 // \n doesn't work
  constructor() { }

  ngOnInit() {
  }

  resetQuiz() {
    this.mouseClick.emit(true);
  }
}
