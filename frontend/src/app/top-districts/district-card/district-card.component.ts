import { Component, Input, OnInit } from '@angular/core';
import { District } from 'src/app/district.service';

@Component({
  selector: 'app-district-card',
  templateUrl: './district-card.component.html',
  styleUrls: ['./district-card.component.css'],
})
export class DistrictCardComponent implements OnInit {
  @Input() district!: District;
  @Input() index = -1;

  percentInfected = 0;
  totalInfected = 0;

  fontColor = 'rgb(253, 150, 68)';
  backgroundColor = '';

  ngOnInit(): void {
    this.fontColor = this.getColorByIncidence(this.district.incidence);
    this.backgroundColor = this.fontColor.replace(')', ',0.1)').replace('rgb', 'rgba');

    this.totalInfected = Math.round((Math.round(this.district.incidence) / 100000) * this.district.population!);
    this.percentInfected = (this.totalInfected / this.district.population!) * 100;
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
}
