import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() text = 'Default';
  @Output() check = new EventEmitter<boolean>();

  onCheck() {
    this.checked = !this.checked;
    this.check.emit(this.checked);
  }
}
