import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  feedback = '';
  showSuccess = false;

  constructor(private feedbackService: FeedbackService) {}

  onSend() {
    this.showSuccess = false;
    if (!this.feedback) {
      return;
    }

    this.feedbackService.sendFeedback(this.feedback).subscribe({
      complete: () => {
        this.showSuccess = true;
        this.feedback = '';
      },
    });
  }
}
