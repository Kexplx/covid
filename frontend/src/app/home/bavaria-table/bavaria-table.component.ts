import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/state.service';
import { Vaccination } from 'src/app/vaccination.service';

@Component({
  selector: 'app-bavaria-table',
  templateUrl: './bavaria-table.component.html',
  styleUrls: ['./bavaria-table.component.css'],
})
export class BavariaTableComponent implements OnInit {
  @Input() bavaria!: State;
  @Input() vaccination!: Vaccination;

  percentInfected = 0;
  percentDeaths = 0;

  ngOnInit() {
    // Calculate percentage cases and deaths.
    const bavariaPopulation = 13124737;

    this.percentInfected = (this.bavaria.totalCases / bavariaPopulation) * 100;
    this.percentDeaths = (this.bavaria.totalDeaths / this.bavaria.totalCases) * 100;
  }
}
