import { Component, OnInit, Input } from '@angular/core';

import { ChirpService } from '../../services/chirp.service';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.css']
})
export class ChirpComponent implements OnInit {

  @Input() chirp: any;
  @Input() username: String;
  sharesLength: Number;
  user: String;

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.sharesLength = this.chirp.shares.length;
  }

  shareChirp() {
    this.chirpService.shareChirp(this.chirp._id)
      .then(data => {
        this.sharesLength = data.shares.length;
      });
  }

  deleteChirp() {
    this.chirpService.deleteChirp(this.chirp._id)
      .then(data => {
        this.chirp.deleteDate = data.deleteDate;
      });
  }
}
