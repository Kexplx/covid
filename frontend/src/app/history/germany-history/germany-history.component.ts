import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { CHART_COLORS } from '../chart-colors';

@Component({
  selector: 'app-germany-history',
  templateUrl: './germany-history.component.html',
  styleUrls: ['./germany-history.component.css'],
})
export class GermanyHistoryComponent implements OnInit {
  @Input() germanyHistory!: Germany[];

  dataset: { data: number[]; color: string } = { data: [], color: CHART_COLORS.red };
  labels: string[] = [];
  lastUpdated = '';

  constructor() {}

  ngOnInit(): void {
    this.dataset.data = this.germanyHistory.map(germany => Math.round(germany.incidence)).reverse();

    this.labels = this.germanyHistory
      .map(germany => {
        const date = new Date(germany.lastUpdated);

        return `${date.getDate()}.${date.getMonth() + 1}`;
      })
      .reverse();

    this.lastUpdated = this.germanyHistory[0].lastUpdated;
  }
}
