import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css'],
})
export class DiffComponent implements OnInit {
  @Input() value = 0;

  isPositive = false;
  isNegative = false;
  isZero = false;

  ngOnInit() {
    this.isPositive = this.value > 0;
    this.isNegative = this.value < 0;
    this.isZero = this.value === 0;
  }
}
