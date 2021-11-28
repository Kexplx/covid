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

  firstVaccination_percentBiontech = 0;
  firstVaccination_percentAstra = 0;
  firstVaccination_percentModerna = 0;
  firstVaccination_percentJanssen = 0;

  secondVaccination_percentBiontech = 0;
  secondVaccination_percentAstra = 0;
  secondVaccination_percentModerna = 0;

  ngOnInit() {
    // Calculate percentage cases and deaths.
    const bavariaPopulation = 13124737;

    this.percentInfected = (this.bavaria.totalCases / bavariaPopulation) * 100;
    this.percentDeaths = (this.bavaria.totalDeaths / this.bavaria.totalCases) * 100;

    // Calculate percentage vaccines used.
    const {
      bavaria_numberOfPeopleAtLeastOnceVaccinated: numberOfPeopleAtLeastOnceVaccinated,
      bavaria_numberOfPeopleFullyVaccinated: numberOfPeopleFullyVaccinated,
    } = this.vaccination;

    const {
      biontech: f_biontech,
      astrazeneca: f_astrazeneca,
      janssen: f_janssen,
      moderne: f_moderna,
    } = this.vaccination.bavaria_vaccinesUsed_firstVaccination;

    this.firstVaccination_percentBiontech = (f_biontech / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentAstra = (f_astrazeneca / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentModerna = (f_moderna / numberOfPeopleAtLeastOnceVaccinated) * 100;
    this.firstVaccination_percentJanssen = (f_janssen / numberOfPeopleAtLeastOnceVaccinated) * 100;

    const {
      biontech: s_biontech,
      astrazeneca: s_astrazeneca,
      moderne: s_moderna,
    } = this.vaccination.bavaria_vaccinesUsed_secondVaccination;

    this.secondVaccination_percentBiontech = (s_biontech / numberOfPeopleFullyVaccinated) * 100;
    this.secondVaccination_percentAstra = (s_astrazeneca / numberOfPeopleFullyVaccinated) * 100;
    this.secondVaccination_percentModerna = (s_moderna / numberOfPeopleFullyVaccinated) * 100;
  }
}
