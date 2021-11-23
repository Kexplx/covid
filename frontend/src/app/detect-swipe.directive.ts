import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDetectSwipe]',
})
export class DetectSwipeDirective {
  @Output() rightToLeftSwipe = new EventEmitter<void>();
  @Output() leftToRightSwipe = new EventEmitter<void>();

  private touchStartX = 0;
  private touchEndX = 0;

  @HostListener('touchstart', ['$event']) onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches.item(0)?.clientX || 0;
  }

  @HostListener('touchend', ['$event']) onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches.item(0)?.clientX || 0;
    this.determineSwipeDirection();
  }

  private determineSwipeDirection() {
    if (this.touchEndX === this.touchStartX) {
      // User simply touched the screen
      // without swiping, we don't care.
      return;
    }

    if (this.touchStartX < this.touchEndX) {
      // Left to right swipe.
      this.leftToRightSwipe.emit();
    } else if (this.touchStartX > this.touchEndX) {
      // Right to left swipe.
      this.rightToLeftSwipe.emit();
    }
  }
}
