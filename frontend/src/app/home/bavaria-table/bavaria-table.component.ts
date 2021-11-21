import { Component, Input } from '@angular/core';
import { State } from 'src/app/state.service';
import { Vaccination } from 'src/app/vaccination.service';

@Component({
  selector: 'app-bavaria-table',
  templateUrl: './bavaria-table.component.html',
  styleUrls: ['./bavaria-table.component.css'],
})
export class BavariaTableComponent {
  @Input() bavaria!: State;
  @Input() vaccination!: Vaccination;

  isHospitalizationIncidenceDescriptionVisible = false;
}
