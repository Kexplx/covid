import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { State } from 'src/app/state.service';
import { CHART_COLORS } from '../chart-colors';
import { Dataset } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-hospitalization-incidence-history',
  templateUrl: './hospitalization-incidence-history.component.html',
  styleUrls: ['./hospitalization-incidence-history.component.css'],
})
export class HospitalizationIncidenceHistoryComponent implements OnInit {
  @Input() germanyHistory!: Germany[];
  @Input() bavariaHistory!: State[];

  lastUpdated: string = '';
  labels: string[] = [];
  datasets: Dataset[] = [];

  ngOnInit(): void {
    const entriesWithIncidence = this.germanyHistory.filter(g => g.hospitalizationIncidence !== undefined).length;

    const germanyValuesRaw = this.germanyHistory
      .slice(0, entriesWithIncidence)
      .map(g => g.hospitalizationIncidence)
      .reverse();
    this.datasets.push({ data: germanyValuesRaw, color: CHART_COLORS.blue, label: 'Deutschland' });

    const bavariaValuesRaw = this.bavariaHistory
      .slice(0, entriesWithIncidence)
      .map(b => b.hospitalizationIncidence)
      .reverse();
    this.datasets.push({ data: bavariaValuesRaw, color: CHART_COLORS.purple, label: 'Bayern' });

    this.labels = this.germanyHistory
      .slice(0, entriesWithIncidence)
      .map(germany => {
        const date = new Date(germany.lastUpdated);

        return `${date.getDate()}.${date.getMonth() + 1}`;
      })
      .reverse();

    this.lastUpdated = this.germanyHistory[0].lastUpdated;
  }
}
