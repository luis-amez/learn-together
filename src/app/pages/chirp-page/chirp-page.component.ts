import { Component, OnInit } from '@angular/core';

import { ChirpService } from '../../services/chirp.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chirp-page',
  templateUrl: './chirp-page.component.html',
  styleUrls: ['./chirp-page.component.css']
})
export class ChirpPageComponent implements OnInit {

  chirps: Array<any>;
  username: String;

  constructor(
    private chirpService: ChirpService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getChirps();
    this.authService.me()
      .then(data => {
        this.username = data.username;
      });
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
