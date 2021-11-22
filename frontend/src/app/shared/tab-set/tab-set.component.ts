import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.css'],
})
export class TabSetComponent {
  @Output() tabChange = new EventEmitter<number>();
  @Input() index = 0;

  onChange(i: number): void {
    if (this.index === i) {
      // Ignore.
      return;
    }

    this.index = i;
    this.tabChange.emit(i);
  }
}
