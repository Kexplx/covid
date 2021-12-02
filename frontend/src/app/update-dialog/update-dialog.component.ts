import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent {
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit();
  }

  onUpdate() {
    location.reload();
  }
}
