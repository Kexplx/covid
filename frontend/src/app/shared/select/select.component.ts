import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { SubSink } from 'subsink';

export interface SelectOption {
  value: any;
  name: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit, OnDestroy {
  @Input() options!: SelectOption[];
  @Input() initialValue: any;
  @Input() width = '190px';

  @Output() appSelect = new EventEmitter<SelectOption>();

  optionsToDisplay: SelectOption[] = [];
  selectedOption: SelectOption = { name: '', value: '' };
  isOpen = false;

  private subsink = new SubSink();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.optionsToDisplay = [...this.options];
    if (this.initialValue) {
      this.selectedOption = this.options.find(o => o.value === this.initialValue)!;
      this.removeSelectedFromOptions();
    }

    document.addEventListener('click', () => (this.isOpen = false));
    this.subsink.sink = fromEvent(this.document, 'click').subscribe(() => (this.isOpen = false));
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  private removeSelectedFromOptions() {
    this.optionsToDisplay = [...this.options];
    const indexOf = this.optionsToDisplay.indexOf(this.selectedOption);
    this.optionsToDisplay.splice(indexOf, 1);
  }

  onOptionClick(option: SelectOption) {
    this.selectedOption = option;
    this.removeSelectedFromOptions();
    this.isOpen = false;

    this.appSelect.emit(option);
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
