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

  percentInfected = 0;
  percentDeaths = 0;

  firstVaccination_percentBiontech = 0;
  firstVaccination_percentAstra = 0;
  firstVaccination_percentModerna = 0;
  firstVaccination_percentJanssen = 0;

  secondVaccination_percentBiontech = 0;
  secondVaccination_percentAstra = 0;
  secondVaccination_percentModerna = 0;

  ngOnInit() {
    const germanyPopulation = 83106896;
    this.percentInfected = (this.germany.totalCases / germanyPopulation) * 100;
    this.percentDeaths = (this.germany.totalDeaths / this.germany.totalCases) * 100;

    // Calculate percentage vaccines used.
    const {
      numberOfPeopleAtLeastOnceVaccinated: numberOfPeopleAtLeastOnceVaccinated,
      numberOfPeopleFullyVaccinated: numberOfPeopleFullyVaccinated,
    } = this.vaccination;

    const {
      biontech: f_biontech,
      astrazeneca: f_astrazeneca,
      janssen: f_janssen,
      moderne: f_moderna,
    } = this.vaccination.vaccinesUsed_firstVaccination;

    this.firstVaccination_percentBiontech = (f_biontech / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentAstra = (f_astrazeneca / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentModerna = (f_moderna / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentJanssen = (f_janssen / numberOfPeopleAtLeastOnceVaccinated) * 100;

    const {
      biontech: s_biontech,
      astrazeneca: s_astrazeneca,
      moderne: s_moderna,
    } = this.vaccination.vaccinesUsed_secondVaccination;

    this.secondVaccination_percentBiontech = (s_biontech / numberOfPeopleFullyVaccinated) * 100;
    this.secondVaccination_percentAstra = (s_astrazeneca / numberOfPeopleFullyVaccinated) * 100;
    this.secondVaccination_percentModerna = (s_moderna / numberOfPeopleFullyVaccinated) * 100;
  }
}
