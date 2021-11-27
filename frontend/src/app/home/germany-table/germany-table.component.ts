import { Component, Input, OnInit } from '@angular/core';
import { Germany } from 'src/app/germany.service';
import { Vaccination } from 'src/app/vaccination.service';

@Component({
  selector: 'app-germany-table',
  templateUrl: './germany-table.component.html',
  styleUrls: ['./germany-table.component.css'],
})
export class GermanyTableComponent implements OnInit {
  @Input() germany!: Germany;
  @Input() vaccination!: Vaccination;

  isHospitalizationIncidenceDescriptionVisible = false;

  isTotalCasesDescVisible = false;
  percentInfected = 0;

  isTotalDeathsDescVisible = false;
  percentDeaths = 0;

  ngOnInit() {
    const germanyPopulation = 83106896;
    this.percentInfected = (this.germany.totalCases / germanyPopulation) * 100;

    this.percentDeaths = (this.germany.totalDeaths / this.germany.totalCases) * 100;
  }
}
