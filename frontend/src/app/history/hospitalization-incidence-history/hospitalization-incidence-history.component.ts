import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { State } from 'src/app/state.service';

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
  germanyValuesRaw: number[] = [];
  bavariaValuesRaw: number[] = [];

  ngOnInit(): void {
    const entriesWithIncidence = this.germanyHistory.filter(g => g.hospitalizationIncidence !== undefined).length;

    this.germanyValuesRaw = this.germanyHistory
      .slice(0, entriesWithIncidence)
      .map(g => g.hospitalizationIncidence)
      .reverse();
    this.bavariaValuesRaw = this.bavariaHistory
      .slice(0, entriesWithIncidence)
      .map(b => b.hospitalizationIncidence)
      .reverse();

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
