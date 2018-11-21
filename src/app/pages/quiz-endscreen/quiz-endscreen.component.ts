import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-endscreen',
  templateUrl: './quiz-endscreen.component.html',
  styleUrls: ['./quiz-endscreen.component.css']
})
export class QuizEndscreenComponent implements OnInit {

  @Output() mouseClick = new EventEmitter<boolean>();
  @Input() score: number;

  quizEndText = `Qui evertitur deseruisse te. Ius et quem augue repudiare, tale omnes ius at. Percipit imperdiet te mel, alia dissentias ut duo. Te vel simul antiopam consectetuer. Probo lucilius id vis. Eam congue blandit inimicus ea. <br><br>Your score is: `; //${this.score}
 // \n doesn't work
  constructor() { }

  ngOnInit() {
  }

  resetQuiz() {
    this.mouseClick.emit(true);
  }
}
