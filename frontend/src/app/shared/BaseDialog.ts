import { SwipeService } from '../swipe.service';

export abstract class BaseDialog {
  constructor(private swipeService: SwipeService) {
    document.body.style.overflow = 'hidden';
    swipeService.disabled = true;
  }

  protected cleanup() {
    document.body.style.overflow = 'auto';
    this.swipeService.disabled = false;
  }
}
