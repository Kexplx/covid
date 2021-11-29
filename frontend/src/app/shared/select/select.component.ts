import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';

export interface SelectOption {
  value: any;
  name: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() options!: SelectOption[];
  @Input() initialValue: any;
  @Input() width = '190px';

  @Output() appSelect = new EventEmitter<SelectOption>();

  optionsToDisplay: SelectOption[] = [];

  selectedOption: SelectOption = { name: '', value: '' };
  hasChanges = false;

  isOpen = false;

  ngOnInit(): void {
    this.optionsToDisplay = [...this.options];
    if (this.initialValue) {
      this.selectedOption = this.options.find(o => o.value === this.initialValue)!;
      this.removeSelectedFromOptions();
    }
  }

  private removeSelectedFromOptions() {
    this.optionsToDisplay = [...this.options];
    const indexOf = this.optionsToDisplay.indexOf(this.selectedOption);
    this.optionsToDisplay.splice(indexOf, 1);
  }

  onOptionClick(option: SelectOption) {
    this.hasChanges = true;
    this.selectedOption = option;
    this.removeSelectedFromOptions();
    this.isOpen = false;

    this.appSelect.emit(option);
  }

  onClick() {
    this.isOpen = !this.isOpen;
    this.hasChanges = false;
  }

  onBlur() {
    // This is the blur event of the button.
    // We delay this event to make the `onOptionClick` handler run before.
    timer(0).subscribe(() => {
      if (!this.hasChanges) {
        // User clicked outside of the button or the ul so we close the ul.
        this.isOpen = false;
      }
    });
  }
}
