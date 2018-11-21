import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  @Input() question: any;
  @Output() selected = new EventEmitter<boolean>();
  style = 'default';
  currentOption: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.style = 'default';
    this.currentOption = '';
  }

  onOptionClicked(option: string): void {
    if (this.currentOption) {
      return;
    }
    this.currentOption = option;
    if (option === this.question.correctAnswer) {
      this.style = 'right-answer';
      this.selected.emit(true);
    } else {
      this.style = 'wrong-answer';
      this.selected.emit(false);
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

  getGifURL() {
    return this.question.gifImage;
  }
}
