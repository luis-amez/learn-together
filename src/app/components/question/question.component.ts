import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  style = 'default';
  currentOption: string;

  constructor() { }

  ngOnInit() {
  }

  onOptionClicked(option: string): void {
    if (this.currentOption) {
      return;
    }
    this.currentOption = option;
    if (option === this.question.correctAnswer) {
      this.style = 'right-answer';
    } else {
      this.style = 'wrong-answer';
    }
  }

  isOptionClicked(option) {
    if (!this.currentOption) {
      return 'default';
    }
    if (option === this.question.correctAnswer) {
      return 'right-answer';
    }
    return this.currentOption ===  option ? this.style : 'default';
  }
}
