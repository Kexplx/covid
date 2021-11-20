import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  selected: SelectOption = { name: '', value: '' };
  isOpen = false;

  ngOnInit(): void {
    this.optionsToDisplay = [...this.options];
    if (this.initialValue) {
      this.selected = this.options.find(o => o.value === this.initialValue)!;
      this.removeSelectedFromOptions();
    }
  }

  onSelect(option: SelectOption) {
    this.selected = option;
    this.removeSelectedFromOptions();
    this.isOpen = false;

    this.appSelect.emit(option);
  }

  removeSelectedFromOptions() {
    this.optionsToDisplay = [...this.options];
    const indexOf = this.optionsToDisplay.indexOf(this.selected);
    this.optionsToDisplay.splice(indexOf, 1);
  }
}
