import { Component, Input } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { CHART_COLORS } from '../chart-colors';
import { Dataset } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-germany-history',
  templateUrl: './germany-history.component.html',
  styleUrls: ['./germany-history.component.css'],
})
export class GermanyHistoryComponent {
  @Input() germanyHistory!: Germany[];

  dataset: Dataset = { data: [], color: CHART_COLORS.red };
  labels: string[] = [];

  ngOnInit(): void {
    this.dataset.data = this.germanyHistory.map(germany => Math.round(germany.incidence)).reverse();

    this.labels = this.germanyHistory
      .map(germany => {
        const date = new Date(germany.lastUpdated);
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

        return `${day}.${month}`;
      })
      .reverse();
  }
}
