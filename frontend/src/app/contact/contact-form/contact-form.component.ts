import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
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
