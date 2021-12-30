import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppData } from 'src/app/data.service';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-covid-daily',
  templateUrl: './covid-daily.component.html',
  styleUrls: ['./covid-daily.component.css'],
})
export class CovidDailyComponent implements OnInit {
  @Input() data!: AppData;
  @Output() close = new EventEmitter();

  newCases = 0;

  incidenceGermany = 0;
  incidenceGermanyDiffToYesterday = 0;

  incidenceDistrict = 0;
  incidenceDistrictDiffToYesterday = 0;
  districtName = '';

  lastUpdated = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.lastUpdated = this.data.lastUpdated;
    this.newCases = this.data.germanyHistory[0].newCases;

    this.incidenceGermany = this.data.germanyHistory[0].incidence;
    this.incidenceGermanyDiffToYesterday = this.incidenceGermany - this.data.germanyHistory[1].incidence;

    const districtCode =
      this.settingsService.settings.favoriteDistrictCode || this.settingsService.settings.districts[0].code;
    const districtHistory = this.data.listOfDistrictHistories.find(h => h[0].code === districtCode);
    this.incidenceDistrict = districtHistory![0].incidence;
    this.incidenceDistrictDiffToYesterday = this.incidenceDistrict - districtHistory![1].incidence;
    this.districtName = districtHistory![0].name;
  }

  onClose() {
    this.close.emit();
  }
}
