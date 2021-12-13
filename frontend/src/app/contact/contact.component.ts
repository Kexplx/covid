import { Component, OnDestroy } from '@angular/core';
import { CacheService } from '../cache.service';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnDestroy {
  feedback = this.cache.get<string>('feedback') ?? '';
  showSuccess = false;

  constructor(private feedbackService: FeedbackService, private cache: CacheService) {}

  ngOnDestroy(): void {
    this.cache.set('feedback', this.feedback);
  }

  onSend() {
    this.showSuccess = false;
    if (!this.feedback) {
      return;
    }

    this.feedbackService.sendFeedback(this.feedback).subscribe({
      complete: () => {
        this.showSuccess = true;
        this.feedback = '';
        this.cache.delete('feedback');
      },
    });
  }

  onShare() {
    // Share mechanism only works on HTTPS page.
    const shareData = { url: 'https://kexplx.github.io/covid' };

    navigator.share(shareData);
  }
}
