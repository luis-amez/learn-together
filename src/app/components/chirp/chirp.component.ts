import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.css']
})
export class ChirpComponent implements OnInit {

  @Input() chirp: any;

  constructor() { }

  ngOnInit() {
  }

}
