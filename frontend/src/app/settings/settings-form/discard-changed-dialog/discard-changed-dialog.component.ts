import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { BaseDialog } from 'src/app/shared/BaseDialog';
import { SwipeService } from 'src/app/swipe.service';

@Component({
  selector: 'app-discard-changed-dialog',
  templateUrl: './discard-changed-dialog.component.html',
  styleUrls: ['./discard-changed-dialog.component.css'],
})
export class DiscardChangedDialogComponent extends BaseDialog implements OnDestroy {
  @Output() discard = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(swipeService: SwipeService) {
    super(swipeService);
  }

  onDiscard() {
    this.discard.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }
}
