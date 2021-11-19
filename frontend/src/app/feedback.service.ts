import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Feedback {
  text: string;
  submittedDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  sendFeedback(text: string) {
    const feedback: Feedback = { text, submittedDate: new Date().toISOString() };

    const url = `${environment.api}/feedback`;

    return this.http.post<void>(url, feedback);
  }
}
