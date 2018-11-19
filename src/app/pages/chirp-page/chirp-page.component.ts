import { Component, OnInit } from '@angular/core';

import { ChirpService } from '../../services/chirp.service';

@Component({
  selector: 'app-chirp-page',
  templateUrl: './chirp-page.component.html',
  styleUrls: ['./chirp-page.component.css']
})
export class ChirpPageComponent implements OnInit {

  chirps: Array<any>;

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.getChirps();
  }

  getChirps(): void {
    this.chirpService.getChirps()
      .then(data => {
        this.chirps = data;
      });
  }

  onChirped(content: string) {
    this.chirpService.postChirp({content})
      .then((data) => {
        this.getChirps();
      });
  }
}
