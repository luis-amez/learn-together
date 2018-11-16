import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Promise<Object> {
    return this.httpClient.get('http://localhost:3000/question').toPromise();
  }
}
