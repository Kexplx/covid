import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-days-selector',
  templateUrl: './days-selector.component.html',
  styleUrls: ['./days-selector.component.css'],
})
export class DaysSelectorComponent {
  @Output() daysSelect = new EventEmitter<number>();
  @Input() selectedDays = 8;
  days = [8, 32, 72];

  onSelect(days: number) {
    if (this.selectedDays !== days) {
      this.selectedDays = days;
      this.daysSelect.emit(days);
    }
  }
}
