import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() shadow = false;
  @Input() success = false;
  @Input() bottomText = '';
  @Input() color: 'default' | 'success' = 'default';
  @Input() ml = '0px';

  @Output() appClick = new EventEmitter();

  onClick() {
    this.appClick.emit();
  }
}
