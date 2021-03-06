import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

export interface Feedback {
  text: string;
  submittedDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT_TOKEN) private environment: Environment) {}

  sendFeedback(text: string): Observable<void> {
    if (!text.trim()) {
      return EMPTY;
    }

    const feedback: Feedback = { text, submittedDate: new Date().toISOString() };

    const url = `${this.environment.api}/feedback`;

    return this.http.post<void>(url, feedback);
  }
}
