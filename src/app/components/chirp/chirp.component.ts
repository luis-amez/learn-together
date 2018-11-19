import { Component, OnInit, Input } from '@angular/core';

import { ChirpService } from '../../services/chirp.service';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.css']
})
export class ChirpComponent implements OnInit {

  @Input() chirp: any;

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
  }

  shareChirp() {
    this.chirpService.shareChirp(this.chirp._id)
      .then(data => {
        // Update display
      });
  }
}
