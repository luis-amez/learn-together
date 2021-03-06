import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Promise<any> {
    return this.httpClient.get(`${environment.apiUrl}/questions`)
      .toPromise();
  }
}
