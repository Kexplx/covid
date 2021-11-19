import { Component, EventEmitter, Output } from '@angular/core';

export type TabIndex = 0 | 1 | 2 | 3;

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.css'],
})
export class TabSetComponent {
  @Output() tabChange = new EventEmitter<TabIndex>();

  index: TabIndex = 0;

  onChange(i: TabIndex): void {
    if (this.index === i) {
      // Ignore.
      return;
    }

    this.index = i;
    this.tabChange.emit(i);
  }
}
