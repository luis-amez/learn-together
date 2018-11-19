import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-chirp',
  templateUrl: './post-chirp.component.html',
  styleUrls: ['./post-chirp.component.css']
})
export class PostChirpComponent implements OnInit {

  @Output() content = new EventEmitter<string>();
  feedbackEnabled = false;
  error = null;
  username: string;
  password: string;
  chirpContent: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.content.emit(this.chirpContent);
      this.feedbackEnabled = false;
      this.chirpContent = '';
    }
  }
}
