import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-incidence-tag',
  templateUrl: './incidence-tag.component.html',
  styleUrls: ['./incidence-tag.component.css'],
})
export class IncidenceTagComponent implements OnInit {
  @Input() incidence = 100;
  @Input() decimalPoints: number | undefined;
  @Input() hospitalization = false;
  fontColor = 'rgb(253, 150, 68)';
  backgroundColor = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.fontColor = this.hospitalization
      ? this.getColorByHospitalizationIncidence(this.incidence)
      : this.getColorByIncidence(this.incidence);

    this.backgroundColor = this.fontColor.replace(')', ',0.1)').replace('rgb', 'rgba');

    if (!this.decimalPoints) {
      this.decimalPoints = this.settingsService.settings.decimalPoints;
    }
  }

  getColorByIncidence(incidence: number): string {
    if (incidence < 100) {
      return 'rgb(39, 174, 96)';
    } else if (incidence < 400) {
      return 'rgb(243, 156, 18)';
    } else if (incidence < 800) {
      return 'rgb(231, 76, 60)';
    } else {
      return 'rgb(155, 89, 182)';
    }
  }

  getColorByHospitalizationIncidence(incidence: number): string {
    if (incidence < 3) {
      return 'rgb(39, 174, 96)';
    } else if (incidence < 6) {
      return 'rgb(243, 156, 18)';
    } else if (incidence < 8) {
      return 'rgb(231, 76, 60)';
    } else {
      return 'rgb(155, 89, 182)';
    }
  }
}
