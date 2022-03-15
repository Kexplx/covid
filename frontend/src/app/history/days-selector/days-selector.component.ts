import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-days-selector',
  templateUrl: './days-selector.component.html',
  styleUrls: ['./days-selector.component.css'],
})
export class DaysSelectorComponent implements OnInit {
  @Output() daysSelect = new EventEmitter<number>();
  @Input() daysSelected = 8;
  selectedButtonId = 0;

  ngOnInit(): void {
    this.selectedButtonId = [8, 31, 71].indexOf(this.daysSelected);
  }

  onSelect(buttonId: number) {
    if (this.selectedButtonId !== buttonId) {
      this.selectedButtonId = buttonId;
      this.daysSelect.emit(this.buttonIdToDays(buttonId));
    }
  }

  private buttonIdToDays(buttonId: number) {
    const days = [8, 31, 71];

    return days[buttonId];
  }
}
