import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChirpService {

  constructor(private httpClient: HttpClient) { }

  getChirps(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${environment.apiUrl}/chirps`, options)
      .toPromise();
  }

  postChirp(chirp): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${environment.apiUrl}/chirps`, chirp, options)
      .toPromise();
  }
}
