import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { districtPreviews } from '../../../district-previews';

export interface DistrictPreview {
  code: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-district-auto-complete',
  templateUrl: './district-auto-complete.component.html',
  styleUrls: ['./district-auto-complete.component.css'],
})
export class DistrictAutoCompleteComponent implements OnInit, OnDestroy {
  @Output() districtSelect = new EventEmitter<DistrictPreview>();

  isOpen = false;
  filter = '';
  filteredDistrictPreviews: DistrictPreview[] = [];

  private districtPreviews = districtPreviews;

  private subsink = new SubSink();

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  ngOnInit() {
    this.subsink.sink = fromEvent(this.doc, 'click').subscribe(() => (this.isOpen = false));

    this.reset();
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  onInputClick() {
    this.isOpen = true;
  }

  onInput() {
    if (!this.filter.trim()) {
      return;
    }

    this.filteredDistrictPreviews = this.districtPreviews.filter(d =>
      d.name.toLocaleLowerCase().startsWith(this.filter.toLocaleLowerCase().trim()),
    );
  }

  onDistrictSelect(districtPreview: DistrictPreview) {
    this.districtSelect.emit(districtPreview);
    this.reset();
  }

  private reset() {
    this.filter = '';
  }
}
