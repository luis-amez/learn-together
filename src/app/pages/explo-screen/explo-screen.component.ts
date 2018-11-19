import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-explo-screen',
  templateUrl: './explo-screen.component.html',
  styleUrls: ['./explo-screen.component.css']
})
export class ExploScreenComponent implements OnInit {

  @Input() explonation: string;
  @Output() mouseClick = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
    // setTimeout(this.goToNextQuestion.bind(this), 2000); leaving this for now in case we get back to timeout
  }

  goToNextQuestion() {
    this.mouseClick.emit(true);
  }
}
