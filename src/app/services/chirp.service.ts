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

  postChirp(chirpContent): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${environment.apiUrl}/chirps`, chirpContent, options)
      .toPromise();
  }

  shareChirp(chirpId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${environment.apiUrl}/chirps/share`, { chirpId }, options)
      .toPromise();
  }

  deleteChirp(chirpId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${environment.apiUrl}/chirps/delete`, { chirpId }, options)
      .toPromise();
  }
}
