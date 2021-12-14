import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { CHART_COLORS } from '../chart-colors';
import { Dataset } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-germany-new-infections',
  templateUrl: './germany-new-infections.component.html',
  styleUrls: ['./germany-new-infections.component.css'],
})
export class GermanyNewInfectionsComponent implements OnInit {
  @Input() germanyHistory!: Germany[];

  dataset: Dataset = { data: [], color: CHART_COLORS.purple };
  labels: string[] = [];

  ngOnInit(): void {
    this.dataset.data = this.germanyHistory.map(germany => Math.round(germany.newCases)).reverse();

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
