import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { BaseDialog } from '../shared/BaseDialog';
import { SwipeService } from '../swipe.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent extends BaseDialog implements OnDestroy {
  @Output() close = new EventEmitter();

  constructor(swipeService: SwipeService) {
    super(swipeService);
  }

  onClose() {
    this.close.emit();
  }

  onUpdate() {
    location.reload();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }
}
