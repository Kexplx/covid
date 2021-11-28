import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { CHART_COLORS } from '../chart-colors';

@Component({
  selector: 'app-germany-new-infections',
  templateUrl: './germany-new-infections.component.html',
  styleUrls: ['./germany-new-infections.component.css'],
})
export class GermanyNewInfectionsComponent implements OnInit {
  @Input() germanyHistory!: Germany[];

  dataset: { data: number[]; color: string } = { data: [], color: CHART_COLORS.purple };
  labels: string[] = [];
  lastUpdated = '';

  constructor() {}

  ngOnInit(): void {
    const entriesWithIncidenceLength = this.germanyHistory.filter(g => g.newCases !== undefined).length;

    this.dataset.data = this.germanyHistory
      .slice(0, entriesWithIncidenceLength)
      .map(germany => Math.round(germany.newCases))
      .reverse();

    this.labels = this.germanyHistory
      .slice(0, entriesWithIncidenceLength)

      .map(germany => {
        const date = new Date(germany.lastUpdated);

        return `${date.getDate()}.${date.getMonth() + 1}`;
      })
      .reverse();

    this.lastUpdated = this.germanyHistory[0].lastUpdated;
  }
}
